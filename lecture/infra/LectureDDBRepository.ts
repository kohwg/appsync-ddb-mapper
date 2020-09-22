import LectureDDB from "../domain/LectureDDB";
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

    public async save(lecture: LectureDDB) {
        console.log("save : ", lecture);
        return await this.mapper.put(lecture);
    }

    public async get(partitionkey: string, sortkey: string) { // primary key

        const toGet = Object.assign(new LectureDDB,
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
            LectureDDB,
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

// let test:LectureDDBRepository = new LectureDDBRepository();

// console.log("save")
// // let item = await test.save(LectureDDB.getObject("isheejong", "2020-09-21#1", "강좌1"));


// console.log("end save");

// test.query("isheejong", "2020-09-21");