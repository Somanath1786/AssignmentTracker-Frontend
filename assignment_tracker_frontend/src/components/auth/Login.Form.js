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
            username : '',
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
                <button type='submit' className='btn btn-primary' style ={inputStyle}>
                    Submit
                </button>
                {/* Add a conditional here once the state is hooked up via redux store, to show errors based on state */}
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