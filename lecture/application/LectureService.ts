import Lecture from '../domain/Lecture';
import SearchMockEngine from '../infra/SearchMockEngine';
import SearchEngine from '../domain/SearchEngine';
import LectureRepository from '../domain/LectureRepository';
import LectureDDBRepository from '../infra/LectureDDBRepository';
import { LectureInfo } from './interfaces/LectureInfo';
import LectureEntity from '../domain/LectureEntity';

class LectureService {

    searchEngine: SearchEngine;
    lectureRepository: LectureRepository;

    constructor() {
        this.searchEngine = new SearchMockEngine();
        this.lectureRepository = new LectureDDBRepository();
    }

    keywordSearch(keyword: string): String {
        let lectureList: Array<Lecture> = this.searchEngine.searchKeyword(keyword);
        let lectureListStr: String = "";
        lectureList.forEach(lecture => {
            lectureListStr += lecture.getLecture + " ";
            console.log(lectureListStr)
        });
        return lectureListStr;
        //        return this.searchEngine.searchKeyword(keyword);

    }

    public async createLecture(request: LectureEntity) {
        console.log("### requested lecture info: ", request);
        // createObject 를 할때, 어떤 정보들만을 보내줄것인지. object만 보내주고 domain에서 처리할수도..
        let lecture: LectureEntity = LectureEntity.createObject(request
  /*          request.partitionkey,
            request.sortkey,
            request.attribute1,
            request.attribute2*/
        );
        return await this.lectureRepository.save(lecture);
    }
}

export default LectureService;