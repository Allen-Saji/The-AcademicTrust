const dotenv = require("dotenv").config();
const Web3 = require("web3");

const rpcEndpoint = "https://sepolia.infura.io/v3/" + process.env.INFURA_KEY; // Replace with the actual RPC endpoint for Sepolia testnet
const web3 = new Web3(rpcEndpoint);

const contractAbi = require("./CertificateContract.json");
const contractAddress = "0x04204a7134c067afe6febf80b0e86acb1b773517";
const contract = new web3.eth.Contract(contractAbi, contractAddress);

// Function to issue a certificate
async function issueCertificate(
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
) {
  try {
    await certificateContract.methods
      .issueCertificate(
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
      )
      .send({ from: "0x890919785ce4E4EE77a2566f48987eC008625770" });
    console.log("Certificate issued successfully!");
  } catch (error) {
    console.error("Failed to issue certificate:", error);
  }
}

// Function to retrieve student name from a certificate
async function getCertificateStudentName(registerNumber) {
  try {
    const studentName = await certificateContract.methods
      .getCertificateStudentName(registerNumber)
      .call();
    console.log("Student Name:", studentName);
  } catch (error) {
    console.error("Failed to retrieve student name:", error);
  }
}

// Function to retrieve register number from a certificate
async function getCertificateRegisterNumber(registerNumber) {
  try {
    const retrievedRegisterNumber = await certificateContract.methods
      .getCertificateRegisterNumber(registerNumber)
      .call();
    console.log("Register Number:", retrievedRegisterNumber);
  } catch (error) {
    console.error("Failed to retrieve register number:", error);
  }
}

// Function to retrieve institution from a certificate
async function getCertificateInstitution(registerNumber) {
  try {
    const institution = await certificateContract.methods
      .getCertificateInstitution(registerNumber)
      .call();
    console.log("Institution:", institution);
  } catch (error) {
    console.error("Failed to retrieve institution:", error);
  }
}

// Function to retrieve year of admission from a certificate
async function getCertificateYearOfAdmission(registerNumber) {
  try {
    const yearOfAdmission = await certificateContract.methods
      .getCertificateYearOfAdmission(registerNumber)
      .call();
    console.log("Year of Admission:", yearOfAdmission);
  } catch (error) {
    console.error("Failed to retrieve year of admission:", error);
  }
}

// Function to retrieve month and year of passing from a certificate
async function getCertificateMonthAndYearOfPassing(registerNumber) {
  try {
    const monthAndYearOfPassing = await certificateContract.methods
      .getCertificateMonthAndYearOfPassing(registerNumber)
      .call();
    console.log("Month and Year of Passing:", monthAndYearOfPassing);
  } catch (error) {
    console.error("Failed to retrieve month and year of passing:", error);
  }
}

// Function to retrieve CGPA from a certificate
async function getCertificateCGPA(registerNumber) {
  try {
    const cgpa = await certificateContract.methods
      .getCertificateCGPA(registerNumber)
      .call();
    console.log("CGPA:", cgpa);
  } catch (error) {
    console.error("Failed to retrieve CGPA:", error);
  }
}

// Function to retrieve subject credits from a certificate
async function getSubjectCredits(registerNumber, semesterIndex, subjectName) {
  try {
    const credits = await certificateContract.methods
      .getSubjectCredits(registerNumber, semesterIndex, subjectName)
      .call();
    console.log("Subject Credits:", credits);
  } catch (error) {
    console.error("Failed to retrieve subject credits:", error);
  }
}

// Function to retrieve subject grade from a certificate
async function getSubjectGrade(registerNumber, semesterIndex, subjectName) {
  try {
    const grade = await certificateContract.methods
      .getSubjectGrade(registerNumber, semesterIndex, subjectName)
      .call();
    console.log("Subject Grade:", grade);
  } catch (error) {
    console.error("Failed to retrieve subject grade:", error);
  }
}

// Function to retrieve subject exam month from a certificate
async function getSubjectExamMonth(registerNumber, semesterIndex, subjectName) {
  try {
    const examMonth = await certificateContract.methods
      .getSubjectExamMonth(registerNumber, semesterIndex, subjectName)
      .call();
    console.log("Subject Exam Month:", examMonth);
  } catch (error) {
    console.error("Failed to retrieve subject exam month:", error);
  }
}

// Function to retrieve subject exam year from a certificate
async function getSubjectExamYear(registerNumber, semesterIndex, subjectName) {
  try {
    const examYear = await certificateContract.methods
      .getSubjectExamYear(registerNumber, semesterIndex, subjectName)
      .call();
    console.log("Subject Exam Year:", examYear);
  } catch (error) {
    console.error("Failed to retrieve subject exam year:", error);
  }
}

// Function to retrieve subject names from a certificate
async function getSubjectNames(registerNumber, semesterIndex) {
  try {
    const subjectNames = await certificateContract.methods
      .getSubjectNames(registerNumber, semesterIndex)
      .call();
    console.log("Subject Names:", subjectNames);
  } catch (error) {
    console.error("Failed to retrieve subject names:", error);
  }
}

const contractCertificate = {
  issueCertificate,
  getCertificateCGPA,
  getCertificateInstitution,
  getCertificateMonthAndYearOfPassing,
  getCertificateRegisterNumber,
  getCertificateStudentName,
  getCertificateYearOfAdmission,
  getSubjectCredits,
  getSubjectExamMonth,
  getSubjectExamYear,
  getSubjectGrade,
  getSubjectNames,
};

export default contractCertificate;
