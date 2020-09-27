import LectureCurriculum from '../domain/LectureCurriculum';

class Lecture {

    lectureId:string;             /** 클래스 아이디 */
    lectureNm:string;             /** 클래스 이름 */
    lectureStatusCd:string;       /*  클래스 상태코드 - Y : 접수중 N : 접수 불가 (임시..)*/
    lectureStatusNm:string;       /*  클래스 상태명 */
    lectureLargeCtgCd:string;     /*  클래스 대카테고리 코드 00001 성인 00002 자녀 00003 기획*/
    lectureLargeCtgNm:string;     /*  클래스 대카테고리 명 */
    lectureSmallCtgCd:string;     /*  클래스 소카테고리 코드 000010 노래/댄스 000011 건강/운동 000012 공예/취미 000013 쿠킹스튜디오 000014 미술/서예/기악 000015 교양/어학 000020 엄마랑 아기랑(0~4세)인지/표현 000030 임산부 아카데미 */
    lectureSmallCtgNm:string;     /*  클래스 소카테고리 명 */
    lectureStartYyyyMMdd:string;  /*  클래스 시작 일자 YYYYMMDD */
    lectureEndYyyyMMdd:string;    /*  클래스 종료 일자 YYYYMMDD */
    lectureStartHhMM:string;      /*  클래스 시작 시간 HHMM */
    lectureEndHhMM:string;        /*  클래스 종료 시간 HHMM */
    lectureDay:string;            /*  클래스 요일 */
    lectureCenterCd:string;       /*  클래스 지점 코드 */
    lectureCenterNm:string;       /*  클래스 지점 명 */
    lectureBfSalePrice:string;    /*  클래스 할인전 금액 */
    lectureAfSalePrice:string;    /*  클래스 할인후 금액 */
    lectureCtn:number;            /* 클래스 횟수 */
    lectureCurriculum:Array<LectureCurriculum>; /* 클래스 횟수 */
    lectureOriginYn?: boolean;            /* club original 여부 */
    cartYn?: string;               /* 장바구니 담기 가능 여부 Y : 가능 / N : 불가능 / D : 이미 담음*/



    constructor(lectureId:string, lectureNm:string, lectureStartYyyyMMdd:string, lectureEndYyyyMMdd:string, lectureStartHhMM:string, lectureEndHhMM:string, lectureDay:string,
                 lectureStatusCd:string, lectureStatusNm:string, lectureLargeCtgCd:string, lectureLargeCtgNm:string, lectureSmallCtgCd:string, lectureSmallCtgNm:string,
                 lectureCenterCd:string, lectureCenterNm:string, lectureBfSalePrice:string, lectureAfSalePrice:string, lectureCtn:number, lectureCurriculum:Array<LectureCurriculum>,
                 lectureOriginYn:boolean, cartYn:string ) {
    
        this.lectureId = lectureId;
        this.lectureNm = lectureNm;
        this.lectureStartYyyyMMdd = lectureStatusCd;
        this.lectureEndYyyyMMdd = lectureEndYyyyMMdd;
        this.lectureStartHhMM = lectureStartHhMM;
        this.lectureEndHhMM = lectureEndHhMM;
        this.lectureDay = lectureDay;
        this.lectureStatusCd = lectureStatusCd;
        this.lectureStatusNm = lectureStatusNm;
        this.lectureLargeCtgCd = lectureLargeCtgCd;
        this.lectureLargeCtgNm = lectureLargeCtgNm;
        this.lectureSmallCtgCd = lectureSmallCtgCd;
        this.lectureSmallCtgNm = lectureSmallCtgNm;
        this.lectureCenterCd = lectureCenterCd;
        this.lectureCenterNm = lectureCenterNm;
        this.lectureBfSalePrice = lectureBfSalePrice;
        this.lectureAfSalePrice = lectureAfSalePrice;
        this.lectureCtn = lectureCtn;
        this.lectureCurriculum = lectureCurriculum;
        this.lectureOriginYn = lectureOriginYn;
        this.cartYn = cartYn;
    }

    get getLecture(): string {
        return this.lectureId + ":" + this.lectureNm ;
    }
}

export default Lecture;