import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'


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

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emailAddress : '',
            password : '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange ({ target : { name, value } }) {
        this.setState({ [name] : value})
    }

    handleSubmit (e) {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} style ={formStyle}>
                <h2>Login</h2>
                <div style={divStyle}>
                    <div className='form-group' style={fieldSpacing}>
                        <label htmlFor='emailAddress'>Email Address</label>
                        <br/>
                        <input
                            className='form-control'
                            id='emailAddress'
                            onChange={this.handleChange}
                            name='emailAddress'
                            type='text'
                            value={this.state.emailAddress}
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
                <button type='submit' className='btn btn-primary' style ={inputStyle}>
                    Submit
                </button>
                {this.props.invalidCreds ?
                <div style= {labelStyle}>
                    <lable htmlFor='errorMessage'>
                        <ul>
                            <li>Invalid login credentials. Please check your email and password and try again!</li>
                        </ul>
                    </lable>
                </div> :
                <div></div>
                }
            </form>
        )
    }
}

const loginFormWithRouter = withRouter(LoginForm)

// Connect the redux store to react
function mapStateToProps(state) {
    return {
      invalidCreds : state.invalidCreds
    };
  }

  export default connect(
    mapStateToProps,
    null
  )(loginFormWithRouter);