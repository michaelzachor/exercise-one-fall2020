import React from 'react';

//these are gonna be all the cards

function ArticleCard({articleData}) {
    //destructure all the properties we're receiving and only have access to articleData
    console.log('articleData', articleData);
    return (
        <div>
            <h2>{articleData.title}</h2>
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