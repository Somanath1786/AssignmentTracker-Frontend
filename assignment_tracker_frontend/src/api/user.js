import request from './request'
import * as token from '../helpers/local-storage'

const { REACT_APP_API_DOMAIN } = process.env
const BASE_URL = REACT_APP_API_DOMAIN

export const deleteAssignment = async(userId, assignmentId) => {
    const response = await fetch(`${BASE_URL}/api/user/${userId}/assignments/${assignmentId}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token.getToken()}`
          },
          method: 'DELETE'
        })
        const json = await response.json()
        return json
}

export const editAssignment = async(userId, assignmentId, title, link, description) => {
  const response = await fetch(`${BASE_URL}/api/user/${userId}/assignments/${assignmentId}`, {
      body : JSON.stringify({title: title, link: link, description : description}),
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.getToken()}`
        },
        method: 'PATCH'
      })
      const json = await response.json()
      return json
}

export const newAssignment = async(userId, title, link, description) => {
  const response = await fetch(`${BASE_URL}/api/user/${userId}/assignments/new`, {
      body : JSON.stringify({title: title, link: link, description : description}),
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.getToken()}`
        },
        method: 'PATCH'
      })
      const json = await response.json()
      return json
}

export const updateScores = async(userId, assignmentId, score, maxScore) => {
  const response = await fetch(`${BASE_URL}/api/user/admin/assignments/${assignmentId}`, {
    body : JSON.stringify({userId : userId, score : score, maxScore : maxScore}),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.getToken()}`
    },
    method: 'PATCH'
  })
  const json = await response.json()
  return json
}

export const getAllStudents = () => request('/api/user/students')

export const getFilteredStudentsList =(minScore, maxScore) => request(`/api/user/students?minScore=${minScore}&&maxScore=${maxScore}`)

export const getAllAssignmentsForCurrentStudent = (userId) => request(`/api/user/${userId}/assignments`)

export const getAssignment = (userId, assignmentId) => request(`/api/user/${userId}/assignments/${assignmentId}`)

export const getAllAssignments = (fIsGraded) => request(`/api/user/admin/assignments?graded=${fIsGraded}`)
