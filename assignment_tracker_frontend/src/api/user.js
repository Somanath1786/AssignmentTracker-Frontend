import request from './request'

export const getAllStudents = () => request('/api/user/students')