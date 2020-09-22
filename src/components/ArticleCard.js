import React from 'react';

import { Link } from 'react-router-dom';
//Link is easier for React to understand than href

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

//these are gonna be all the cards

function ArticleCard({articleData}) {
    //date variable gets a Date object which is created by inserting publishedDate data into it
    //which is the date value in data.js
    const date = new Date(articleData.publishedDate);
    //console.log(date); //but we want it as a string so that we can show it on the page
    const dayOfWeek = date.getDay();
    //const day = days[dayOfWeek];
    const month = date.getMonth();
    //the numbers are indexes of arrays. 
    const calendarDate = date.getDate();
    const year = date.getFullYear();
    //the getDate stuff is general JS
    //so the arrays at the top are the order that JS puts the days and months
    //so we can put whatever words we want in those arrays but they're gonna align with that order

    //we know ArticleCard has a propertie called articleData because it says so in ArticleListing.js
    //destructure all the properties we're receiving and only have access to articleData
    //console.log('articleData', articleData.title);
    return (
        <div className="ArticleCard">
            <div className="ArticleCardImage">
                <img src={articleData.image.url} alt={articleData.image.alt} />
            </div>
            <div className="ArticleCardText">
                <h2>{articleData.title}</h2>
                {/* <p>{articleData.publishedDate}</p> */}
                <p>{`${days[dayOfWeek]}, ${months[month]} ${calendarDate}, ${year}`}</p>
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