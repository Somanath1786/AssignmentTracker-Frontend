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

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emailAddress : '',
            password : '',
            firstname : '',
            lastname : ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount()
    {
        this.props.dispatch({type : 'CLEAR_SIGNUP'})
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
                <h2>Signup</h2>
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
                {this.props.emailExists ?
                <div style= {labelStyle}>
                    <label htmlFor='errorMessage'>
                        <ul>
                            <li>A user with this email address already existis. Please use a different email address</li>
                        </ul>
                    </label>
                </div> :
                <div></div>
                }
            </form>
        )
    }
}

const signupFormWithRouter = withRouter(SignupForm)

// Connect the redux store to react
function mapStateToProps(state) {
    return {
        emailExists : state.emailExists
    };
  }

  export default connect(
    mapStateToProps,
    null
  )(signupFormWithRouter);