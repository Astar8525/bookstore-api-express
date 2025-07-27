// Task 1: Get all books
app.get('/books', (req, res) => {
    res.json(books);
});
