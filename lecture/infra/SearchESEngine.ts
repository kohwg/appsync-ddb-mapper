import Lecture from '../domain/Lecture';
import SearchEngine from '../domain/SearchEngine';

class SearchESEngine implements SearchEngine {

    searchKeyword(keyword: string): Lecture[] {
        //TODO ES Implementation
        throw new Error('Method not implemented.');
    }
    keywordSearchByLectureCenterNm(keyword: string): Lecture[] {
        //TODO ES Implementation
        throw new Error('Method not implemented.');
    }
    keywordSearchByLectureCurriculum(keyword: string): Lecture[] {
        //TODO ES Implementation
        throw new Error('Method not implemented.');
    }

}

export default SearchESEngine;