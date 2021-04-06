import React, { Component } from 'react';

class Item extends Component{
    render(){
        const p = this.props.apiResponse;
        //console.log(`Props are : ${p}`)
        return(
            <div>
                <textarea id="responseField" value={p} readOnly disabled className="textArea">
                </textarea>
            </div>
        )
    }
}

// We'll handle the submit event manually 
class Get extends Component{
    apiURL = process.env.REACT_APP_API_URL

    state = {
        'id': null,
        'params': '',
        'response': {}
    }

    requestOptions = {
        method: 'GET'
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        // Do submit inside 
        e.preventDefault();
        //console.log(this.state);

        if(this.state.params){
            this.searchParams = new URLSearchParams(JSON.parse(this.state.params)).toString();
        }
        else{
            this.searchParams = this.state.params
        }

        //fetch(this.apiURL + this.state.id + "?" + this.searchParams, this.requestOptions).then(response => //response.json()).then(data => this.setState({response:data})).then(e => console.log(this.state.response))

        fetch(this.apiURL + this.state.id + "?" + this.searchParams, this.requestOptions).then(
            async response => {
                const data = await response.json();

                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    this.setState({
                        response: {
                            'error': error
                        }
                    });
                    return Promise.reject(error);
                }
                this.setState({response:data});
            }
        ).catch(error => {
            //setErrorMessage(error);
            this.setState({
                response: {
                    'error': error
                }
            })
            console.error('There was an error!', error);
        });

        //.then(data => console.log("Data is: " + data));
        console.log("Response was: " + this.state)
    }

    render(){
        return(
            <div className="container">
                <h1 className="center">GET page</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="id">ID:</label>
                    <input type="text" id="id" onChange={this.handleChange}></input>

                    <label htmlFor="params">Params:</label>
                    <input type="text" id="params" onChange={this.handleChange}></input>
                    <br></br>
                    <button >Submit</button>
                </form>
                <br></br>
                
                <Item apiResponse={JSON.stringify(this.state.response, null, 3)} />
            </div>
        )
    }
}

//const Get = () => {
    
//}

export default Get;