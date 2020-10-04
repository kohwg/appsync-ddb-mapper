import Review from "../domain/entity/Review";
import ReviewBuilder from "../domain/ReviewBuilder";
import ReviewRepository from "../domain/ReviewRepository";

class ReviewDDBRepository implements ReviewRepository {
    getReviewByLectureId(lectureId: string): Array<Review>{
        //TODO get review from DDB by LectureId Implementation
        throw new Error('Method not implemented.');
    }

    getReviewByTutorId(tutorId: string): Array<Review>{
        //TODO get review from DDB by TutorId Implementation
        throw new Error('Method not implemented.');        
    }


}