import React, { Component } from 'react'
import axios from 'axios'

export class Test extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},
            qty: 0,
            title: this.props.title,
            users: []
        }
    }

    handleIncrement = () => {
        this.setState({qty: this.state.qty + 1})
    }

    handleInput = (e) => {
        this.setState({user: {...this.state.user, [e.target.name]: e.target.value}})
    }

    componentDidMount() {
        console.log('test test')
        const fetchUser = async () => {
            const { data: respData } = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(respData)
            this.setState({users: respData })
        }

        fetchUser()
    }
    
    componentDidUpdate() {
        // console.log('did update running...')
        // console.log(this.state.users)
        console.log(this.state.user)
    }

    render() {
        return (
            <div>
                <ul>
                    {(this.state.users).map((user, idx) => {
                        return (
                            <li key={idx}>{user.name}</li>
                        )
                    })}
                </ul>
                <h1>{this.state.qty}</h1>
                <input type="text" name='name' placeholder='masukan nama' onChange={this.handleInput} />
                <input type="text" name='email' placeholder='masukan email' onChange={this.handleInput} />
                {/* <h3>{this.state.u}</h3>   */}
                <button onClick={this.handleIncrement}>Increment by 1</button>
            </div>
        )
    }
}

export default Test