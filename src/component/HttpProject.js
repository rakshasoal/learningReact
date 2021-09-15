import axios from 'axios'
import React, { Component } from 'react'

 class HttpProject extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              posts:[]
         }
     }
     
     componentDidMount(){
         axios.get('https://jsonplaceholder.typicodae.com/posts')
         .then(response => {
             console.log(response)
             this.setState({posts:response.data})
         })
         .catch(error => {
             console.log(error.message)
         })
     }
    render() {
        const {posts} = this.state
        return (
            <div>
            list of posts  { 
            posts.length?posts.map(post => <div>{post.title}</div>):'NO MOVIES' }
            </div>
        )
    }
}

export default HttpProject
