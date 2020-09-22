import Lecture from './Lecture';

interface LectureRepository {
    findAll(): Array<Lecture>;
    getDetail(id: String): Lecture;
    save(lecture: Lecture): Lecture;
}

export default LectureRepository;