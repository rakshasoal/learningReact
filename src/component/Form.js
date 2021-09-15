import React, { Component } from 'react'

export class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            comments:'',
            topic:'react'
        }
    }
    handleUserNameChange = (event) => {
this.setState({username:event.target.value })
    }

    handleCommentsChange = (event) => {
        this.setState({comments:event.target.value})
    }
    handleTopicChange = (event) => {
        this.setState({topic:event.target.value})
    }

handleSubmit = (event)=>{
   event.preventDefault()
       alert(`${this.state.username} && ${this.state.topic} && ${this.state.comments}`)

}
    render() {
        const {username, topic, comments} = this.state
        return (
            <form onSubmit = {this.handleSubmit}>
            <div>
            <label>USERNAME</label>
            <input type="text" value = {username} onChange = {this.handleUserNameChange}></input>
            <label>COMMENTS</label>
            <textarea value = {comments} onChange= {this.handleCommentsChange} />
                        </div>
                        <div>
                            <label>select topic</label>
                            <select value = {topic} onChange = {this.handleTopicChange}>
                                <option value="react">REACT</option>
                                <option value="angular">ANGULAR</option>
                                <option value="vue">VUE</option>
                            </select>
                        </div>
                        <button type="submit">SUBMIT</button>
                        </form>
        )
    }
}

export default Form
