import axios from 'axios';
import React, { Component } from 'react';

class CallUrls extends Component {

    constructor(props, context) 
    {
        super(props);
        this.state = {
            getResponse:'Kshitij Solanki'
        }
    }

    callGetUrl = () => {        
        axios.get('https://localhost:8080/ssl/test-get', {
          })
          .then(function (response) {
            alert(response.data);        
          })
    }

    callPostUrl = () => {
        const json = JSON.stringify({'id': 42, 'name':'Kshitij', 'email':'ks@ks.com'});
        axios.post('https://localhost:8080/ssl/test-post', json, 
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            alert(response.data);        
        });
    }

    render() {
        let temp = this.state.getResponse;
        return (
            <div>
                <h4>{temp}</h4>
                <input type="button" value="GetCall" onClick={this.callGetUrl}/>
                <input type="button" value="PostCall" onClick={this.callPostUrl}/>
            </div>
        );            
    }
}

export default CallUrls;

