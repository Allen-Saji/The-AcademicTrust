const CertificateContract = artifacts.require("CertificateContract");

contract("CertificateContract", (accounts) => {
  let contractInstance;

  before(async () => {
    contractInstance = await CertificateContract.new();
  });

  it("should issue a certificate", async () => {
    const registerNumber = "123";
    const studentName = "John Doe";
    const institution = "Example University";
    const yearOfAdmission = 2020;
    const monthAndYearOfPassing = "June 2023";
    const cgpa = "4.0";

    const subjectNames = [["Subject 1", "Subject 2"], ["Subject 3"]];
    const subjectCredits = [[3, 4], [2]];
    const subjectGrades = [["A", "B"], ["C"]];
    const subjectExamMonths = [["Jan", "Feb"], ["Mar"]];
    const subjectExamYears = [[2021, 2022], [2023]];

    await contractInstance.issueCertificate(
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

    const certificateExists = await contractInstance.checkCertificateExists(
      registerNumber
    );
    assert.isTrue(certificateExists);
  });

  it("should get the student name from a certificate", async () => {
    const registerNumber = "123";
    const expectedStudentName = "John Doe";

    const studentName = await contractInstance.getCertificateStudentName(
      registerNumber
    );
    assert.equal(studentName, expectedStudentName);
  });

  it("should get the register number from a certificate", async () => {
    const registerNumber = "123";
    const expectedRegisterNumber = "123";

    const retrievedRegisterNumber =
      await contractInstance.getCertificateRegisterNumber(registerNumber);
    assert.equal(retrievedRegisterNumber, expectedRegisterNumber);
  });

  it("should get the institution from a certificate", async () => {
    const registerNumber = "123";
    const expectedInstitution = "Example University";

    const institution = await contractInstance.getCertificateInstitution(
      registerNumber
    );
    assert.equal(institution, expectedInstitution);
  });

  it("should get the year of admission from a certificate", async () => {
    const registerNumber = "123";
    const expectedYearOfAdmission = 2020;

    const yearOfAdmission =
      await contractInstance.getCertificateYearOfAdmission(registerNumber);
    assert.equal(yearOfAdmission, expectedYearOfAdmission);
  });

  it("should get the month and year of passing from a certificate", async () => {
    const registerNumber = "123";
    const expectedMonthAndYearOfPassing = "June 2023";

    const monthAndYearOfPassing =
      await contractInstance.getCertificateMonthAndYearOfPassing(
        registerNumber
      );
    assert.equal(monthAndYearOfPassing, expectedMonthAndYearOfPassing);
  });

  it("should get the CGPA from a certificate", async () => {
    const registerNumber = "123";
    const expectedCGPA = "4.0";

    const cgpa = await contractInstance.getCertificateCGPA(registerNumber);
    assert.equal(cgpa, expectedCGPA);
  });

  it("should get the subject credits from a certificate", async () => {
    const registerNumber = "123";
    const semesterIndex = 0;
    const subjectName = "Subject 1";
    const expectedCredits = 3;

    const credits = await contractInstance.getSubjectCredits(
      registerNumber,
      semesterIndex,
      subjectName
    );
    assert.equal(credits, expectedCredits);
  });

  it("should get the subject grade from a certificate", async () => {
    const registerNumber = "123";
    const semesterIndex = 0;
    const subjectName = "Subject 1";
    const expectedGrade = "A";

    const grade = await contractInstance.getSubjectGrade(
      registerNumber,
      semesterIndex,
      subjectName
    );
    assert.equal(grade, expectedGrade);
  });

  it("should get the subject exam month from a certificate", async () => {
    const registerNumber = "123";
    const semesterIndex = 0;
    const subjectName = "Subject 1";
    const expectedExamMonth = "Jan";

    const examMonth = await contractInstance.getSubjectExamMonth(
      registerNumber,
      semesterIndex,
      subjectName
    );
    assert.equal(examMonth, expectedExamMonth);
  });

  it("should get the subject exam year from a certificate", async () => {
    const registerNumber = "123";
    const semesterIndex = 0;
    const subjectName = "Subject 1";
    const expectedExamYear = 2021;

    const examYear = await contractInstance.getSubjectExamYear(
      registerNumber,
      semesterIndex,
      subjectName
    );
    assert.equal(examYear, expectedExamYear);
  });

  it("should get the subject names from a certificate", async () => {
    const registerNumber = "123";
    const semesterIndex = 0;
    const expectedSubjectNames = ["Subject 1", "Subject 2"];

    const subjectNames = await contractInstance.getSubjectNames(
      registerNumber,
      semesterIndex
    );
    assert.deepEqual(subjectNames, expectedSubjectNames);
  });
});
