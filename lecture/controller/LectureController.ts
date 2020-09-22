import LectureService from '../application/LectureService';
import { AwsEvent } from './interfaces/AwsEvent.interface';
import Lecture from '../domain/Lecture';
import Response from '../controller/interfaces/Response'
import { InputLecture } from '../application/interfaces/InputLecture';
import LectureDDB from '../domain/LectureDDB';
import { AppSyncEvent } from './interfaces/AppSyncEvent';

class LectureController {

    private lectureService: LectureService

    constructor() {
        this.lectureService = new LectureService();
    }

    public keywordSearch(event: AwsEvent): Response {
        let keyword: string = event.body['keyword'];
        //        let path = event.path;
        let result = this.lectureService.keywordSearch(keyword);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        }
    }

    public async createLecture(event: AppSyncEvent): Promise<Response> {

        console.log("event : ", event);

        let inputLecture: InputLecture = event.arguments.input;
        try {
            let result = await this.lectureService.createLecture(inputLecture);
            return {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: result
                })
            }
        } catch (err) {
            throw err;
        }
    }
}


export default LectureController;