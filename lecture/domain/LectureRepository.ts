import LectureEntity from './entity/LectureEntity';

interface LectureRepository {

    saveLecture(lecture: LectureEntity): Promise<LectureEntity>;
    getLectureByLectureId(id: string, sortkey: string): Promise<LectureEntity>;
    //getLectureDetailByLectureId(partitionkey:string\): Promise<LectureEntity>;
}

export default LectureRepository;