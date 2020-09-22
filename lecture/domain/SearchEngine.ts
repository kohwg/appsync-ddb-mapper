import Lecture from '../domain/Lecture';

interface SearchEngine {
    searchKeyword(keyword: string): Array<Lecture>;
}

export default SearchEngine;