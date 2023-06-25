const {
  provider,
  wallet,
  certificateContract,
} = require("../config/ethersScript");
const asyncHandler = require("express-async-handler");

// Function to issue a certificate
const issueCertificate = asyncHandler(async (req, res) => {
  const {
    registerNumber,
    studentName,
    institution,
    yearOfAdmission,
    monthAndYearOfPassing,
    cgpa,
    subjectNames,
    subjectCredits,
    subjectGrades,
    subjectExamMonths,
    subjectExamYears,
  } = req.body;

  try {
    // Input validation
    if (
      !registerNumber ||
      !studentName ||
      !institution ||
      !yearOfAdmission ||
      !monthAndYearOfPassing ||
      !cgpa ||
      !subjectNames ||
      !subjectCredits ||
      !subjectGrades ||
      !subjectExamMonths ||
      !subjectExamYears
    ) {
      return res
        .status(400)
        .json({ message: "Missing or invalid input data." });
    }

    const signer = wallet.connect(provider);
    const contractWithSigner = certificateContract.connect(signer);
    console.log(contractWithSigner);

    const certificateExists = await contractWithSigner.checkCertificateExists(
      registerNumber
    );

    if (certificateExists) {
      console.log(
        "Certificate already issued for student with registration number:",
        registerNumber
      );
      return res
        .status(409)
        .json({ message: "Certificate already issued for this student." });
    }

    await contractWithSigner.issueCertificate(
      registerNumber,
      studentName,
      institution,
      yearOfAdmission,
      monthAndYearOfPassing,
      cgpa,
      subjectNames,
      subjectCredits,
      subjectGrades,
      subjectExamMonths,
      subjectExamYears
    );
    console.log("Certificate issued successfully!");
    return res
      .status(200)
      .json({ message: "Certificate issued successfully." });
  } catch (error) {
    console.error("Failed to issue certificate:", error);
    return res.status(500).json({ message: "Failed to issue certificate." });
  }
});

const viewCertificate = asyncHandler(async (req, res, next) => {
  try {
    const { registerNumber } = req.body;
    const studentNamePromise =
      certificateContract.getCertificateStudentName(registerNumber);
    const institutionPromise =
      certificateContract.getCertificateInstitution(registerNumber);
    const yearOfAdmissionPromise =
      certificateContract.getCertificateYearOfAdmission(registerNumber);
    const monthAndYearOfPassingPromise =
      certificateContract.getCertificateMonthAndYearOfPassing(registerNumber);
    const cgpaPromise = certificateContract.getCertificateCGPA(registerNumber);

    const [
      studentName,
      institution,
      yearOfAdmission,
      monthAndYearOfPassing,
      cgpa,
    ] = await Promise.all([
      studentNamePromise,
      institutionPromise,
      yearOfAdmissionPromise,
      monthAndYearOfPassingPromise,
      cgpaPromise,
    ]);

    if (
      !studentName ||
      !institution ||
      !yearOfAdmission ||
      !monthAndYearOfPassing ||
      !cgpa
    ) {
      res.status(404).json({ error: "Certificate not found!" });
      return;
    }

    const subjectPromises = [];
    for (let i = 0; i < 8; i++) {
      const semesterIndex = i;
      const promise = certificateContract.getSubjectNames(
        registerNumber,
        semesterIndex
      );
      subjectPromises.push(promise);
    }

    const subjectNamesList = await Promise.all(subjectPromises);

    const examDataPromises = subjectNamesList.map((subjectNames, i) => {
      const semesterIndex = i;
      const gradeListPromises = [];
      const creditListPromises = [];
      const monthListPromises = [];
      const yearListPromises = [];

      subjectNames.forEach((subjectName) => {
        const gradePromise = certificateContract.getSubjectGrade(
          registerNumber,
          semesterIndex,
          subjectName
        );
        gradeListPromises.push(gradePromise);

        const creditPromise = certificateContract.getSubjectCredits(
          registerNumber,
          semesterIndex,
          subjectName
        );
        creditListPromises.push(creditPromise);

        const monthPromise = certificateContract.getSubjectExamMonth(
          registerNumber,
          semesterIndex,
          subjectName
        );
        monthListPromises.push(monthPromise);

        const yearPromise = certificateContract.getSubjectExamYear(
          registerNumber,
          semesterIndex,
          subjectName
        );
        yearListPromises.push(yearPromise);
      });

      const examDataPromise = Promise.all([
        Promise.all(gradeListPromises),
        Promise.all(creditListPromises),
        Promise.all(monthListPromises),
        Promise.all(yearListPromises),
      ]);

      return examDataPromise;
    });

    const examDataList = await Promise.all(examDataPromises);

    const examGradeList = examDataList.map(([gradeList]) => gradeList);
    const examcreditsList = examDataList.map(([, creditList]) => creditList);
    const examMonthList = examDataList.map(([, , monthList]) => monthList);
    const examYearList = examDataList.map(([, , , yearList]) => yearList);

    const response = {
      registerNumber,
      studentName,
      institution,
      yearOfAdmission,
      monthAndYearOfPassing,
      cgpa,
      subjectNamesList,
      examGradeList,
      examMonthList,
      examYearList,
      examcreditsList,
    };

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = {
  issueCertificate,
  viewCertificate,
};
