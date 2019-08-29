import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import AllStudents from './allUsers';
import AdminAssignments from '../assignments/Admin.Assignents'

class AdminContainer extends React.Component {
    render() {
        return (
            <div>
                <Route path='/users/students' exact component= {() => {
                    return(<AllStudents />)
                }}/>
                <Route path='/users/admin/graded' exact component= {() => {
                    return(<AdminAssignments fIsGraded={true} />)
                }}/>
                <Route path='/users/admin/ungraded' exact component= {() => {
                    return(<AdminAssignments fIsGraded={false} />)
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
)(AdminContainer);