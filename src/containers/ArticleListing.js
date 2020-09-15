// list all the articles

import React from 'react'; // this is how the page understands it's a react page
//you're importing from the package react, this object called react

//go out one folder, go into components folder, go to ArticleCard file
import ArticleCard from '../components/ArticleCard';

function ArticleListing() {
    //react functions returns html
    return (
        <section>
            <header>
            <h1>Articles</h1>
            <ArticleCard />
            </header>
            <p>Cool</p>
        </section>
    );
}

//this lets you access this function elsewhere
//default means anyone accesses this file, by default they get this function
export default ArticleListing;