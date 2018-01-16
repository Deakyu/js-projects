// Init Github
const github = new Github
// Init UI
const ui = new UI

// Search Input
const searchUser = document.getElementById('searchUser')

// Search Input Event Listener
searchUser.addEventListener('keyup', e => {
    // Get input text
    const userText = e.target.value

    if(userText !== '') {
        // Make http call
        github.getUser(userText)
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

