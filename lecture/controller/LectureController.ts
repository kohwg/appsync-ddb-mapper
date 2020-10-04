import LectureService from '../application/LectureService';
import { AwsEvent } from './interfaces/AwsEvent.interface';
import Lecture from '../domain/entity/Lecture';
import Paging from '../domain/entity/Paging';
import Response from '../controller/interfaces/Response'
import LectureEntity from '../domain/entity/LectureEntity';
import { AppSyncEvent } from './interfaces/AppSyncEvent';
import ResponseAppsync from './interfaces/ResponseAppsync';

class LectureController {

    private lectureService: LectureService

    constructor() {
        this.lectureService = new LectureService();
    }

    // 키워드를 통해 클래스 검색 
    //http://127.0.0.1:3000/lectures?keyword=%20&startCtn=2&perPage=2
    public keywordSearch(event:AwsEvent): Response {
        
        //검색 keyword
        let keyword:string = JSON.parse(JSON.stringify(event.queryStringParameters)).keyword;

        //페이징 parameter
        let paramPaging:Paging = <Paging>JSON.parse(JSON.stringify(event.queryStringParameters));
        let paging:Paging = new Paging(paramPaging.startCtn, paramPaging.perPage);                 // domain 생성자에서 default값 setting
        let startCtn:number = paging.startCtn
        let perPage:number = paging.perPage;

        let result = this.lectureService.keywordSearch(keyword, startCtn, perPage);
        
        return {
            'statusCode': 200,
            'headers':{'Access-Control-Allow-Origin':'*'},
            'body': JSON.stringify({
                message: result
            })
        }
    }
    
    // 지점명을 검색하여 클래스를 검색 
    //http://127.0.0.1:3000/lectureCenterNm?keyword=%20&startCtn=2&perPage=2
    public keywordSearchByLectureCenterNm(event:AwsEvent): Response {
        
        //검색 keyword
        let keyword:string = JSON.parse(JSON.stringify(event.queryStringParameters)).keyword;

        //페이징 parameter
        let paramPaging:Paging = <Paging>JSON.parse(JSON.stringify(event.queryStringParameters));
        let paging:Paging = new Paging(paramPaging.startCtn, paramPaging.perPage);
        let startCtn:number = paging.startCtn
        let perPage:number = paging.perPage;
        
        let result = this.lectureService.keywordSearchByLectureCenterNm(keyword, startCtn, perPage);
        
        return {
            'statusCode': 200,
            'headers':{'Access-Control-Allow-Origin':'*'},
            'body': JSON.stringify({
                message: result
            })
        }
    }


    // 
    //http://127.0.0.1:3000/lectureCurriculum?keyword=%20
    public keywordSearchByLectureCurriculum(event:AwsEvent): Response {
        
        let keyword:string = JSON.parse(JSON.stringify(event.queryStringParameters)).keyword;
        
        let result = this.lectureService.keywordSearchByLectureCurriculum(keyword);

        return {
            'statusCode': 200,
            'headers':{'Access-Control-Allow-Origin':'*'},
            'body': JSON.stringify({
                message: result
            })
        }
    }

    // 새로운 강좌정보를 등록 
    public async createLecture(event: AppSyncEvent): Promise<ResponseAppsync> {

        console.log("event : ", event);

        // 강의정보를 가지고 lectureInformation
        let lectureInfo: LectureEntity = event.arguments.input;
        try {
            let result: LectureEntity = await this.lectureService.createLecture(lectureInfo);
            return {
                'data': result,
                'message': "success"
            }
        } catch (err) {
            throw err;
        }
    }

    /**
     * LectureId로 클래스 상세 정보를 가져온다.
     * http://127.0.0.1:3000/detailLecture?lectureId=136418
     * @param lectureId
     */
    public getLectureDetailByLectureId(lectureId: string): Response {
        let result = this.lectureService.getLectureDetailByLectureId(lectureId);
        return {
            'statusCode': 200,
            'headers':{'Access-Control-Allow-Origin':'*'},
            'body': JSON.stringify({
                message: result
            })
        }
    }

    /**
     * LectureId로 클래스의 리뷰 정보를 가져온다.
     * http://127.0.0.1:3000/review?lectureId=136418
     * @param lectureId
     */
    public getReviewByLectureId(lectureId: string): Response {
        let result = this.lectureService.getReviewByLectureId(lectureId);
        return {
            'statusCode': 200,
            'headers':{'Access-Control-Allow-Origin':'*'},
            'body': JSON.stringify({
                message: result
            })
        }
    }

    /**
     * tutorId로 강사의 모든 리뷰 정보를 가져온다.
     * http://127.0.0.1:3000/tutorsReview?tutorId=1
     * @param tutorId
     */
    public getReviewByTutorId(tutorId: string): Response {
        let result = this.lectureService.getReviewByTutorId(tutorId);
        return {
            'statusCode': 200,
            'headers':{'Access-Control-Allow-Origin':'*'},
            'body': JSON.stringify({
                message: result
            })
        }
    }
}


export default LectureController;