import Lecture from './Lecture';

interface LectureRepository {
    findAll(): Array<Lecture>;
    save(lecture:Lecture): Lecture;
}

export default LectureRepository;