// Book constructor
function Book(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
}
// UI constructor
function UI() {

}

// Add book to object
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list')
    // create tr element
    const row = document.createElement('tr')
    // Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `

    list.appendChild(row)
}

UI.prototype.showAlert = function(message, className) {
    // Create a div
    const div = document.createElement('div')
    // Add class name
    div.className = `alert ${className}`
    // Add text
    div.appendChild(document.createTextNode(message))
    // Get parent
    const container = document.querySelector('.container')
    const form = document.querySelector('#book-form')

    container.insertBefore(div, form)

    // Timeout after 3 seconds
    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 3000);
}

// Delete book
UI.prototype.deleteBook = function(target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove()
    }
}

UI.prototype.clearFields = function() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e) {
    // Get form values
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value

    // Instantiate book object
    const book = new Book(title, author, isbn)

    // Instantiate UI
    const ui = new UI()

    // Validate
    if(title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error')
    } else {
        // Add book to list
        ui.addBookToList(book)
        // Show success
        ui.showAlert('Book Added!', 'success')
        // Clear fields
        ui.clearFields()
    }

    e.preventDefault()
})

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {
    // Instantiate ui
    const ui = new UI()

    ui.deleteBook(e.target)

    // Show alert
    ui.showAlert('Book removed!', 'success')

    e.preventDefault()
})