import LectureService from '../application/LectureService';
import LectureEntity from '../domain/entity/LectureEntity';
import { AppSyncEvent } from './interfaces/AppSyncEvent';
import ResponseAppsync from './interfaces/ResponseAppsync';

class LectureController {

    private lectureService: LectureService

    constructor() {
        this.lectureService = new LectureService();
    }


    // 새로운 강좌정보를 등록 
    public async createLecture(event: AppSyncEvent): Promise<ResponseAppsync> {

        console.log("event : ", event);

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
     * @param lectureId = partitionkey
     */
    public async getLectureByLectureId(event: AppSyncEvent): Promise<ResponseAppsync> {

        console.log("event : ", event);

        let lectureId: string = event.arguments.id;
        let sortkey: string = event.arguments.sortkey;
        try {
            let result: LectureEntity = await this.lectureService.getLectureByLectureId(lectureId, sortkey);
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