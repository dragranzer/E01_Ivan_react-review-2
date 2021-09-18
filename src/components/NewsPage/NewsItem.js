import React from 'react'
import {Link} from "react-router-dom";
import "./NewsItem.css"

const NewsItem = ({title, description, url, urlToImage, author, publishedAt}) => {
    return (
        <div className = "Item">
            <p>author: {author}</p>
            <p>publishedAt: {publishedAt}</p>
            <img className="Item-news-img" src={urlToImage} alt="" />
            <h3>
                <Link to={url}>{title}</Link>
            </h3>
            <p>{description}</p>
        </div>
    )
}

export default NewsItem
