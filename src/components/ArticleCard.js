import React from 'react';
import { Link } from 'react-router-dom';
import { days, months } from "./dateValues";

function ArticleCard({articleData}) {

    const date = new Date(articleData.publishedDate);
    const dayOfWeek = date.getDay();
    const month = date.getMonth();
    const calendarDate = date.getDate();
    const year = date.getFullYear();
    
    return (
        <div className="ArticleCard">
            <div className="ArticleCardImage">
                <img src={articleData.image.url} alt={articleData.image.alt} />
            </div>
            <div className="ArticleCardText">
                <h2 className="ArticleCardTitle">{articleData.title}</h2>
                <p>{`${days[dayOfWeek]}, ${months[month]} ${calendarDate}, ${year}`}</p>
                <p>{articleData.blurb}</p>
                <Link to={`/article/${articleData.id}`}>Read More</Link>
            </div>
        </div>
    )
}

export default ArticleCard;