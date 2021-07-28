import './App.css';
import React, { Component } from 'react';

import Navbar from './components/navbar';
import Loader from './components/loader';
import Cards from './components/cards';

class App extends Component{
    constructor(){
        super()
        this.state = {
            users : [],
            getUsers : false
        }
        this.onButtonSubmit = this.onButtonSubmit.bind(this);
    }

    onButtonSubmit = () => {
        this.setState({getUsers : !this.getUsers})

        const loadtime = setTimeout(() => {

            fetch('https://reqres.in/api/users?page=1').then(response => {
                return response.json();
            }).then(users => {
                this.setState({users : users.data})
            });
        }, 2000);
        return () => clearTimeout(loadtime);
    }

    render(){
 
        if(this.state.users.length === 0 && this.state.getUsers === false){
            return (
                <div><Navbar onButtonSubmit={this.onButtonSubmit}/>
                    <div className="body">
                      <div>
                        <h4>Hey folks !! This is <a href="https://github.com/Tej-git-212" target="_blank" rel="noreferrer">Tejaswini AVSV</a>...<br/><br/><br/></h4>
                        <h1> Welcome to Zippy <br/> Click the button to <b>get users</b> :)</h1>
                      </div>
                    </div>
                </div>
            );
        }
        else if(this.state.users.length === 0){
            return (
                <div>
                    <Navbar onButtonSubmit={this.onButtonSubmit}/>
                    <div className="body">
                    <Loader/>
                    </div>
                </div>
            );            
        }
        else{
            return(
                <div>
                    <Navbar onButtonSubmit={this.onButtonSubmit} />
                    <div className="body">
                        <Cards users={this.state.users} />
                    </div>                    
                </div>
            )
        }
    }

}

export default App;