import LectureService from '../application/LectureService';
import { AwsEvent } from './interfaces/AwsEvent.interface';
import Lecture from '../domain/Lecture';
import Response from '../controller/interfaces/Response'
import { InputLecture } from '../application/interfaces/InputLecture';
import LectureDDB from '../domain/LectureDDB';
import { AppSyncEvent } from './interfaces/AppSyncEvent';
import ResponseAppsync from './interfaces/ResponseAppsync';

class LectureController {

    private lectureService: LectureService

    constructor() {
        this.lectureService = new LectureService();
    }

    public keywordSearch(event: AwsEvent): Response {
        let keyword: string = event.body['keyword'];
        console.log("###Controller### event is : ", event)        
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

        let inputLecture: InputLecture = event.arguments.input;
        try {
            let result = await this.lectureService.createLecture(inputLecture);
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

process.env.SAMPLE_TABLE = 'class-dev-LectureTable-MXV4LYH979IN';

let lectureController:LectureController = new LectureController();
let event:AppSyncEvent = {
    arguments: {
        input : {
            partitionkey: "2",
            sortkey: "3",
            attribute1: "4",
            attribute2: "5"
        }
    },
    identity: {},
    info: {},
};

lectureController.createLecture(event);