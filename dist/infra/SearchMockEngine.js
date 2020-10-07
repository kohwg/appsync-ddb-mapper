"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Lecture_1 = __importDefault(require("../domain/entity/Lecture"));
var LectureCurriculum_1 = __importDefault(require("../domain/entity/LectureCurriculum"));
var SearchMockEngine = /** @class */ (function () {
    function SearchMockEngine() {
    }
    SearchMockEngine.prototype.getAllLecture = function () {
        var lectureList = [
            new Lecture_1.default("136418", "[주2회]파워 줌마 댄스[성인]월/수10:00 *자녀동반불가", "20200902", "20201125", "1000", "1050", "월", "Y", "접수중", "00001", "성인", "000010", "노래/댄스", "00001", "포항이동점", "100000", "90000", 16, [new LectureCurriculum_1.default("1일차 제목 - 이런걸 할거야", "1일차 내용 - 이런거이런거이런거!"), new LectureCurriculum_1.default("2일차", "2일차 내용")], true, "Y", "http://cultureimg.emart.com/file_01/upload/lect_img/thum/thum_00001201012011201010002.gif", "1"),
            new Lecture_1.default("137882", "털쌤의 노래교실A[성인]목13:30 *자녀동반불가", "20200903", "20201126", "1330", "1430", "월", "Y", "접수중", "00001", "성인", "000010", "노래/댄스", "00001", "포항이동점", "150000", "100000", 16, [new LectureCurriculum_1.default("1일차 오세요~", "1일차 내용 재밌겠지~~~"), new LectureCurriculum_1.default("2일차", "2일차 내용")], false, "N", "http://cultureimg.emart.com/file_01/upload/lect_img/201802121600331022.gif", "2"),
            new Lecture_1.default("138038", "한국 무용[성인]목12:30 *자녀동반불가", "20200903", "20201126", "1230", "1320", "수", "Y", "접수중", "00001", "성인", "000011", "건강/운동", "00001", "포항이동점", "15000", "5000", 16, [new LectureCurriculum_1.default("체력을 쑥쑥 훌라우프", "친구들과 어울리기 위해선 체력이 필수!"), new LectureCurriculum_1.default("2일차", "2일차 내용")], false, "Y", "http://cultureimg.emart.com/file_01/upload/lect_img/201802121600331022.gif", "3"),
            new Lecture_1.default("138637", "쉽고 재미있는 라인댄스[성인]월11:00 *자녀동반불가", "20200907", "20201123", "1100", "1150", "수", "Y", "접수중", "00001", "성인", "000010", "노래/댄스", "00001", "포항이동점", "10000", "9000", 5, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], false, "Y", "http://cultureimg.emart.com/file_01/upload/lect_img/201802121600331022.gif", "4"),
            new Lecture_1.default("139341", "털쌤의 노래교실B[성인]목14:40 *자녀동반불가", "20200903", "20201126", "1440", "1540", "화", "Y", "접수중", "00001", "성인", "000013", "쿠킹스튜디오", "00001", "포항이동점", "200000", "180000", 20, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], false, "Y", "http://cultureimg.emart.com/file_01/upload/lect_img/201802121600331022.gif", "2"),
            new Lecture_1.default("190176", "민하영의 스트레스 타파! 주부가요교실(수강료 50% 인하)-화", "20200901", "20201117", "1000", "1100", "수", "Y", "접수중", "00003", "기획", "000030", "임산부아카데미", "00002", "제주점", "5000", "1000", 10, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], false, "Y", "http://cultureimg.emart.com/file_01/upload/lect_img/5500120110217191952164.jpg", "5"),
            new Lecture_1.default("139234", "[신설][할인]다이어트 방송댄스 (성인)목09:00", "20200903", "20201126", "900", "950", "화", "Y", "접수중", "00001", "성인", "000014", "미술/서예/기악", "00002", "제주점", "15000", "1500", 16, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], false, "Y", "http://cultureimg.emart.com/file_01/upload/lect_img/00001201012011201010001.gif", "4"),
            new Lecture_1.default("139235", "[할인]줌바 피트니스 댄스 화14:00", "20200901", "20201117", "1400", "1450", "월", "Y", "접수중", "00002", "자녀", "000020", "엄마랑 아기랑(0~4세)인지/표현", "00002", "제주점", "30000", "15000", 16, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], false, "Y", "http://cultureimg.emart.com/file_01/upload/lect_img/93101201301151123345278.JPG", "1"),
            new Lecture_1.default("139236", "[할인]줌바 피트니스 댄스 목14:00", "20200903", "20201126", "1400", "1450", "수", "Y", "접수중", "00001", "성인", "000014", "미술/서예/기악", "00003", "분당점", "3000", "1500", 16, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], false, "Y", "http://cultureimg.emart.com/file_01/upload/lect_img/93101201301151123345278.JPG", "1"),
            new Lecture_1.default("139239", "[할인]왕초보 댄스스포츠(라틴/탱고) 화12:05", "20200901", "20201117", "1205", "1255", "수", "Y", "접수중", "00003", "기획", "000030", "임산부아카데미", "00002", "제주점", "40000", "30000", 5, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], false, "Y", "http://cultureimg.emart.com/file_01/upload/lect_img/93101201301151123345278.JPG", "7"),
            new Lecture_1.default("139240", "[할인]라틴 유행&노래방 댄스 (화)13:00", "20200901", "20201117", "1300", "1350", "일", "Y", "접수중", "00001", "성인", "000014", "미술/서예/기악", "00003", "분당점", "100000", "90000", 22, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], true, "Y", "http://cultureimg.emart.com/file_01/upload/lect_img/93101201301151123345278.JPG", "7"),
            new Lecture_1.default("139245", "[할인]저녁 줌바 피트니스 댄스 (목)20:00", "20200903", "20201126", "2000", "2050", "금", "Y", "접수중", "00002", "자녀", "000020", "엄마랑 아기랑(0~4세)인지/표현", "00002", "제주점", "2000", "1000", 16, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], true, "Y", "http://cultureimg.emart.com/file_01/upload/lect_img/201802121600331022.gif", "6"),
            new Lecture_1.default("139246", "[할인]저녁 줌바 피트니스 댄스 (월)20:00", "20200907", "20201123", "2000", "2050", "토", "Y", "접수중", "00003", "기획", "000030", "임산부아카데미", "00003", "분당점", "100000", "80000", 16, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], false, "N", "http://cultureimg.emart.com/file_01/upload/lect_img/201802121600331022.gif", "6"),
            new Lecture_1.default("139329", "[할인]줌바 피트니스 댄스(화)14:00", "20200901", "20201117", "1400", "1450", "화", "Y", "접수중", "00001", "성인", "000014", "미술/서예/기악", "00002", "제주점", "50000", "12000", 16, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], true, "D", "http://cultureimg.emart.com/file_01/upload/lect_img/93101201301151123345278.JPG", "1"),
            new Lecture_1.default("139332", "[할인]줌바 피트니스 댄스(목)14:00", "20200903", "20201126", "1400", "1450", "화", "Y", "접수중", "00001", "성인", "000011", "건강/운동", "00004", "성수점", "50000", "30000", 16, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], false, "Y", "http://cultureimg.emart.com/file_01/upload/lect_img/55001201102171358238197.jpg", "7"),
            new Lecture_1.default("139233", "성인 밸리댄스 (월)18:00", "20200907", "20201123", "1800", "1850", "화", "Y", "접수중", "00002", "자녀", "000020", "엄마랑 아기랑(0~4세)인지/표현", "00004", "성수점", "10000", "9000", 16, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], true, "Y", "http://cultureimg.emart.com/file_01/upload/lect_img/55001201102171358238197.jpg", "7"),
            new Lecture_1.default("139237", "[11회][50%]다이어트 줄넘기&스텝박스 월)09:05", "20200907", "20201123", "905", "955", "목", "Y", "접수중", "00002", "자녀", "000020", "엄마랑 아기랑(0~4세)인지/표현", "00002", "제주점", "100000", "90000", 10, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], true, "D", "http://cultureimg.emart.com/file_01/upload/lect_img/93101201301151122534822.JPG", "4"),
            new Lecture_1.default("139238", "[11회][50%]다이어트 라인댄스(초급)월10:05 ※68세 이하", "20200907", "20201123", "1005", "1055", "토", "Y", "접수중", "00001", "성인", "000011", "건강/운동", "00003", "분당점", "50000", "45000", 22, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], true, "D", "http://cultureimg.emart.com/file_01/upload/lect_img/93101201301151122534822.JPG", "4"),
            new Lecture_1.default("139241", "[할인]왕초보 댄스스포츠(룸바) 화12:05", "20200901", "20201117", "1205", "1255", "토", "N", "접수불가", "00002", "자녀", "000020", "엄마랑 아기랑(0~4세)인지/표현", "00002", "제주점", "70000", "70000", 16, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], false, "Y", "http://cultureimg.emart.com/file_01/upload/lect_img/93101201301151122534822.JPG", "4"),
            new Lecture_1.default("139242", "[할인]라틴 유행&노래방 댄스 (화)13:00", "20200901", "20201117", "1300", "1350", "일", "Y", "접수중", "00001", "성인", "000015", "교양/어학", "00001", "포항이동점", "70000", "35000", 12, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], false, "Y", "http://cultureimg.emart.com/file_01/upload/lect_img/93101201301151122534822.JPG", "4"),
            new Lecture_1.default("139243", "[11회][할인]리본 발레 라인핏 코어댄스(금)13:00", "20200904", "20201127", "1300", "1400", "금", "N", "접수불가", "00001", "성인", "000014", "미술/서예/기악", "00001", "포항이동점", "10000", "5000", 16, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], false, "Y", "http://cultureimg.emart.com/file_01/upload/lect_img/96001201602131906293032.jpg", "8"),
            new Lecture_1.default("139244", "[할인]함진영의 노래교실 (수)14:00", "20200902", "20201125", "1400", "1520", "수", "Y", "접수중", "00001", "성인", "000014", "미술/서예/기악", "00001", "포항이동점", "50000", "40000", 18, [new LectureCurriculum_1.default("1일차", "1일차 내용"), new LectureCurriculum_1.default("2일차", "2일차 내용")], true, "Y", "http://cultureimg.emart.com/file_01/upload/lect_img/98301201301211040118380.jpg", "8")
        ];
        return lectureList;
    };
    SearchMockEngine.prototype.searchKeyword = function (keyword, startCtn, perPage) {
        var lectureList = this.getAllLecture();
        var returnList;
        if (keyword === null) {
            returnList = lectureList;
        }
        else {
            returnList = new Array();
            lectureList.forEach(function (lecture, idx) {
                if (lecture.lectureNm.indexOf(keyword) > -1) {
                    returnList.push(lecture);
                }
            });
        }
        if (returnList != null && returnList.length > 0 && startCtn != null && perPage != null) {
            return this.paging(returnList, startCtn, perPage);
        }
        else {
            return returnList;
        }
    };
    SearchMockEngine.prototype.keywordSearchByLectureCenterNm = function (keyword, startCtn, perPage) {
        var lectureList = this.getAllLecture();
        var returnList;
        if (keyword === null) {
            returnList = lectureList;
        }
        else {
            returnList = new Array();
            lectureList.forEach(function (lecture, idx) {
                if (lecture.lectureCenterNm.indexOf(keyword) > -1) {
                    returnList.push(lecture);
                }
            });
        }
        if (returnList != null && returnList.length > 0 && startCtn != null && perPage != null) {
            return this.paging(returnList, startCtn, perPage);
        }
        else {
            return returnList;
        }
    };
    SearchMockEngine.prototype.keywordSearchByLectureCurriculum = function (keyword) {
        var lectureList = this.getAllLecture();
        var returnList;
        if (keyword === null) {
            returnList = lectureList;
        }
        else {
            returnList = new Array();
            lectureList.forEach(function (lecture, idx) {
                //일단은 커리큘럼 array를 json으로 바꿔서 문자열 있는지 여부로 검색...
                if (JSON.stringify(lecture.lectureCurriculum).indexOf(keyword) > -1) {
                    returnList.push(lecture);
                }
            });
        }
        return returnList;
    };
    //페이징..
    SearchMockEngine.prototype.paging = function (lectureList, startCtn, perPage) {
        return lectureList.slice((startCtn - 1) * perPage, (startCtn * perPage < lectureList.length ? startCtn * perPage : lectureList.length));
    };
    return SearchMockEngine;
}());
exports.default = SearchMockEngine;
