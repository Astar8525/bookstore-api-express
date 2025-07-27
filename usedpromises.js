// Task 11: Promise-based search by ISBN
app.get('/promise/isbn/:isbn', (req, res) => {
    const searchISBN = (isbn) => new Promise((resolve, reject) => {
        const book = books.find(b => b.isbn === isbn);
        book ? resolve(book) : reject('Book not found');
    });
    searchISBN(req.params.isbn)
        .then(data => res.json(data))
        .catch(err => res.status(404).send(err));
});
