import React from 'react'

const divStyle = {
    width : '100%'
}

const leftAlign = {
    float : 'left'
}

const rightAlign = {
    float : 'right'
}
const spanStyle= {
    display : 'block',
    width : '100%',
    maxWidth : '100%',
    marginLeft :'5%',
    marginBottom:'5px'
}

const gradeStyle ={
    display : 'block',
    width : '100%',
    maxWidth : '100%',
    marginRight :'15px',
    marginBottom:'5px'
}

const formStyle = {
    maxWidth : '500px',
    marginLeft : '5%',
    marginRight : '5%',
}
const formDivStyle = {
    marginTop : '10px',
    marginBottom : '10px'
}
const fieldSpacing = {
    marginRight : '10px'
}

const inputStyle = {
    borderStyle : 'groove',
    width : '30px',
    maxWidth : '30px',
    marginLeft : '5px',
    marginRight : '5px',
    marginBottom : '5px'
}

const buttonStyle = {
    borderStyle : 'groove',
    marginLeft : '5px',
    marginRight : '5px',
    width : '120px',
    maxWidth : '120px'
}

export default class AdminAssignmentContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            score : '',
            maxScore : ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount()
    {
        if (this.props.fIsGraded)
        {
            this.setState({score : this.props.assignment.score, maxScore : this.props.assignment.maxScore})
        }
    }

    handleChange ({ target : { name, value } }) {
        this.setState({ [name] : value})
    }

    handleSubmit (e) {
        e.preventDefault()
        this.props.updateScore(this.props.assignment.userId, this.props.assignment._id, this.state.score, this.state.maxScore)
    }

    render() {
        const { assignment } = this.props
        return (
            <div style= {divStyle}>
                    <div style={leftAlign}>
                        <p>
                            <span style={spanStyle}>
                                <strong> {assignment.title} </strong> by <strong> {assignment.firstname} {assignment.lastname}</strong>
                        </span>
                        <span style={spanStyle}>
                                {assignment.description}
                        </span>
                        <span style={spanStyle}>
                                {assignment.link}
                        </span>
                        </p>
                    </div>
                    <div style={rightAlign}>
                        <span style= {gradeStyle}>
                            <form onSubmit={this.handleSubmit} style ={formStyle}>
                                <div style={formDivStyle}>
                                        <input
                                            className='form-control'
                                            id='score'
                                            onChange={this.handleChange}
                                            name='score'
                                            type='text'
                                            value={this.state.score}
                                            style = {inputStyle}
                                            required
                                        />
                                    out of
                                        <input
                                            className='form-control'
                                            id='maxScore'
                                            onChange={this.handleChange}
                                            name='maxScore'
                                            type='text'
                                            value={this.state.maxScore}
                                            style = {inputStyle}
                                            required
                                        />
                                    <br/>
                                    <button type='submit' className='btn btn-primary' style ={buttonStyle}>
                                        Save
                                    </button>
                                </div>
                            </form>
                        </span>
                    </div>
                </div>
        )
    }
}