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
const buttonStyle= {
    marginTop:'5px',
    marginLeft : '5%',
    marginRight : '5%'
}

const gradeStyle ={
    display : 'block',
    width : '100%',
    maxWidth : '100%',
    marginRight :'15px',
    marginBottom:'5px'
}

const displayGrade =(assignment) => {
    if (assignment.score === -1 && assignment.maxScore === -1)
    {
        return('Grade TBD')
    }

    if (assignment.score >= 0 && assignment.maxScore >= 0)
    {
        return (`${assignment.score}/${assignment.maxScore}`)
    }
}

export default class AssignmentContainer extends React.Component{
    render() {
        const {assignment, deleteAssignment, editAssignment} = this.props
        return(
            <div style={divStyle}>
                <div style={leftAlign}>
                    <p>
                        <span style={spanStyle}>
                            <strong> {assignment.title} </strong>
                    </span>
                    <span style={spanStyle}>
                            {assignment.description}
                    </span>
                    <span style={spanStyle}>
                            {assignment.link}
                    </span>
                    <button style={buttonStyle} onClick={()=>editAssignment(assignment._id)}>Edit</button>
                    <button style={buttonStyle} onClick={()=>deleteAssignment(assignment._id, assignment.title)}>Delete</button>
                    </p>
                </div>
                <div style={rightAlign}>
                    <p>
                        <span style= {gradeStyle}>
                            {displayGrade(assignment)}
                        </span>
                    </p>
                </div>
            </div>
        )
    }
}