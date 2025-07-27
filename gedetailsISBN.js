// Task 2: Get book by ISBN
app.get('/books/isbn/:isbn', (req, res) => {
    const book = books.find(b => b.isbn === req.params.isbn);
    book ? res.json(book) : res.status(404).send('Book not found');
});
