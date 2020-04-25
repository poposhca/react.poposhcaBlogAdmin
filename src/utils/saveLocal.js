const KEY = 'POPOSHCABLOG'

const saveLocal = (article, index) => {
    let stories = JSON.parse(localStorage.getItem(KEY))
    if(stories)
        stories.articles[index] = article
    else
        stories = { articles: [article] }
    localStorage.setItem(KEY, JSON.stringify(stories))
}

const getArticle = (index) => {
    const stories = localStorage.getItem(KEY)
    if(stories) {
        const { articles } = JSON.parse(stories)
        return articles[index]
    }
    return {}
}

export { saveLocal, getArticle }
