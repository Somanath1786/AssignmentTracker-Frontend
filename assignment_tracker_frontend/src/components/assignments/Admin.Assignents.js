import React from 'react'
import * as users from '../../api/user'
import AdminAssignmentContainer from './AdminAssignmentContainer';

const divStyle = {
    display : 'flex',
    flexdirection : 'colomn',
    marginLeft : '5%',
    marginRight : '5%',
    marginTop : '5px',
    postion : 'relative',
    backgroundColor : 'darkGray'
}

const drawAssignmentList = (assignemnts, fIsGraded, updateScore) => {
    return (
        assignemnts.map(assignment => (
            <div key = {assignment._id} style={divStyle}>
                <AdminAssignmentContainer assignment={assignment} fIsGraded={fIsGraded} updateScore={updateScore}/>
            </div>
        ))
    )
}

export default class AdminAssignments extends React.Component {
    constructor() {
        super()
        this.state = {
            assignemnts : []
        }

        this.updateScore = this.updateScore.bind(this)
    }

    async componentDidMount() {
        const response = await users.getAllAssignments(this.props.fIsGraded)
        this.setState({assignemnts : response.assignments})
    }

    async updateScore(userId, assignmentId, score, maxScore)
    {
        const response = await users.updateScores(userId, assignmentId, score, maxScore)
        window.location.reload();
    }

    render() {
        return (
            drawAssignmentList(this.state.assignemnts , this.props.fIsGraded, this.updateScore)
        )
    }
}