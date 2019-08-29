import React from 'react'

const formStyle = {
    maxWidth : '500px',
    marginLeft : '5%',
    marginRight : '5%',
}
const divStyle = {
    display : 'flex',
    flexdirection : 'row',
    marginTop : '10px',
    marginBottom : '10px'
}
const fieldSpacing = {
    marginRight : '30px'
}

const inputStyle = {
    borderStyle : 'groove',
    width : '30px',
    maxWidth : '30px'
}

const buttonStyle = {
    borderStyle : 'groove',
}


export default class ScoresFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            minScore : '',
            maxScore : '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange ({ target : { name, value } }) {
        this.setState({ [name] : value})
    }

    handleSubmit (e) {
        e.preventDefault()
        //this.props.onSubmit(this.state)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} style ={formStyle}>
                <div style={divStyle}>
                    <div className='form-group' style={fieldSpacing}>
                        <label htmlFor='maxScore'> <strong>Score is Above : </strong></label>
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
                    </div>
                    <div className='form-group' style ={fieldSpacing}>
                        <label htmlFor='minScore'><strong>Score is Below : </strong></label>
                        <input
                            className='form-control'
                            id='minScore'
                            onChange={this.handleChange}
                            name='minScore'
                            type='text'
                            value={this.state.minScore}
                            style = {inputStyle}
                            required
                        />
                    </div>
                    <button type='submit' className='btn btn-primary' style ={buttonStyle}>
                        Filter
                    </button>
                </div>
            </form>
        )
    }
}