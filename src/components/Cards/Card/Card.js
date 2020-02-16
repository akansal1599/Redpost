import React from 'react';

import classes from './Card.module.css';


let ord = 1;
const Card = (props) => {
    // let display= "none";
    // if(props.image && props.image.length>5 && props.image.substring(0,5)=="https"){
    //     display = "block";
    // }
    ord++;
    if(ord==4){
        ord = 1;
    }
    let image = <img
        // style={{display:display}}
        src={props.image}
        alt={props.alt}
        height="100%"
        width="100%"
    /> ;
    const truncateString = (myString, limit) => {
        const shortened = myString.indexOf(' ', limit);
        if (shortened == -1) return myString;
        return myString.substring(0, shortened);
    }

    return (
        <div className={classes.Card}>
            <div>
                {image}
            </div>
            <div className={classes.CardBody}>
                <h4 className={classes.Title}>{props.title}</h4>
                <p>{truncateString(props.content,100)}</p>
                <a className={classes.Button} href={props.url} target={"_blank"} >Read More</a>
            </div>
        </div>
    )
}

export default Card;
