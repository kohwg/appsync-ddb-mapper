import {
    attribute,
    hashKey,
    rangeKey,
    table
} from '@aws/dynamodb-data-mapper-annotations';


// cloudformation template에서 생성되는 TABLE값을 ENV로 받아와 사용 
const tableName: string = String(process.env.SAMPLE_TABLE);

if (!process.env.SAMPLE_TABLE) {
    this.tableName = 'class-dev-LectureTable-MXV4LYH979IN';;
}

@table(tableName)
class LectureEntity {

    @hashKey()
    private partitionkey: string

    @rangeKey()
    private sortkey: string

    @attribute()
    private attribute1: string

    @attribute()
    private attribute2: string

    /**
     * 
     */
    public domainlogic(): string {
        this.attribute1 = "1";
        return this.attribute1;
    }

    get toJson(): string {
        return JSON.stringify(this);
    }

    /**
     * 
     * https://github.com/awslabs/dynamodb-data-mapper-js/issues/136
     * @param partitionkey 
     * @param sortkey 
     * @param attribute1 
     * @param attribute2
     */
    public static createObject(request: LectureEntity): LectureEntity {
        console.log("### object is : ", request);
    
        //TODO Validation Implementation
        //Example) 강좌제목에 비속어가 들어있다던지? 특정항목이 null이라던지?
        //만약 validation 과정이 길어지면 Domain layer에 Validator로 별도로 분리하는것을 고려할 것 
        return Object.assign(new LectureEntity,
            {
                partitionkey: request.partitionkey,
                sortkey: request.sortkey,
                attribute1: request.attribute1,
                attribute2: request.attribute2
            }
        );
    }

}

export default LectureEntity;