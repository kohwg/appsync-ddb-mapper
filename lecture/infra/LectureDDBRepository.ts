import Lecture from "../domain/Lecture";
import LectureRepository from "../domain/LectureRepository";

class LectureDDBRespotiry implements LectureRepository{

    findAll(): Array<Lecture> {
        throw new Error("Method not implemented.");
    }

    save(lecture: Lecture): Lecture {
        throw new Error("Method not implemented.");
    }
    
}