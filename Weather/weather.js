class Weather {
    constructor(city, state) {
        this.apiKey = '34d7e9a1d7a76381'
        this.city = city
        this.state = state
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`)

        const resData = await response.json()

        return resData.current_observation
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city
        this.state = state
    }
}