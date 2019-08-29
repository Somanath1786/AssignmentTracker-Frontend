import React from 'react'
import { Route } from 'react-router-dom'

import { connect } from 'react-redux'
import AllStudents from './allUsers';
import NewAssignment from '../assignments/NewAssignment';
import StudentAssignments from '../assignments/Student.Assignment';
import EditAssignment from '../assignments/EditAssignment';

class StudentContainer extends React.Component {
    render() {
        return (
            <div>
                <Route path='/users/:userId/assignemnts' exact component= {() => {
                    return(<StudentAssignments />)
                }}/>
                <Route path='/users/students' exact component= {() => {
                    return(<AllStudents />)
                }}/>
                <Route path='/users/:userId/assignemnts/new' exact render= {(props) => {
                    return(<NewAssignment {...props}/>)
                }}/>
                <Route path='/users/:userId/assignemnts/:assignmentId/edit' exact render= {(props) => {
                    return(<EditAssignment {...props}/>)
                }}/>
            </div>
        )
    }
}

// Connect the redux store to react
function mapStateToProps(state) {
    return {
      currentUserId : state.currentUserId
    };
}

export default connect(
mapStateToProps,
null
)(StudentContainer);