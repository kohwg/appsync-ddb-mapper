import LectureCurriculum from '../domain/LectureCurriculum';

class Paging {

    startCtn:number;
    perPage:number;

    constructor(startCtn:number = 1, perPage:number = 10) {
        this.startCtn = startCtn;
        this.perPage = perPage;
    }
}

export default Paging;