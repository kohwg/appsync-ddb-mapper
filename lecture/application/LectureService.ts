import Lecture from '../domain/Lecture';
import SearchMockEngine from '../infra/SearchMockEngine';
import SearchEngine from '../domain/SearchEngine';
import LectureRepository from '../domain/LectureRepository';
import LectureDDBRepository from '../infra/LectureDDBRepository';
import LectureEntity from '../domain/LectureEntity';
import { LectureInfo } from './interfaces/LectureInfo';

class LectureService {

    searchEngine: SearchEngine;
    lectureRepository: LectureRepository;

    constructor() {
        this.searchEngine = new SearchMockEngine();
        this.lectureRepository = new LectureDDBRepository();
    }

    /* 키워드를 통해 강좌를 검색한다 
    keywordSearch(keyword: string): String {
        let lectureList: Array<Lecture> = this.searchEngine.searchKeyword(keyword);
        let lectureListStr: String = "";
        lectureList.forEach(lecture => {
            lectureListStr += lecture.getLecture + " ";
            console.log(lectureListStr)
        });
        return lectureListStr;
        //        return this.searchEngine.searchKeyword(keyword);

    }*/

    // 새로운 강좌를 생성한다 
    public async createLecture(request: LectureEntity) {
        console.log("### requested lecture info: ", request);
 //       let lecture: LectureInfo = LectureEntity.createObject(request);
        let lecture: LectureEntity = LectureEntity.createObject(request);
        return await this.lectureRepository.save(lecture);
    }

    keywordSearch(keyword: string, startCtn:number, perPage:number): Array<Lecture> {
        return this.searchEngine.searchKeyword(keyword, startCtn, perPage);
    }

    keywordSearchByLectureCenterNm(keyword: string, startCtn:number, perPage:number): Array<Lecture> {
        return this.searchEngine.keywordSearchByLectureCenterNm(keyword, startCtn, perPage);
    }

    keywordSearchByLectureCurriculum(keyword: string): Array<Lecture> {
        return this.searchEngine.keywordSearchByLectureCurriculum(keyword);
    }

}

export default LectureService;