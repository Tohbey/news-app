//api key
export const  API_KEY ="apiKey=fda8ec702e4f4dc0b2901ba241493cd9";

//HEADLINE LINKS

export const general_link = (category) => {
    return "https://newsapi.org/v2/top-headlines?country=us&category="+{category}+"&"+API_KEY
}
export const BASE_URL_BUSINESS = "https://newsapi.org/v2/top-headlines?country=us&category=business&"+API_KEY
export const BASE_URL_SPORTS = "https://newsapi.org/v2/top-headlines?country=us&category=sports&"+API_KEY
export const BASE_URL_GENERAL = "https://newsapi.org/v2/top-headlines?country=us&category=general&"+API_KEY
export const BASE_URL_SCIENCE = "https://newsapi.org/v2/top-headlines?country=us&category=science&"+API_KEY
export const BASE_URL_TECH = "https://newsapi.org/v2/top-headlines?country=us&category=technology&"+API_KEY

export const EVERYTHING_BASE_URL = "https://newsapi.org/v2/everything?q=bitcoin&"+API_KEY

export const SOURCE_BASE_URL = "https://newsapi.org/v2/sources?"+API_KEY