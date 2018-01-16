// Init Github
const github = new Github
// Init UI
const ui = new UI
// Pagination
let repo_count = 5

// Search Input
const searchUser = document.getElementById('searchUser')

// Search Input Event Listener
searchUser.addEventListener('keyup', e => {
    // Get input text
    const userText = e.target.value
    repo_count = 5

    if(userText !== '') {
        // Make http call
        github.getUser(userText, repo_count)
            .then(res => {
                if (res.profile.message === 'Not Found') {
                    // Show alert
                    ui.showAlert('User not found', 'alert alert-danger')
                } else {
                    // Show profile
                    ui.showProfile(res.profile)
                    ui.showRepos(res.repos)
                }
            })
    } else {
        // Clear profile
        ui.clearProfile()
    }
})

// More Button onclick event handler function
function getMoreRepos() {
    // Get input text
    const userText = searchUser.value
    // Paginate by count 5
    repo_count+=5

    if(userText !== '') {
        // Make http call
        github.getUser(userText, repo_count)
            .then(res => {
                if (res.profile.message === 'Not Found') {
                    // Show alert
                    ui.showAlert('User not found', 'alert alert-danger')
                } else {
                    // Show profile
                    ui.showProfile(res.profile)
                    ui.showRepos(res.repos)
                }
            })
    } else {
        // Clear profile
        ui.clearProfile()
    }
}