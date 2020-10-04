import Review from "./entity/Review";

interface ReviewRepository {
    getReviewByLectureId(lectureId: string): Array<Review>;
    getReviewByTutorId(tutorId: string): Array<Review>;
}

export default ReviewRepository;