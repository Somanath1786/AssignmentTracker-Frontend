import React from 'react'

// Helpers
import * as users from '../../api/user'
// Redux and store
import { connect } from 'react-redux'
import ScoresFilter from '../assignments/ScoresFilter';

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

const leftAlign = {
    float : 'left'
}

const rightAlign = {
    float : 'right'
}

const drawStudentsList = (students, isAdmin) => {
    return (
        students.map(student => (
            <div key={student._id} style={divStyle}>
                <p style ={listItemStyle}>
                    <span style={leftAlign}>
                    <strong>{`${student.firstname} ${student.lastname}`} </strong> - {`${student.emailAddress}`}
                    </span>

                    {isAdmin &&  <span style={rightAlign}>{`${student.score}/${student.maxScore}`} </span>}

                </p>
            </div>
        ))
    )
}

class AllStudents extends React.Component {
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
            {this.props.isAdmin &&
                <ScoresFilter />
            }
            {drawStudentsList(this.state.students, this.props.isAdmin)}
            </>
        )

    }
}

// Connect the redux store to react
function mapStateToProps(state) {
    return {
      currentUserId : state.currentUserId,
      isAdmin : state.isAdmin
    };
  }

  export default connect(
    mapStateToProps,
    null
  )(AllStudents);