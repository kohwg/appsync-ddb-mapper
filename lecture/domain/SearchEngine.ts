import Lecture from '../domain/Lecture';

interface SearchEngine {
    searchKeyword(keyword: string, startCtn:number, perPage:number): Array<Lecture>;
    keywordSearchByLectureCenterNm(keyword: string, startCtn:number, perPage:number): Array<Lecture>;
    keywordSearchByLectureCurriculum(keyword: string): Array<Lecture>;
}


export default SearchEngine;