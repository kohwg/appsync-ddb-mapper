import Lecture from '../domain/entity/Lecture';
import SearchMockEngine from '../infra/SearchMockEngine';
import SearchEngine from '../domain/SearchEngine';
import LectureRepository from '../domain/LectureRepository';
import LectureDDBRepository from '../infra/LectureDDBRepository';
import LectureEntity from '../domain/entity/LectureEntity';
import { LectureInfo } from './interfaces/LectureInfo';
import Review from "../domain/entity/Review";
import ReviewRepository from '../domain/ReviewRepository';
import ReviewMockRepository from '../infra/ReviewMockRepository';

class LectureService {

    searchEngine: SearchEngine;
    lectureRepository: LectureRepository;
    reviewRepository: ReviewRepository;

    constructor() {
        this.searchEngine = new SearchMockEngine();
        this.lectureRepository = new LectureDDBRepository();
        this.reviewRepository = new ReviewMockRepository();
    }


    // 새로운 강좌를 생성한다 
    public async createLecture(request: LectureEntity) {
        console.log("### requested lecture info: ", request);
 //       let lecture: LectureInfo = LectureEntity.createObject(request);
        let lecture: LectureEntity = LectureEntity.createObject(request);
        return await this.lectureRepository.saveLecture(lecture);
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

    public async getLectureDetailByLectureId(lectureId: string) {
        console.log("### requested lecture Id: ", lectureId);
        return await this.lectureRepository.getLectureDetailByLectureId(lectureId);
    }

   /* getLectureDetailByLectureId(lectureId: string): LectureEntity {
        return this.lectureRepository.getLectureDetailByLectureId(lectureId);
    }*/

    getReviewByLectureId(lectureId: string): Array<Review> {
        return this.reviewRepository.getReviewByLectureId(lectureId);
    }

    getReviewByTutorId(tutorId: string): Array<Review> {
        return this.reviewRepository.getReviewByTutorId(tutorId);
    }

}

export default LectureService;