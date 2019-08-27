import request from './request'

export const getAllStudents = () => request('/api/user/students')

export const getAllAssignmentsForCurrentStudent = (userId) => request(`/api/user/${userId}/assignments`)