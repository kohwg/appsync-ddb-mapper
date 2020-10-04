import Review from "./entity/Review";

class ReviewBuilder {

    private readonly _review: Review;

    constructor() {
        this._review = {
            reviewId : "",
            lectureId : "",
            rate : 0,
            contents : "",
            image1 : "",
            image2 : "",
            image3 : "",
            regDate : "",
            writeId : "",
            writeNm : "",
        }
    }

    reviewId(reviewId: string): ReviewBuilder {
        this._review.reviewId = reviewId;
        return this;
    }

    lectureId(lectureId: string): ReviewBuilder {
        this._review.lectureId = lectureId;
        return this;
    }

    rate(rate: number): ReviewBuilder {
        this._review.rate = rate;
        return this;
    }

    contents(contents: string): ReviewBuilder {
        this._review.contents = contents;
        return this;
    }

    image1(image1: string): ReviewBuilder {
        this._review.image1 = image1;
        return this;
    }

    image2(image2: string): ReviewBuilder {
        this._review.image2 = image2;
        return this;
    }

    image3(image3: string): ReviewBuilder {
        this._review.image3 = image3;
        return this;
    }

    regDate(regDate: string): ReviewBuilder {
        this._review.regDate = regDate;
        return this;
    }

    writeId(writeId: string): ReviewBuilder {
        this._review.writeId = writeId;
        return this;
    }

    writeNm(writeNm: string): ReviewBuilder {
        this._review.writeNm = writeNm;
        return this;
    }

    build(): Review {
        return this._review;
    }
}

export default ReviewBuilder;