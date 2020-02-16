import React from 'react';

import Card from './Card/Card';
import classes from './Cards.module.css';

const Cards = (props) => {
    let count = 0;
    const data = props.posts.map(post => {

        let image = post.data.preview
            ? post.data.preview.images[0].source.url
            : 'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg';
        image = image.replace("&amp;","&");
        // console.log(image);
          return (

                  <Card
                      title={post.data.title}
                      content={post.data.selftext}
                      image={image}
                      alt={post.data.link_flair_text}
                      url={post.data.url}
                      key={count++}
                  />

          )
        }
    )

    return (
        <div className={classes.Cards}>
            {data}
        </div>
    )
}

export default Cards;
