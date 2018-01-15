
const http = new easyHTTP

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, res) {
//     if (err) {
//         console.error(err)
//     } else {
//         console.log(res)
//     }
// })

// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
}

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, res) {
//     if (err) {
//         console.error(err)
//     } else {
//         console.log(res)
//     }
// })

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, res) {
//     if (err) {
//         console.error(err)
//     } else {
//         console.log(res)
//     }
// })

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, res) {
    if (err) {
        console.error(err)
    } else {
        console.log(res)
    }
})
