import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import NewsItem from './NewsItem.js'
import Navbar from '../Navbar/Navbar'

function NewsList() {
    const [articles, setArticles] = useState([])
    const URL = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3baf1575163e4a6b917328c0c8340230"
    useEffect(() =>  {
        const getArticles = async () => {
            const res = await Axios.get(URL)

            setArticles(res.data.articles)
            console.log(res.data.articles)
        }

        getArticles();
        
    },[]);

    return (
        <div>
            <Navbar />
            {
                articles.map(({title, description, url, urlToImage, author, publishedAt}) => (
                    <NewsItem
                        title={title}
                        description={description}
                        url={url}
                        urlToImage={urlToImage}
                        author={author}
                        publishedAt={publishedAt}
                    />
                ))
                
            }
        </div>
    )
}

export default NewsList
