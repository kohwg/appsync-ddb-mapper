import LectureService from '../application/LectureService';
import { AwsEvent } from './interfaces/AwsEvent.interface';
import Lecture from '../domain/Lecture';
import Response from '../controller/interfaces/Response'
import { LectureInfo } from '../application/interfaces/LectureInfo';
import LectureEntity from '../domain/LectureEntity';
import { AppSyncEvent } from './interfaces/AppSyncEvent';
import ResponseAppsync from './interfaces/ResponseAppsync';

class LectureController {

    private lectureService: LectureService

    constructor() {
        this.lectureService = new LectureService();
    }

    public keywordSearch(event: AwsEvent): Response {

 //       let keyword: string = '';
        console.log("###Controller### event is : ", event)
  /*      if (event.body) {
            let body = JSON.parse(event.body).keyword
            if (body.keyword)
                keyword = body.keyword;
        }*/
        let keyword = JSON.parse(JSON.stringify(event.body)).keyword;
        //       let keyword: string = event.body['keyword'];

        console.log("###Controller### keyword is : ", keyword)
        //        let path = event.path;
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