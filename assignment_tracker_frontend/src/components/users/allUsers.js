import React from 'react'

// Helpers
import * as users from '../../api/user'

const divStyle = {
    display : 'flex',
    flexdirection : 'colomn',
    marginLeft : '5%',
    marginRight : '5%',
    marginTop : '5px',
    postion : 'relative',
    backgroundColor : 'darkGray'
}

const listItemStyle = {
    paddingLeft : '10px'
}

const drawStudentsList = (students) => {
    return (
        students.map(student => (
            <div key={student._id} style={divStyle}>
                <p style ={listItemStyle}>
                    <strong>{`${student.firstname} ${student.lastname}`} </strong> - {`${student.emailAddress}`}
                </p>
            </div>
        ))
    )
}

export default class AllStudents extends React.Component {
    constructor() {
        super ()
        this.state ={
            students : '',
            loading : true
        }
    }

    async componentDidMount()
    {
        const allStudents = await users.getAllStudents()
        this.setState({students : allStudents.students, loading: false})
    }

    render() {
        if (this.state.loading) {
            return (
                <p>Loading ...</p>
            )
        }
        return(
            <>
            {drawStudentsList(this.state.students)}
            </>
        )

    }
}