import request from "supertest";
import {app} from "../app.mjs";


describe("books tests", () => {
    let bookId;
    it("should return an empty list of books", async () => {
        const response = await request(app)
            .get('/books/list')
            .expect(200);
        expect(response.body.status).toBe("OK")
        expect(response.body.data).toStrictEqual([])
    });
    it("should create a new book", async () => {
        const book ={
            title: "t-1",
            description: "d-1",
            author: "a-1",
            publishDate: "2024-04-05"};

        const response = await request(app)
            .post('/books/create')
            .send(book)
            .expect(201);
        bookId = response.body.data.id;
        expect(response.body.status).toBe("OK")
        expect(response.body.data.title).toBe(book.title)
        expect(response.body.data.description).toBe(book.description)
        expect(response.body.data.author).toBe(book.author)
        expect(response.body.data.publishDate).toBe(book.publishDate)
    });
    it("should return a list of books with 1 book", async () =>{
        const response = await request(app)
            .get('/books/list')
            .expect(200);
        expect(response.body.status).toBe("OK")
        expect(response.body.data.length).toBe(1);
    });
    it("should get a book by id",async ()=>{
        const res = await request(app)
            .get(`/books/get/${bookId}`)
            .expect(200);
        expect(res.body.data.id).toBe(bookId)
    });
    it("should remove a book by id",async ()=>{
        const res = await request(app)
            .delete(`/books/delete/${bookId}`)
            .expect(200);
        expect(res.body.data[0].id).toBe(bookId)
    });


    it("should failed when trying to create book w/o a title", async () => {
        const book ={
            description: "d-1",
            author: "a-1",
            publishDate: "2024-04-05"};

        const response = await request(app)
            .post('/books/create')
            .send(book)
            .expect(400);

        expect(response.error.text).toBe("Error!:Must provide title")
    });
})
