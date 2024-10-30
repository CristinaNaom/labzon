export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}
//DTO: DATA TRANSFER OBJECT
export class PostDTO {
    constructor(
        public title: string = "",
        public userId: number = 0,
        public body: string = "") {

    }
}