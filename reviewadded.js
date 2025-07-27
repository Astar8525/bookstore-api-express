// Task 8: Add or modify a review
app.put('/review/:isbn', (req, res) => {
    const { username, review } = req.body;
    const book = books.find(b => b.isbn === req.params.isbn);
    if (book) {
        book.reviews = book.reviews || {};
        book.reviews[username] = review;
        res.json({ message: 'Review added/updated' });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});
