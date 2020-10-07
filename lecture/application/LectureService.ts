
import LectureRepository from '../domain/LectureRepository';
import LectureDDBRepository from '../infra/LectureDDBRepository';
import LectureEntity from '../domain/entity/LectureEntity';


class LectureService {

    lectureRepository: LectureRepository;

    constructor() {
        this.lectureRepository = new LectureDDBRepository();
    }


    // 새로운 강좌를 생성한다 
    public async createLecture(request: LectureEntity) {
        console.log("### requested lecture info: ", request);
        let lecture: LectureEntity = LectureEntity.createObject(request);
        return await this.lectureRepository.saveLecture(lecture);
    }

    // 클래스 상세 정보를 받아온다 
    public async getLectureByLectureId(lectureId: string, sortkey: string) {
        console.log("### requested lecture Id: ", lectureId, sortkey);
        return await this.lectureRepository.getLectureByLectureId(lectureId, sortkey);
    }

}

export default LectureService;