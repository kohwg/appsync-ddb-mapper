import Lecture from "../domain/Lecture";
import LectureRepository from "../domain/LectureRepository";
import LectureMockRepository from "../infra/LectureMockRepository"
import CartManager from "../domain/CartManager";
import CartDDBMockRepository from "../infra/CartDDBMockManager"

class LectureService {
    lectureRepository: LectureRepository;
    cartManager: CartManager;

    constructor() {
        this.lectureRepository = new LectureMockRepository();
        this.cartManager = new CartDDBMockRepository();
    }
    
    // 신규 강좌 등록
    public createLecture(path: string): string {
        let lecture: Lecture = this.lectureRepository.save(new Lecture("001","Yoga", "KIM JONG IL"));
        return lecture.getLecture;
    }

    // 강좌 목록 조회
    public listLecture(path: string): string {
        let lectureList: Array<Lecture> = this.lectureRepository.findAll();
        let lectureString: string = "";
        lectureList.forEach(lecture => { 
            lectureString+=lecture.getLecture+" "; 
            console.log(lectureString)});
        return lectureString;
    }

    // 강좌 상세정보 조회
    public getLectureDetail(id: string): string {
        let lecture: Lecture = this.lectureRepository.getDetail(id);
        return lecture.getLecture
    }
    
    // 장바구니에 담기 
    public addLectureToCart(id: string): boolean {
        // 클릭된 강좌의 id를 기반으로 정보를 조회해서 Call을 진행? 강좌의 기본정보 조회 필요 
        let result: boolean = this.cartManager.addCart(new Lecture("XXX","Yoga", "ADD CART TEST"));
        return true;
    }
}

export default LectureService;