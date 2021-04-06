import React, { Component } from 'react';


class ItemList extends Component{
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

class List extends Component{
    apiURL = process.env.REACT_APP_API_URL

    state = {
        'id': null,
        'params': null,
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

        this.searchParams = new URLSearchParams(JSON.parse(this.state.params)).toString();

        //fetch(this.apiURL + this.state.id + "?" + this.searchParams, this.requestOptions).then(response => //response.json()).then(data => this.setState({response:data})).then(e => console.log(this.state.response))

        fetch(this.apiURL + 'all', this.requestOptions).then(
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
                <h1 className="center">List page</h1>
                <form onSubmit={this.handleSubmit}>
                    <button className="centre">Submit</button>
                </form>
                <br></br>
                
                <ItemList apiResponse={JSON.stringify(this.state.response, null, 3)} />
            </div>
        )
    }
}

export default List;