import React, { Component } from 'react';

// We'll handle the submit event manually 

/*
{
    "abc": "wahwah"
}
*/
class Create extends Component{
    apiURL = process.env.REACT_APP_API_URL;

    state = {
        'id': null,
        'params': '',
        'body': null,
        'response': {}
    }

    requestOptions = {
        method: 'PUT',
        body: ''
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

        this.searchParams = new URLSearchParams(JSON.parse(this.state.params)).toString();
        this.requestOptions.body = this.state.body;
        //fetch(this.apiURL + this.state.id + "?" + this.searchParams, this.requestOptions).then(response => //response.json()).then(data => this.setState({response:data})).then(e => console.log(this.state.response))

        console.log(this.state);
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
                window.confirm("Successfully created an Item!")
            }
        ).catch(error => {
            //setErrorMessage(error);
            this.setState({
                response: {
                    'error': error
                }
            })
            window.confirm('There was an error!', error)
            console.error('There was an error!', error);
        });

        //.then(data => console.log("Data is: " + data));
        console.log("Response was: " + this.state)
    }

    render(){
        return(
            <div className="container">
                <h1 className="center">Create page</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="id">ID:</label>
                    <input type="text" id="id" onChange={this.handleChange}></input>

                    <label htmlFor="params">Params:</label>
                    <input type="text" id="params" onChange={this.handleChange}></input>

                    <label htmlFor="body">Body</label>
                    <textarea className="textArea" id="body" onChange={this.handleChange}></textarea>
                    <br></br>
                    <button >Submit</button>
                </form>
            </div>
        )
    }
}

//const Get = () => {
    
//}

export default Create;