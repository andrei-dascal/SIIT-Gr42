class ArticleRepository {
    constructor() {

    }

    getAllArticles() {
        //call to an API to load all articles
    }

    getArticleByID(articleID) {
        //call to an API to load one article byID;
    }    
}

class Article {
    #id;
    #title;
    #date;
    #topic;
    #text;
    #author;
    #imagePaths;

    constructor(title, date, topic, text, author) {
        this.#title = title;
        //continue for the other properties;
    }

    get id() {

    }
    //setter for imagePaths
}

class Author {
    #id
    #firstName;
    #lastName;
    #numberOfArticlesWritten;

    //Search by id and get the count of articles
    //Set the above count on numberOfArticlesWritten
    //Only getter should be exposed for numberOfArticlesWritten
}