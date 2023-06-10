// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateContract {
    
    struct Subject {
        string name;
        uint8 credits;
        uint8 grade;
        uint16 examMonth;
        uint16 examYear;
    }

    struct Semester {
        mapping(string => Subject) subjects;
    }

    struct Certificate {
        string studentName;
        string registerNumber;
        string institution;
        string modeOfStudy;
        uint16 yearOfAdmission;
        uint8 programDuration;
        uint16 monthAndYearOfPassing;
        string mediumOfInstruction;
        uint16 totalCredits;
        uint8 cgpa;
        mapping(uint8 => Semester) semesters;
    }

    mapping(string => Certificate) certificates;

    function issueCertificate(
        string memory registerNumber,
        string memory studentName,
        string memory institution,
        string memory modeOfStudy,
        uint16 yearOfAdmission,
        uint8 programDuration,
        uint16 monthAndYearOfPassing,
        string memory mediumOfInstruction,
        uint16 totalCredits,
        uint8 cgpa,
        string[] memory subjectNamesSem1,
        string[] memory subjectNamesSem2,
        string[] memory subjectNamesSem3,
        string[] memory subjectNamesSem4,
        string[] memory subjectNamesSem5,
        string[] memory subjectNamesSem6,
        string[] memory subjectNamesSem7,
        string[] memory subjectNamesSem8,
        uint8[] memory subjectCreditsSem1,
        uint8[] memory subjectCreditsSem2,
        uint8[] memory subjectCreditsSem3,
        uint8[] memory subjectCreditsSem4,
        uint8[] memory subjectCreditsSem5,
        uint8[] memory subjectCreditsSem6,
        uint8[] memory subjectCreditsSem7,
        uint8[] memory subjectCreditsSem8,
        uint8[] memory subjectGradesSem1,
        uint8[] memory subjectGradesSem2,
        uint8[] memory subjectGradesSem3,
        uint8[] memory subjectGradesSem4,
        uint8[] memory subjectGradesSem5,
        uint8[] memory subjectGradesSem6,
        uint8[] memory subjectGradesSem7,
        uint8[] memory subjectGradesSem8,
        uint16[] memory subjectExamMonths,
        uint16[] memory subjectExamYears
    ) external {
         require(
        msg.sender == address(this),
        "Only the contract itself can issue certificates."
    );
        Certificate storage certificate = certificates[registerNumber];

        certificate.registerNumber = registerNumber;
        certificate.studentName = studentName;
        certificate.institution = institution;
        certificate.modeOfStudy = modeOfStudy;
        certificate.yearOfAdmission = yearOfAdmission;
        certificate.programDuration = programDuration;
        certificate.monthAndYearOfPassing = monthAndYearOfPassing;
        certificate.mediumOfInstruction = mediumOfInstruction;
        certificate.totalCredits = totalCredits;
        certificate.cgpa = cgpa;

        // for(uint8 j=0;j<semesterIndex.length;j++){
        //     Semester storage semester = certificate.semesters[j];
            //  for (uint256 i = 0; i < subjectNames.length; i++) {
            //     semester.subjects[subjectNames[i]] = Subject(
            //         subjectNames[i],
            //         subjectCredits[i],
            //         subjectGrades[i],
            //         subjectExamMonths[i],
            //         subjectExamYears[i]
            //     );
        // }
        // }
        Semester storage semester1 = certificate.semesters[0];
              for (uint256 i = 0; i < subjectNamesSem1.length; i++) {
                semester1.subjects[subjectNamesSem1[i]] = Subject(
                    subjectNamesSem1[i],
                    subjectCreditsSem1[i],
                    subjectGradesSem1[i],
                    subjectExamMonths[0],
                    subjectExamYears[0]
                );
              }

          Semester storage semester2 = certificate.semesters[1];
              for (uint256 i = 0; i < subjectNamesSem2.length; i++) {
                semester2.subjects[subjectNamesSem2[i]] = Subject(
                    subjectNamesSem2[i],
                    subjectCreditsSem2[i],
                    subjectGradesSem2[i],
                    subjectExamMonths[1],
                    subjectExamYears[1]
                );
              }

          Semester storage semester3 = certificate.semesters[2];
              for (uint256 i = 0; i < subjectNamesSem3.length; i++) {
                semester3.subjects[subjectNamesSem3[i]] = Subject(
                    subjectNamesSem3[i],
                    subjectCreditsSem3[i],
                    subjectGradesSem3[i],
                    subjectExamMonths[2],
                    subjectExamYears[2]
                );
              }

          Semester storage semester4 = certificate.semesters[3];
              for (uint256 i = 0; i < subjectNamesSem4.length; i++) {
                semester4.subjects[subjectNamesSem4[i]] = Subject(
                    subjectNamesSem4[i],
                    subjectCreditsSem4[i],
                    subjectGradesSem4[i],
                    subjectExamMonths[3],
                    subjectExamYears[3]
                );
              }

             Semester storage semester5 = certificate.semesters[4];
              for (uint256 i = 0; i < subjectNamesSem5.length; i++) {
                semester5.subjects[subjectNamesSem5[i]] = Subject(
                    subjectNamesSem5[i],
                    subjectCreditsSem5[i],
                    subjectGradesSem5[i],
                    subjectExamMonths[4],
                    subjectExamYears[4]
                );
              }

            Semester storage semester6 = certificate.semesters[5];
              for (uint256 i = 0; i < subjectNamesSem6.length; i++) {
                semester6.subjects[subjectNamesSem6[i]] = Subject(
                    subjectNamesSem6[i],
                    subjectCreditsSem6[i],
                    subjectGradesSem6[i],
                    subjectExamMonths[5],
                    subjectExamYears[5]
                );
              }

          Semester storage semester7 = certificate.semesters[6];
              for (uint256 i = 0; i < subjectNamesSem7.length; i++) {
                semester7.subjects[subjectNamesSem7[i]] = Subject(
                    subjectNamesSem7[i],
                    subjectCreditsSem7[i],
                    subjectGradesSem7[i],
                    subjectExamMonths[6],
                    subjectExamYears[6]
                );
              }

          Semester storage semester8 = certificate.semesters[7];
              for (uint256 i = 0; i < subjectNamesSem8.length; i++) {
                semester8.subjects[subjectNamesSem8[i]] = Subject(
                    subjectNamesSem8[i],
                    subjectCreditsSem8[i],
                    subjectGradesSem8[i],
                    subjectExamMonths[7],
                    subjectExamYears[7]
                );
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

    function getCertificateModeOfStudy(string memory registerNumber) external view returns (string memory) {
        return certificates[registerNumber].modeOfStudy;
    }

    function getCertificateYearOfAdmission(string memory registerNumber) external view returns (uint16) {
        return certificates[registerNumber].yearOfAdmission;
    }

    function getCertificateProgramDuration(string memory registerNumber) external view returns (uint8) {
        return certificates[registerNumber].programDuration;
    }

    function getCertificateMonthAndYearOfPassing(string memory registerNumber) external view returns (uint16) {
        return certificates[registerNumber].monthAndYearOfPassing;
    }

    function getCertificateMediumOfInstruction(string memory registerNumber) external view returns (string memory) {
        return certificates[registerNumber].mediumOfInstruction;
    }

    function getCertificateTotalCredits(string memory registerNumber) external view returns (uint16) {
        return certificates[registerNumber].totalCredits;
    }

    function getCertificateCGPA(string memory registerNumber) external view returns (uint8) {
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
    ) external view returns (uint8) {
        return certificates[registerNumber].semesters[semesterIndex].subjects[subjectName].grade;
    }

    function getSubjectExamMonth(
        string memory registerNumber,
        uint8 semesterIndex,
        string memory subjectName
    ) external view returns (uint16) {
        return certificates[registerNumber].semesters[semesterIndex].subjects[subjectName].examMonth;
    }

    function getSubjectExamYear(
        string memory registerNumber,
        uint8 semesterIndex,
        string memory subjectName
    ) external view returns (uint16) {
        return certificates[registerNumber].semesters[semesterIndex].subjects[subjectName].examYear;
    }
}
