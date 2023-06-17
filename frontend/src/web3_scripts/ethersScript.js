import { ethers } from "ethers";
import contractAbi from "./CertificateContract.json";

const privateKey =
  "d195306504790016ccb08389a96776f1c19868de17d3d84d84f71345e1ff48e9";
const INFURA_KEY = "de1a46cef76e435b8bc38b630c999e6e";
const rpcEndpoint = "https://sepolia.infura.io/v3/" + INFURA_KEY; // Replace with the actual RPC endpoint for Sepolia testnet
const provider = new ethers.providers.JsonRpcProvider(rpcEndpoint);
const wallet = new ethers.Wallet(privateKey, provider);
// Convert ABI to array
const abiArray = contractAbi.abi;

const contractAddress = "0xd521077f2a8f41cd49bb0cab91f018540f0592c0";
const certificateContract = new ethers.Contract(
  contractAddress,
  abiArray,
  provider
);

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
      return; // Exit the function to prevent issuing a new certificate
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
  } catch (error) {
    console.error("Failed to issue certificate:", error);
  }
}

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

const ethersScript = {
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

export default ethersScript;
