import React from 'react'
import { withRouter } from 'react-router'

const formStyle = {
    maxWidth : '500px',
    marginLeft : '5%',
    marginRight : '5%',
}
const divStyle = {
    display : 'flex',
    flexdirection : 'row',
}
const fieldSpacing = {
    marginRight : '30px'
}

const labelStyle = {
    backgroundColor : 'red'
}
const inputStyle = {
    borderStyle : 'groove'
}

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username : '',
            password : '',
            firstname : '',
            lastname : ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange ({ target : { name, value } }) {
        this.setState({ [name] : value})
    }

    handleSubmit (e) {
        e.preventDefault()
        // Dispatch an action here
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} style ={formStyle}>
                <h2>Login</h2>
                <div style={divStyle}>
                    <div className='form-group' style={fieldSpacing}>
                        <label htmlFor='username'>Email Address</label>
                        <br/>
                        <input
                            className='form-control'
                            id='username'
                            onChange={this.handleChange}
                            name='username'
                            type='text'
                            value={this.state.username}
                            style = {inputStyle}
                            required
                        />
                    </div>
                    <div className='form-group' style ={fieldSpacing}>
                        <label htmlFor='password'>Password</label>
                        <br/>
                        <input
                            className='form-control'
                            id='password'
                            onChange={this.handleChange}
                            name='password'
                            type='password'
                            value={this.state.password}
                            style = {inputStyle}
                            required
                        />
                    </div>
                </div>
                <br />
                <div style={divStyle}>
                    <div className='form-group' style={fieldSpacing}>
                        <label htmlFor='firstname'>First Name</label>
                        <br/>
                        <input
                            className='form-control'
                            id='firstname'
                            onChange={this.handleChange}
                            name='firstname'
                            type='text'
                            value={this.state.firstname}
                            style = {inputStyle}
                            required
                        />
                    </div>
                    <div className='form-group' style ={fieldSpacing}>
                        <label htmlFor='lastname'>Last Name</label>
                        <br/>
                        <input
                            className='form-control'
                            id='lastname'
                            onChange={this.handleChange}
                            name='lastname'
                            type='text'
                            value={this.state.lastname}
                            style = {inputStyle}
                            required
                        />
                    </div>
                </div>
                <br />
                <button type='submit' className='btn btn-primary' style ={inputStyle}>
                    Submit
                </button>
                {/* Add a conditional here once the state is hooked up via redux store, to show errors based on state */}
                {
                <div style= {labelStyle}>
                    <lable htmlFor='errorMessage'>
                        <ul>
                            <li>Invalid login credentials. Please check your email and password and try again!</li>
                        </ul>
                    </lable>
                </div>
                }
            </form>
        )
    }
}

export default withRouter(SignupForm)