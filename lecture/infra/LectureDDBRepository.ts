import LectureEntity from "../domain/entity/LectureEntity";
import LectureRepository from "../domain/LectureRepository";
import * as AWS from 'aws-sdk';
import { DataMapper, QueryOptions } from '@aws/dynamodb-data-mapper';
import {
    AttributePath, FunctionExpression,
    UpdateExpression,
    ConditionExpression,
    ConditionExpressionPredicate,
    ContainsPredicate,
    between,
    beginsWith
} from '@aws/dynamodb-expressions';


class LectureDDBRepository implements LectureRepository {

    private mapper: DataMapper = new DataMapper({
        client: new AWS.DynamoDB({ region: 'ap-northeast-2' })
    });

    constructor() {
    }

    // 신규클래스 생성시 클래스 정보를 DDB에 저장 
    public async saveLecture(lecture: LectureEntity) {
        console.log("### save : ", lecture);
        return await this.mapper.put(lecture);
    }

    // Lecture ID에 mapping되는 클래스 정보를 반환 
    public async getLectureByLectureId(lectureId: string, sortkey: string) { // primary key

        const toGet = Object.assign(new LectureEntity,
            {
                lectureId: lectureId,
                sortkey: sortkey
            });
        return await this.mapper.get(toGet);
    }


    /**
     * query items by condition
     * 
     * @param partitionkey 
     * @param sortkey 
     */
    public async query(lectureId: string, sortkey: string) {
        const iterator = this.mapper.query(
            LectureEntity,
            {   // key condition - (partitionkey, range key you can use expression ( beginwith, between.. and so on))
                lectureId: lectureId,
                sortkey: beginsWith(sortkey)
            }
        );
        for await (const record of iterator) {
            console.log(record, iterator.count, iterator.scannedCount);
        }
    }

}
export default LectureDDBRepository;