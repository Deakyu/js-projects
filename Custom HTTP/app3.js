const http = new easyHTTP

// Get users
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err))

// User Data
const data = {
    name: 'Deakyu Lee',
    username: 'deakyulee',
    email: 'lee5250@fredonia.edu'
}

// Create Post
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/1', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Delete User
// http.delete('https://jsonplaceholder.typicode.com/users/1')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))