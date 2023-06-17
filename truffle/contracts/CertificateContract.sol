// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateContract {
    struct Subject {
        string name;
        uint8 credits;
        string grade;
        string examMonth;
        uint16 examYear;
    }

    struct Semester {
        mapping(string => Subject) subjects;
        string[] subjectNames; // New array to store subject names
    }

    struct Certificate {
        string studentName;
        string registerNumber;
        string institution;
        uint16 yearOfAdmission;
        string monthAndYearOfPassing;
        string cgpa;
        mapping(uint8 => Semester) semesters;
    }

    mapping(string => Certificate) certificates;
        function checkCertificateExists(string memory registerNumber) external view returns (bool) {
        return bytes(certificates[registerNumber].registerNumber).length > 0;
    }


    function issueCertificate(
        string memory registerNumber,
        string memory studentName,
        string memory institution,
        uint16 yearOfAdmission,
        string memory monthAndYearOfPassing,
        string memory cgpa,
        string[][] memory subjectNames,
        uint8[][] memory subjectCredits,
        string[][] memory subjectGrades,
        string[][] memory subjectExamMonths,
        uint16[][] memory subjectExamYears
    ) external {
        Certificate storage certificate = certificates[registerNumber];
        Certificate storage cert = certificate; // Temporary variable to reduce stack depth

        cert.registerNumber = registerNumber;
        cert.studentName = studentName;
        cert.institution = institution;
        cert.yearOfAdmission = yearOfAdmission;
        cert.monthAndYearOfPassing = monthAndYearOfPassing;
        cert.cgpa = cgpa;

        for (uint8 i = 0; i < subjectNames.length; i++) {
            Semester storage semester = cert.semesters[i];
            for (uint256 j = 0; j < subjectNames[i].length; j++) {
                string memory subjectName = subjectNames[i][j];
                semester.subjects[subjectName] = Subject(
                    subjectName,
                    subjectCredits[i][j],
                    subjectGrades[i][j],
                    subjectExamMonths[i][j],
                    subjectExamYears[i][j]
                );
                semester.subjectNames.push(subjectName); // Store subject names in the array
            }
        }
    }

    function getCertificateStudentName(string memory registerNumber) external view returns (string memory) {
        return certificates[registerNumber].studentName;
    }

    function getCertificateRegisterNumber(string memory registerNumber) external view returns (string memory) {
        return certificates[registerNumber].registerNumber;
    }

    function getCertificateInstitution(string memory registerNumber) external view returns (string memory) {
        return certificates[registerNumber].institution;
    }

    function getCertificateYearOfAdmission(string memory registerNumber) external view returns (uint16) {
        return certificates[registerNumber].yearOfAdmission;
    }

    function getCertificateMonthAndYearOfPassing(string memory registerNumber) external view returns (string memory) {
        return certificates[registerNumber].monthAndYearOfPassing;
    }

    function getCertificateCGPA(string memory registerNumber) external view returns (string memory) {
        return certificates[registerNumber].cgpa;
    }

    function getSubjectCredits(
        string memory registerNumber,
        uint8 semesterIndex,
        string memory subjectName
    ) external view returns (uint8) {
        return certificates[registerNumber].semesters[semesterIndex].subjects[subjectName].credits;
    }

    function getSubjectGrade(
        string memory registerNumber,
        uint8 semesterIndex,
        string memory subjectName
    ) external view returns (string memory) {
        return certificates[registerNumber].semesters[semesterIndex].subjects[subjectName].grade;
    }

    function getSubjectExamMonth(
        string memory registerNumber,
        uint8 semesterIndex,
        string memory subjectName
    ) external view returns (string memory) {
        return certificates[registerNumber].semesters[semesterIndex].subjects[subjectName].examMonth;
    }

    function getSubjectExamYear(
        string memory registerNumber,
        uint8 semesterIndex,
        string memory subjectName
    ) external view returns (uint16) {
        return certificates[registerNumber].semesters[semesterIndex].subjects[subjectName].examYear;
    }

    function getSubjectNames(string memory registerNumber, uint8 semesterIndex)
        external
        view
        returns (string[] memory)
    {
        return certificates[registerNumber].semesters[semesterIndex].subjectNames;
    }
}
