// Task 4: Get books by title
app.get('/books/title/:title', (req, res) => {
    const results = books.filter(b => b.title.toLowerCase().includes(req.params.title.toLowerCase()));
    res.json(results);
});
