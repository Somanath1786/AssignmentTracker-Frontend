import React from 'react'

const formStyle = {
    maxWidth : '600px',
    marginLeft : '5%',
    marginRight : '5%',
}

const outerDivStyle = {
    display : 'flex',
    flexdirection : 'row',
    flexWrap : 'wrap'
}

const fieldSpacing = {
    marginRight : '30px'
}
const inputStyle = {
    borderStyle : 'groove',
    width : '250px',
    maxWidth : '250px',
    height : '20px',
    maxHeight : '20px'
}

const input2Style = {
    borderStyle : 'groove',
    width : '250px',
    maxWidth : '250px',
    height : '90px',
    maxHeight : '90px'
}

const buttonStyle = {
    borderStyle :'groove'
}

export default class EditAssignment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title : '',
            link : '',
            description : ''
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

    componentDidMount()
    {
        console.log('Helooooooooooooo')
        console.log(this.props.match.params.userId, this.props.match.params.assignmentId)
    }

    render() {
        return (
           <form style={formStyle}>
               <h2> Edit Assignment </h2>
               <div style={outerDivStyle}>
                    <div>
                        <div className='form-group' style={fieldSpacing}>
                            <label htmlFor='assignment title'>Assignment Title</label>
                            <br/>
                            <input
                                className='form-control'
                                id='title'
                                onChange={this.handleChange}
                                name='title'
                                type='text'
                                value={this.state.title}
                                style = {inputStyle}
                                required
                            />
                        </div>
                        <br />
                        <div className='form-group' style ={fieldSpacing}>
                            <label htmlFor='link'>Project Link</label>
                            <br/>
                            <input
                                className='form-control'
                                id='link'
                                onChange={this.handleChange}
                                name='link'
                                type='text'
                                value={this.state.link}
                                style = {inputStyle}
                                required
                            />
                        </div>
                    </div>
                    <div className='form-group' style ={fieldSpacing}>
                            <label htmlFor='link'>Project Description</label>
                            <br/>
                            <input
                                className='form-control'
                                id='description'
                                onChange={this.handleChange}
                                name='description'
                                type='text'
                                value={this.state.description}
                                style = {input2Style}
                                required
                            />
                        </div>
               </div>
               <br />
               <button type='submit' className='btn btn-primary' style ={buttonStyle}>
                    Submit
                </button>
           </form>
        )
    }
}