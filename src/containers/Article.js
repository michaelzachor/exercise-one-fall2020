// for each individual article

import React from 'react';
// useParams returns an object of keyValue pairs of URL parameters
import { useParams } from 'react-router-dom';

function Article() {
    // here we've defined id as the userParams object
    let { id } = useParams();

    console.log("id: ", id)
    return (
        <section>
            <h1>Article</h1>
            <p>{ id }</p>
        </section>
    )
}

export default Article;