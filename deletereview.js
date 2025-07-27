// Task 9: Delete a review
app.delete('/review/:isbn/:username', (req, res) => {
    const book = books.find(b => b.isbn === req.params.isbn);
    if (book && book.reviews && book.reviews[req.params.username]) {
        delete book.reviews[req.params.username];
        res.json({ message: 'Review deleted' });
    } else {
        res.status(404).json({ message: 'Review not found' });
    }
});
