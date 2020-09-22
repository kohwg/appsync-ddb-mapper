import LectureDDB from './LectureDDB';
import { promises } from 'dns';

interface LectureRepository {
   
    save(lecture:LectureDDB): Promise<LectureDDB>;
    get(partitionkey:string, sortkey:string): Promise<LectureDDB>;
    
}

export default LectureRepository;