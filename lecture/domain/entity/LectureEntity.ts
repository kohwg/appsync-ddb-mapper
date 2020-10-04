import {
    attribute,
    hashKey,
    rangeKey,
    table
} from '@aws/dynamodb-data-mapper-annotations';
import LectureCurriculum from './LectureCurriculum';


// cloudformation template에서 생성되는 TABLE값을 ENV로 받아와 사용 
const tableName: string = String(process.env.SAMPLE_TABLE);

if (!process.env.SAMPLE_TABLE) {
    this.tableName = 'class-dev-LectureTable-MXV4LYH979IN';;
}




@table(tableName)
class LectureEntity {

    @hashKey()
    private partitionkey: string

    @rangeKey()
    private sortkey: string

    @attribute()
    private attribute1: string;

    @attribute()
    private attribute2: string;

    @attribute()
    private lectureId: string;             /** 클래스 아이디 */
    @attribute()
    private lectureNm: string;             /** 클래스 이름 */
    @attribute()
    private lectureStatusCd: string;       /*  클래스 상태코드 - Y : 접수중 N : 접수 불가 (임시..)*/
    @attribute()
    private lectureStatusNm: string;       /*  클래스 상태명 */
    @attribute()
    private lectureLargeCtgCd: string;     /*  클래스 대카테고리 코드 00001 성인 00002 자녀 00003 기획*/
    @attribute()
    private lectureLargeCtgNm: string;     /*  클래스 대카테고리 명 */
    @attribute()
    private lectureSmallCtgCd: string;     /*  클래스 소카테고리 코드 000010 노래/댄스 000011 건강/운동 000012 공예/취미 000013 쿠킹스튜디오 000014 미술/서예/기악 000015 교양/어학 000020 엄마랑 아기랑(0~4세)인지/표현 000030 임산부 아카데미 */
    @attribute()
    private lectureSmallCtgNm: string;     /*  클래스 소카테고리 명 */
    @attribute()
    private lectureStartYyyyMMdd: string;  /*  클래스 시작 일자 YYYYMMDD */
    @attribute()
    private lectureEndYyyyMMdd: string;    /*  클래스 종료 일자 YYYYMMDD */
    @attribute()
    private lectureStartHhMM: string;      /*  클래스 시작 시간 HHMM */
    @attribute()
    private lectureEndHhMM: string;        /*  클래스 종료 시간 HHMM */
    @attribute()
    private lectureDay: string;            /*  클래스 요일 */
    @attribute()
    private lectureCenterCd: string;       /*  클래스 지점 코드 */
    @attribute()
    private lectureCenterNm: string;       /*  클래스 지점 명 */
    @attribute()
    private lectureBfSalePrice: string;    /*  클래스 할인전 금액 */
    @attribute()
    private lectureAfSalePrice: string;    /*  클래스 할인후 금액 */
    @attribute()
    private lectureCtn: number;            /* 클래스 횟수 */
    @attribute()
    private lectureCurriculum: Array<any>; /* 클래스 횟수 */
    @attribute()
    private lectureOriginYn?: boolean;            /* club original 여부 */
    @attribute()
    private cartYn?: string;               /* 장바구니 담기 가능 여부 Y : 가능 / N : 불가능 / D : 이미 담음*/
    @attribute()
    private lectureImage: string;         /* 클래스 대표 이미지 */
    @attribute()
    private tutorId: string;              /* 클래스 강사id */

    /**
     * 
     */
    public domainlogic(): string {
        this.attribute1 = "1";
        return this.attribute1;
    }

    get toJson(): string {
        return JSON.stringify(this);
    }

    /**
     * 
     * https://github.com/awslabs/dynamodb-data-mapper-js/issues/136
     * @param partitionkey 
     * @param sortkey 
     * @param attribute1 
     * @param attribute2
     */
    public static createObject(request: LectureEntity): LectureEntity {
        console.log("### object is : ", request);

        //TODO Validation Implementation
        //Example) 강좌제목에 비속어가 들어있다던지? 특정항목이 null이라던지?
        //만약 validation 과정이 길어지면 Domain layer에 Validator로 별도로 분리하는것을 고려할 것 
        return Object.assign(new LectureEntity,
            {
                partitionkey: request.partitionkey,
                sortkey: request.sortkey,
                attribute1: request.attribute1,
                attribute2: request.attribute2,
                lectureId: request.lectureId,
                lectureNm: request.lectureNm,
                lectureStatusCd: request.lectureStatusCd,
                lectureStatusNm: request.lectureStatusNm,
                lectureLargeCtgCd: request.lectureLargeCtgCd,
                lectureLargeCtgNm: request.lectureLargeCtgNm,
                lectureSmallCtgCd: request.lectureSmallCtgCd,
                lectureSmallCtgNm: request.lectureSmallCtgNm,
                lectureStartYyyyMMdd: request.lectureStartYyyyMMdd,
                lectureEndYyyyMMdd: request.lectureEndYyyyMMdd,
                lectureStartHhMM: request.lectureStartHhMM,
                lectureEndHhMM: request.lectureEndHhMM,
                lectureDay: request.lectureDay,
                lectureCenterCd: request.lectureCenterCd,
                lectureCenterNm: request.lectureCenterNm,
                lectureBfSalePrice: request.lectureBfSalePrice,
                lectureAfSalePrice: request.lectureAfSalePrice,
                lectureCtn: request.lectureCtn,
                lectureCurriculum: request.lectureCurriculum,
                lectureOriginYn: request.lectureOriginYn,
                cartYn: request.cartYn,
                lectureImage: request.lectureImage,
                tutorId: request.tutorId
            }
        );
    }

}

export default LectureEntity;