import LectureEntity from './LectureEntity';
import { promises } from 'dns';

interface LectureRepository {
   
    save(lecture:LectureEntity): Promise<LectureEntity>;
    get(partitionkey:string, sortkey:string): Promise<LectureEntity>;
    
}

export default LectureRepository;