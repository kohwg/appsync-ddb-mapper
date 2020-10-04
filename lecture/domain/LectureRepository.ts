import Lecture from './entity/Lecture';
import LectureEntity from './entity/LectureEntity';

interface LectureRepository {
   
    saveLecture(lecture:LectureEntity): Promise<LectureEntity>;
    getLectureDetailByLectureId(partitionkey:string): Promise<LectureEntity>;
    //getLectureDetailByLectureId(partitionkey:string\): Promise<LectureEntity>;
}

export default LectureRepository;