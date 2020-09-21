import Lecture from "../domain/Lecture";
import LectureRepository from "../domain/LectureRepository";
import LectureMockRepository from "../infra/LectureMockRepository"

class LectureService {
    lectureRepository: LectureRepository;

    constructor() {
        this.lectureRepository = new LectureMockRepository();
    }

    public createLecture(path: string): string {
        let lecture: Lecture = this.lectureRepository.save(new Lecture("001","Yoga", "KIM JONG IL"));
        return lecture.getLecture;
    }

    public listLecture(path: string): string {
        let lectureList: Array<Lecture> = this.lectureRepository.findAll();
        let lectureString: string = "";
        lectureList.forEach(lecture => { 
            lectureString+=lecture.getLecture+" "; 
            console.log(lectureString)});
        return lectureString;
    }
}

export default LectureService;