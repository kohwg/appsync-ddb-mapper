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
     */
    // request object를 받아 여기서 ..
    //public static createObject(partitionkey: string, sortkey: string, attribute1: string, attribute2: string): LectureEntity {
    public static createObject(request: LectureEntity): LectureEntity {
        console.log("### object is : ", request);
    
        // validate 과정을 여기 넣어도 되고, 많이 커지면 따로 빼도록 하자.
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