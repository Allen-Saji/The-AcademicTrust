const CertificateContract = artifacts.require("CertificateContract");

contract("CertificateContract", (accounts) => {
  let certificateContract;
  const registerNumber = "12345";
  const studentName = "John Doe";
  const institution = "ABC University";
  const yearOfAdmission = 2020;
  const monthAndYearOfPassing = 2023;
  const cgpa = 8;
  const subjectNames = [["Math", "Science"], ["English"]];
  const subjectCredits = [[4, 3], [3]];
  const subjectGrades = [[85, 90], [75]];
  const subjectExamMonths = [12, 6];
  const subjectExamYears = [2022, 2023];

  before(async () => {
    certificateContract = await CertificateContract.deployed();
  });

  it("should issue a certificate and retrieve student name", async () => {
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

  it("should issue a certificate and retrieve register number", async () => {
    const retrievedRegisterNumber =
      await certificateContract.getCertificateRegisterNumber(registerNumber);

    assert.equal(
      retrievedRegisterNumber,
      registerNumber,
      "Retrieved register number does not match"
    );
  });

  it("should issue a certificate and retrieve institution", async () => {
    const retrievedInstitution =
      await certificateContract.getCertificateInstitution(registerNumber);

    assert.equal(
      retrievedInstitution,
      institution,
      "Retrieved institution does not match"
    );
  });

  it("should issue a certificate and retrieve year of admission", async () => {
    const retrievedYearOfAdmission =
      await certificateContract.getCertificateYearOfAdmission(registerNumber);

    assert.equal(
      retrievedYearOfAdmission,
      yearOfAdmission,
      "Retrieved year of admission does not match"
    );
  });

  it("should issue a certificate and retrieve month and year of passing", async () => {
    const retrievedMonthAndYearOfPassing =
      await certificateContract.getCertificateMonthAndYearOfPassing(
        registerNumber
      );

    assert.equal(
      retrievedMonthAndYearOfPassing,
      monthAndYearOfPassing,
      "Retrieved month and year of passing do not match"
    );
  });

  it("should issue a certificate and retrieve CGPA", async () => {
    const retrievedCGPA = await certificateContract.getCertificateCGPA(
      registerNumber
    );

    assert.equal(retrievedCGPA, cgpa, "Retrieved CGPA does not match");
  });

  it("should issue a certificate and retrieve subject credits", async () => {
    const semesterIndex = 0;
    const subjectName = subjectNames[semesterIndex][0];
    const retrievedSubjectCredits = await certificateContract.getSubjectCredits(
      registerNumber,
      semesterIndex,
      subjectName
    );

    assert.equal(
      retrievedSubjectCredits,
      subjectCredits[semesterIndex][0],
      "Retrieved subject credits do not match"
    );
  });

  it("should issue a certificate and retrieve subject grade", async () => {
    const semesterIndex = 0;
    const subjectName = subjectNames[semesterIndex][0];
    const retrievedSubjectGrade = await certificateContract.getSubjectGrade(
      registerNumber,
      semesterIndex,
      subjectName
    );

    assert.equal(
      retrievedSubjectGrade,
      subjectGrades[semesterIndex][0],
      "Retrieved subject grade does not match"
    );
  });

  it("should issue a certificate and retrieve subject exam month", async () => {
    const semesterIndex = 0;
    const subjectName = subjectNames[semesterIndex][0];
    const retrievedSubjectExamMonth =
      await certificateContract.getSubjectExamMonth(
        registerNumber,
        semesterIndex,
        subjectName
      );

    assert.equal(
      retrievedSubjectExamMonth,
      subjectExamMonths[semesterIndex],
      "Retrieved subject exam month does not match"
    );
  });

  it("should issue a certificate and retrieve subject exam year", async () => {
    const semesterIndex = 0;
    const subjectName = subjectNames[semesterIndex][0];
    const retrievedSubjectExamYear =
      await certificateContract.getSubjectExamYear(
        registerNumber,
        semesterIndex,
        subjectName
      );

    assert.equal(
      retrievedSubjectExamYear,
      subjectExamYears[semesterIndex],
      "Retrieved subject exam year does not match"
    );
  });

  it("should issue a certificate and retrieve subject names", async () => {
    const semesterIndex = 0;
    const retrievedSubjectNames = await certificateContract.getSubjectNames(
      registerNumber,
      semesterIndex
    );

    assert.deepEqual(
      retrievedSubjectNames,
      subjectNames[semesterIndex],
      "Retrieved subject names do not match"
    );
  });
});
