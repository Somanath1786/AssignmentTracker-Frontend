import React from 'react'
import { Route } from 'react-router-dom'

import { connect } from 'react-redux'
import AllStudents from './allUsers';
import NewAssignment from '../assignments/NewAssignment';

class StudentContainer extends React.Component {
    render() {
        return (
            <div>
                <Route path='/users/:userId/assignemnts' exact component= {() => {
                    return(<h2>Placeholder for new assignemnts</h2>)
                }}/>
                <Route path='/users/students' exact component= {() => {
                    return(<AllStudents />)
                }}/>
                <Route path='/users/:userId/assignemnts/new' exact component= {() => {
                    return(<NewAssignment />)
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