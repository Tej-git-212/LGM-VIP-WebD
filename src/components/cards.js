import React, { Component } from 'react'
import './cards.css'

class Card extends Component {
    // eslint-disable-next-line
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div id="card" className="cardsdiv">
                <img src={this.props.imgsrc} id="img" alt="user-avatar" />
                <div >
                    <h3> {this.props.fname}  {this.props.lname}</h3> <br/>
                    <h4> {this.props.email} </h4> <br/>
                </div>
            </div>
        )
    }
}

const Cards = ({users})=> {
    return (
        <div className="cardsbox">
            {
                users.map((user, i) => {
                    return(
                        <Card key={i} id={users[i].id} fname={users[i].first_name} lname={users[i].last_name} email={users[i].email} imgsrc={users[i].avatar}/>
                    );
                })
            }
        </div>
    )
}

export default Cards;