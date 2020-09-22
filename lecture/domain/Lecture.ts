class Lecture {
    id: string;
    classname: string;
    name: string;
    
    constructor(id: string, classname: string, name: string) {
        this.id = id;
        this.classname = classname;
        this.name = name;
    }

    get getLecture(): string {
        return this.id + ":" + this.classname + ", tutor :" + this.name;
    }
}

export default Lecture;