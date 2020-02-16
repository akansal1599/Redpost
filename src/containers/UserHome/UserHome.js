import React, {Component} from 'react';
import axios from "axios";

import Aux from '../../hoc/Aux/Aux';
import UserInput from "../../components/UserInput/UserInput";
import Cards from "../../components/Cards/Cards";
import classes from "./UserHome.module.css"

class UserHome extends Component {
    state = {
        userName: "happy",
        posts: [
            {  data: {
                    title: "apple1",
                    selftext: "an apple a day keeps the doctor away",
                    thumbnail: "",
                    link_flair_text: "apple",
                    key: "apple1"
                }

            }

        ]
    };

    // componentDidMount() {
    //     this.fetchData(this.state.username);
    // }

    fetchData = () => {
        // event.preventDefault();
        let str = "http://www.reddit.com/search.json?q=" + this.state.userName + "&sort=relevance&limit=20";
        axios.get(str)
            .then(response => {
            this.setState({posts:response.data.data.children})
            console.log(this.state.posts);
        });
    };

    userNameChangeHandler = (event) => {
        // console.log(this.state.userName);
        this.setState({userName:event.target.value});
    };

    render() {
        return(
            <Aux>
                <div className={classes.Input}>
                    <UserInput changed={this.userNameChangeHandler} currentName={this.state.userName}/>
                    <button onClick={this.fetchData}>Search</button>
                </div>
                <Cards posts={this.state.posts}/>
            </Aux>
        )
    }
}

export default UserHome;
