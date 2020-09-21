import Lecture from "../domain/Lecture";
import LectureRepository from "../domain/LectureRepository";

class LectureMockRepository implements LectureRepository {

    findAll(): Array<Lecture> {
        return [new Lecture("000", "Yoga", "KANG SUNG IL"), new Lecture("001", "GYMClass", "KIM JONG IL"), new Lecture("002", "Tennis", "LEE HEE JONG")]
    }

    save(lecture: Lecture): Lecture {
        return lecture;
    }

}

export default LectureMockRepository;