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

// Function to retrieve student name from a certificate
async function getCertificateStudentName(registerNumber) {
  try {
    const studentName = await certificateContract.getCertificateStudentName(
      registerNumber
    );
    console.log("Student Name:", studentName);
  } catch (error) {
    console.error("Failed to retrieve student name:", error);
  }
}

// Function to retrieve register number from a certificate
async function getCertificateRegisterNumber(registerNumber) {
  try {
    const retrievedRegisterNumber =
      await certificateContract.getCertificateRegisterNumber(registerNumber);
    console.log("Register Number:", retrievedRegisterNumber);
  } catch (error) {
    console.error("Failed to retrieve register number:", error);
  }
}

// Function to retrieve institution from a certificate
async function getCertificateInstitution(registerNumber) {
  try {
    const institution = await certificateContract.getCertificateInstitution(
      registerNumber
    );
    console.log("Institution:", institution);
  } catch (error) {
    console.error("Failed to retrieve institution:", error);
  }
}

// Function to retrieve year of admission from a certificate
async function getCertificateYearOfAdmission(registerNumber) {
  try {
    const yearOfAdmission =
      await certificateContract.getCertificateYearOfAdmission(registerNumber);
    console.log("Year of Admission:", yearOfAdmission);
  } catch (error) {
    console.error("Failed to retrieve year of admission:", error);
  }
}

// Function to retrieve month and year of passing from a certificate
async function getCertificateMonthAndYearOfPassing(registerNumber) {
  try {
    const monthAndYearOfPassing =
      await certificateContract.getCertificateMonthAndYearOfPassing(
        registerNumber
      );
    console.log("Month and Year of Passing:", monthAndYearOfPassing);
  } catch (error) {
    console.error("Failed to retrieve month and year of passing:", error);
  }
}

// Function to retrieve CGPA from a certificate
async function getCertificateCGPA(registerNumber) {
  try {
    const cgpa = await certificateContract.getCertificateCGPA(registerNumber);
    console.log("CGPA:", cgpa);
  } catch (error) {
    console.error("Failed to retrieve CGPA:", error);
  }
}

// Function to retrieve subject credits from a certificate
async function getSubjectCredits(registerNumber, semesterIndex, subjectName) {
  try {
    const credits = await certificateContract.getSubjectCredits(
      registerNumber,
      semesterIndex,
      subjectName
    );
    console.log("Subject Credits:", credits);
  } catch (error) {
    console.error("Failed to retrieve subject credits:", error);
  }
}

// Function to retrieve subject grade from a certificate
async function getSubjectGrade(registerNumber, semesterIndex, subjectName) {
  try {
    const grade = await certificateContract.getSubjectGrade(
      registerNumber,
      semesterIndex,
      subjectName
    );
    console.log("Subject Grade:", grade);
  } catch (error) {
    console.error("Failed to retrieve subject grade:", error);
  }
}

// Function to retrieve subject exam month from a certificate
async function getSubjectExamMonth(registerNumber, semesterIndex, subjectName) {
  try {
    const examMonth = await certificateContract.getSubjectExamMonth(
      registerNumber,
      semesterIndex,
      subjectName
    );
    console.log("Subject Exam Month:", examMonth);
  } catch (error) {
    console.error("Failed to retrieve subject exam month:", error);
  }
}

// Function to retrieve subject exam year from a certificate
async function getSubjectExamYear(registerNumber, semesterIndex, subjectName) {
  try {
    const examYear = await certificateContract.getSubjectExamYear(
      registerNumber,
      semesterIndex,
      subjectName
    );
    console.log("Subject Exam Year:", examYear);
  } catch (error) {
    console.error("Failed to retrieve subject exam year:", error);
  }
}

// Function to retrieve subject names from a certificate
async function getSubjectNames(registerNumber, semesterIndex) {
  try {
    const subjectNames = await certificateContract.getSubjectNames(
      registerNumber,
      semesterIndex
    );
    console.log("Subject Names:", subjectNames);
  } catch (error) {
    console.error("Failed to retrieve subject names:", error);
  }
}

module.exports = {
  issueCertificate,
};
