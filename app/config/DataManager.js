export default class DataManager {
    static myInstance = null;
    userID = "";

    books = [
        {
            userid: "user1",
            bookid: 1,
            title:"Lofi Chill",
            subtitle:"Read on 3rd of March, 2021",
            image: require("../assets/cover1.jpg"),
            category: "Fiction",
        },
        {
            userid: "user1",
            bookid: 2,
            title:"Spartan's Birth",
            subtitle:"Read on 13rd of May, 2011",
            image: require("../assets/cover2.jpg"),
            category: "Fiction",
        },
        {
            userid: "user1",
            bookid: 3,
            title:"The Creation of the Cosmo",
            subtitle:"Read on 16rd of May, 2014",
            image: require("../assets/cover3.jpg"),
            category: "Fiction",
        },
        {
            userid: "user2",
            bookid: 1,
            title:"Lofi Chill",
            subtitle:"Read on 3rd of March, 2021",
            image: require("../assets/cover1.jpg"),
            category: "Fiction",
        },
    ]

    static getInstance(){
        if(DataManager.myInstance==null){
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance;
    }

    getUserID(){
        return this.userID;
    }

    setUserID(id){
        this.userID = id;
    }

    getBooks(id){
        return this.books.filter((book) => book.userid === id);
    }

    addBook(book){
        this.books.push(book);
    }
}