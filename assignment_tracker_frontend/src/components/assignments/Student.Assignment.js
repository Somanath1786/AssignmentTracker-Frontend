import React from 'react'
import {connect } from 'react-redux'
import { Route , Redirect} from 'react-router-dom'
// Helpers
import * as users from '../../api/user'
import AssignmentContainer from './AssignmentContainer';
import EditAssignment from './EditAssignment';

const divStyle = {
    display : 'flex',
    flexdirection : 'colomn',
    marginLeft : '5%',
    marginRight : '5%',
    marginTop : '5px',
    postion : 'relative',
    backgroundColor : 'darkGray'
}

const labelStyle = {
    marginLeft : '5%',
    marginRight : '5%',
    backgroundColor : 'red'
}

const drawAssignmentList = (assignments, deleteAssignment, editAssignment) => {
    return(
        assignments.map(assignment => (
            <div key={assignment._id} style={divStyle}>
                <AssignmentContainer assignment={assignment} deleteAssignment={deleteAssignment} editAssignment={editAssignment}/>
            </div>
        ))
    )
}

class StudentAssignments extends React.Component {
    constructor() {
        super()
        this.state ={
            assignments : '',
            loading : true,
            deleted : false,
            deletedAssignment : '',
            edit : false,
            assignmentToEdit : ''
        }

        this.deleteAssignment = this.deleteAssignment.bind(this)
        this.editAssignment = this.editAssignment.bind(this)
    }

    async componentDidMount()
    {
        const response = await users.getAllAssignmentsForCurrentStudent(this.props.currentUserId)
        this.setState({ assignments : response.allAssignments.assignments,
                        loading: false,
                        deleted: false,
                        deleteAssignment:'',
                        edit : false,
                        assignmentToEdit: ''})
    }

    async deleteAssignment(assignmentId, assignmentName) {

        const newAssignmentsList = this.state.assignments.filter((assignment)=> {
            return assignment._id !== assignmentId
        })

        // TODO: Make the api call to the server to remove the assignment
        this.setState({assignments : newAssignmentsList, deleted : true, deletedAssignment : assignmentName })
    }

    async editAssignment(assignmentId) {
        const assignment = this.state.assignments.filter((assignment) => {
            return assignment._id === assignmentId
        })
        console.log(assignment)
        if (assignment.length > 0)
        {
            this.setState({edit: true, assignmentToEdit : assignment[0]})
        }
    }

    render ()
    {
        if (this.state.loading) {
            return (
                <p>Loading ...</p>
            )
        }
        return (
            <>
                {this.state.deleted ?
                <div style= {labelStyle}>
                    <label htmlFor='errorMessage'>
                    <ul>
                            <li>{`Deleted ${this.state.deletedAssignment}`}</li>
                        </ul>
                    </label>
                </div> :
                <div></div>}
                {drawAssignmentList(this.state.assignments, this.deleteAssignment, this.editAssignment)}
                {this.state.edit ? <Redirect to={`/users/${this.props.currentUserId}/assignemnts/${this.state.assignmentToEdit._id}/edit`}/> : <div></div>}
            </>
        )
    }
}

// Connect the redux store to react
function mapStateToProps(state) {
    return {
      currentUserId : state.currentUserId,
    };
  }

  export default connect(
    mapStateToProps,
    null
  )(StudentAssignments);
