import Lecture from '../domain/Lecture';
import SearchMockEngine from '../infra/SearchMockEngine';
import SearchEngine from '../domain/SearchEngine';
import LectureRepository from '../domain/LectureRepository';
import LectureDDBRepository from '../infra/LectureDDBRepository';
import { InputLecture } from './interfaces/InputLecture';
import LectureDDB from '../domain/LectureDDB';

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

    public async createLecture(request: InputLecture) {
        console.log("### requested lecture info: ", request);
        let lecture: LectureDDB = LectureDDB.createObject(
            request.partitionkey,
            request.sortkey,
            request.attribute1,
            request.attribute2
        );
        return await this.lectureRepository.save(lecture);
    }
}

export default LectureService;