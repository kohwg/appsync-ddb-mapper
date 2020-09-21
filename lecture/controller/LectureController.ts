import Response from './interfaces/Response';
import { AwsEvent } from './interfaces/AwsEvent.interface';
import LectureService from '../application/LectureService';

class LectureController {
    
    lectureService: LectureService;

    constructor() {
        this.lectureService = new LectureService();
    }

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
}

export default LectureController;
