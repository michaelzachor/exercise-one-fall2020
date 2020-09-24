// list all the articles

import React from 'react'; // this is how the page understands it's a react page
//you're importing from the package react, this object called react

//go out one folder, go into components folder, go to ArticleCard file
import ArticleCard from '../components/ArticleCard';
//now import the data file cause we wanna use that JSON
//we wanna use the keys to access the values
import Data from '../components/data';

function ArticleListing() {

    return (
        <main>
            <header className="ArticleListingHeader">
                <h1>Articles</h1>
            </header>
            {Data.map((article, i) => (
                <ArticleCard key={i} articleData={article}/>
            ))}
        </main>
    );
}

export default ArticleListing;