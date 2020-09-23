import LectureEntity from './LectureEntity';

interface LectureRepository {
   
    save(lecture:LectureEntity): Promise<LectureEntity>;
    get(partitionkey:string, sortkey:string): Promise<LectureEntity>;
    
}

export default LectureRepository;