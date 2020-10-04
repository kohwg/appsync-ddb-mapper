class Review {
    reviewId: string;
    lectureId: string;  //연결된 클래스 아이디
    rate: number;       //평점
    contents: string;   //리뷰내용
    image1: string;     //이미지
    image2: string;
    image3: string;
    regDate: string;    //등록일(yyyymmdd)
    writeId: string;    //작성자 Id
    writeNm: string;    //작성자 이름

    constructor() {
        this.reviewId = "";
        this.lectureId = "";
        this.rate = 0;
        this.contents = "";
        this.image1 = "";
        this.image2 = "";
        this.image3 = "";
        this.regDate = "";
        this.writeId = "";
        this.writeNm = "";
    }
}

export default Review;