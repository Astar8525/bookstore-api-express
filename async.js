// Task 10: Async callback to get all books
app.get('/async-books', (req, res) => {
    setTimeout(() => {
        res.json(books);
    }, 500);
});
