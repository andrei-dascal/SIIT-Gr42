function init() {
    const articleRepository = new ArticleRepository();
    // const commentRepository = new CommentRepository();

    const allArticles = articleRepository.getAllArticles();
    

    for(const article of allArticles) {
        // const comments = commentRepository.getAllComments(article.id);
        //Add each article in DOM.
        //Add all coments for this article
    }
}