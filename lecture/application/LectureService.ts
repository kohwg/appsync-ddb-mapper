import Lecture from '../domain/Lecture';
import SearchMockEngine from '../infra/SearchMockEngine';
import SearchEngine from '../domain/SearchEngine';

class LectureService {

    searchEngine:SearchEngine;

    constructor() {
        this.searchEngine = new SearchMockEngine();
    }

    keywordSearch(keyword: string): Array<Lecture> {
        return this.searchEngine.searchKeyword(keyword);
    }
}

export default LectureService;