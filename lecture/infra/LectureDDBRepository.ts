import LectureEntity from "../domain/LectureEntity";
import LectureRepository from "../domain/LectureRepository";
import * as AWS from 'aws-sdk';
import { DataMapper, QueryOptions } from '@aws/dynamodb-data-mapper';
// import 관리..
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

    public async save(lecture: LectureEntity) {
        console.log("### save : ", lecture);
        return await this.mapper.put(lecture);
    }

    public async get(partitionkey: string, sortkey: string) { // primary key

        const toGet = Object.assign(new LectureEntity,
            {
                partitionkey: partitionkey,
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
    public async query(partitionkey: string, sortkey: string) {
        const iterator = this.mapper.query(
            LectureEntity,
            {   // key condition - (partitionkey, range key you can use expression ( beginwith, between.. and so on))
                partitionkey: partitionkey,
                sortkey: beginsWith(sortkey)
            }
        );
        for await (const record of iterator) {
            console.log(record, iterator.count, iterator.scannedCount);
        }
    }

}
export default LectureDDBRepository;