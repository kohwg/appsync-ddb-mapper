import LectureService from '../application/LectureService';
import { AwsEvent } from './interfaces/AwsEvent.interface';
import Lecture from '../domain/Lecture';
import Response from '../controller/interfaces/Response'

class LectureController {

    private lectureService:LectureService
    
    constructor() {
        this.lectureService = new LectureService();
    }

    public keywordSearch(event:AwsEvent): Response {
//        let keyword:string = event.body['keyword'];
        let path = event.path;
        let result = this.lectureService.keywordSearch(path);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        }
    }
}

export default LectureController;