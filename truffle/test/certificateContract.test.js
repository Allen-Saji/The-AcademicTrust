const CertificateContract = artifacts.require("CertificateContract");

contract("CertificateContract", (accounts) => {
  let certificateContract;

  before(async () => {
    certificateContract = await CertificateContract.deployed();
  });

  it("should issue a certificate and retrieve student name", async () => {
    const registerNumber = "123";
    const studentName = "John Doe";
    const institution = "ABC University";
    const yearOfAdmission = 2021;
    const monthAndYearOfPassing = 2023;
    const cgpa = 8;
    const subjectNames = [["Subject 1", "Subject 2"], ["Subject 3"]];
    const subjectCredits = [[4, 3], [5]];
    const subjectGrades = [[80, 90], [75]];
    const subjectExamMonths = [5, 5];
    const subjectExamYears = [2022, 2023];

    await certificateContract.issueCertificate(
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

    const retrievedStudentName =
      await certificateContract.getCertificateStudentName(registerNumber);

    assert.equal(
      retrievedStudentName,
      studentName,
      "Retrieved student name does not match"
    );
  });

  // Add more test cases here
});
