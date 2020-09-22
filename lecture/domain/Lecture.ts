class Lecture {

    lectureId:string;
    title:string;
    tutorName:string;

    constructor(lectureId, title, tutorName) {
        this.lectureId = lectureId;
        this.title = title;
        this.tutorName = tutorName;
    }

    get getLecture(): string {
        return this.lectureId + ":" + this.title + ", tutor :" + this.tutorName;
    }
}

export default Lecture;