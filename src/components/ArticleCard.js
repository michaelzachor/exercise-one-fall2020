import React from 'react';

import { Link } from 'react-router-dom';
//Link is easier for React to understand than href

//these are gonna be all the cards

function ArticleCard({articleData}) {
    //we know ArticleCard has a propertie called articleData because it says so in ArticleListing.js
    //destructure all the properties we're receiving and only have access to articleData
    console.log('articleData', articleData.title);
    return (
        <div className="ArticleCard">
            <div className="ArticleCardImage">
                <img src={articleData.image.url} alt={articleData.image.alt} />
            </div>
            <div className="ArticleCardText">
                <h2>{articleData.title}</h2>
                <p>{articleData.publishedDate}</p>
                <p>{articleData.blurb}</p>
                <Link to={`/article/${articleData.id}`}>Read More</Link>
            </div>
            {/* 
            putting stuff between curly brackets in React means it's JS 
            so the first curly brackets means this is JS and the second one with the $ means this is a value and not just text*/}

        </div>
    )
}

export default ArticleCard;

// const coolObject = {
//     key1: '',
//     key2: '',
//     key3: ''
// }

// const {key1, key2} = coolObject;
// console.log(key1, key2);
//that is what's happening above

//'text in here and ${anyValidID}'