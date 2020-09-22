import Response from './interfaces/Response';
import { AwsEvent } from './interfaces/AwsEvent.interface';
import LectureService from '../application/LectureService';

class LectureController {
    
    lectureService: LectureService;

    constructor() {
        this.lectureService = new LectureService();
    }

    // 신규 강좌 등록 
    public createLecture(event:AwsEvent): Response {
        let path = event.path;
        let result:string=this.lectureService.createLecture(path);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        }
    }

    // 강좌 목록 조회 
    public listLecture(event:AwsEvent): Response {
        let path = event.path;
        let result:string=this.lectureService.listLecture(path);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        }
    }

    // 강좌 상세 정보 조회 
    public getLectureDetail(event:AwsEvent): Response {
//        수신한 event에서 lecture id값을 받아, detail정보를 출력하도록 하려면 아래처럼..
//        let Id:string = event.body['id'];
//        let result:string=this.lectureService.getLectureDetail(id);
        let path = event.path;
        let result:string=this.lectureService.getLectureDetail(path);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        }
    }

    // 장바구니에 담기 
    public addLectureToCart(event:AwsEvent): Response {
        let path = event.path;
        let result:boolean=this.lectureService.addLectureToCart(path);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        }
    }
}

export default LectureController;
