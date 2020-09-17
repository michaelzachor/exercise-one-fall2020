// list all the articles

import React from 'react'; // this is how the page understands it's a react page
//you're importing from the package react, this object called react

//go out one folder, go into components folder, go to ArticleCard file
import ArticleCard from '../components/ArticleCard';
//now import the data file cause we wanna use that JSON
//we wanna use the keys to access the values
import Data from '../components/data';

function ArticleListing() {
    //props = properties = sends data through the flow of the components

    //react functions returns html
    return (
        <main>
            <header>
                <h1>Articles</h1>
            </header>
            {/* map is a specialized loop for an array */}
            {/* outputs the element at that point in the array, and if you want also the index */}
            {Data.map((article, i) => (
                //this is inline JS
                //for each article it runs ArticleCard
                //and each child in the list needs a unique key
                <ArticleCard key={i} articleData={article}/>
                //you've set a prop for each ArticleCard, saying the articleData for that article is equal to the article itself
                //so we're passing two props (the key value, and the article)
            ))}
            <p>Cool</p>
        </main>
    );
}

//this lets you access this function elsewhere
//default means anyone accesses this file, by default they get this function
export default ArticleListing;