import React from 'react'
import {Link} from "react-router-dom";
import "./NewsItem.css"

const NewsItem = ({title, description, url, urlToImage}) => {
    return (
        <div className = "Item">
            <img className="" src={urlToImage} alt="" />
            <h3>
                <Link to={url}>{title}</Link>
            </h3>
            <p>{description}</p>
        </div>
    )
}

export default NewsItem
