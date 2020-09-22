import Lecture from '../domain/Lecture';
import SearchEngine from '../domain/SearchEngine';

class SearchMockEngine implements SearchEngine{

    searchKeyword(keyword: string): Array<Lecture> {
        if( keyword === "tennis" ){
            return [new Lecture("001","Tennis","Wongyung Koh"), new Lecture("002", "Swimming", "Dawoon"), new Lecture("003", "Cooking", "Joowon_Jiae")];
        } else {
            return [new Lecture("001","NoKeyword","NoKeyword"), new Lecture("002", "Swimming", "Dawoon")];
        }
    }

}

export default SearchMockEngine;