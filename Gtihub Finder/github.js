class Github {
    constructor() {
        this.client_id = 'dd448111c8f12edd08e1'
        this.client_secret = '2625b3d69a551c49510b3a3bd0c3ed9658c1f75d'
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json()

        const repos = await repoResponse.json()

        return {
            // ES6 way of profile:profile
            profile,
            repos
        }
    }
}