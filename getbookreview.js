// Task 5: Get book review
app.get('/books/review/:isbn', (req, res) => {
    const book = books.find(b => b.isbn === req.params.isbn);
    book ? res.json({ reviews: book.reviews || {} }) : res.status(404).send('Book not found');
});
