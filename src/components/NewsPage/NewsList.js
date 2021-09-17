import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import NewsItem from './NewsItem.js'

function NewsList() {
    const [articles, setArticles] = useState([])
    const URL = "https://newsapi.org/v2/everything?q=tesla&from=2021-08-16&sortBy=publishedAt&apiKey=3baf1575163e4a6b917328c0c8340230"
    useEffect(() =>  {
        const getArticles = async () => {
            const res = await Axios.get(URL)

            setArticles(res.data.articles)
            console.log(res)
        }

        getArticles();
        
    },[]);

    return (
        <div>
            {
                articles.map(({title, description, url, urlToImage}) => (
                    <NewsItem
                        title={title}
                        description={description}
                        url={url}
                        urlToImage={urlToImage}
                    />
                ))
            }
        </div>
    )
}

export default NewsList
