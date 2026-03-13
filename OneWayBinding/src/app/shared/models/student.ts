//ng g class shared/models/student 


export class Student {
    constructor(
        public id: number, 
        public name: string, 
        public city: string
    ){}
}
