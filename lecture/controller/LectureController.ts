import LectureService from '../application/LectureService';
import { AwsEvent } from './interfaces/AwsEvent.interface';
import Response from '../controller/interfaces/Response'
import LectureEntity from '../domain/LectureEntity';
import { AppSyncEvent } from './interfaces/AppSyncEvent';
import ResponseAppsync from './interfaces/ResponseAppsync';

class LectureController {

    private lectureService: LectureService

    constructor() {
        this.lectureService = new LectureService();
    }

    public keywordSearch(event: AwsEvent): Response {

        console.log("###Controller### event is : ", event); 
        let keyword: string = event.body['keyword'];
        let result = this.lectureService.keywordSearch(keyword);
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: result
            })
        }
    }

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
}


export default LectureController;