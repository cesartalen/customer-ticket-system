import axios from 'axios'
import { USER_LOGIN_API, USER_REGISTER_API } from '../statics/apiUrls'
import { CreateUserType, LoginUserType } from '../types/userType'

export const loginUser = (formValues: LoginUserType, userState: any) => {  
  axios.post(USER_LOGIN_API, {
    name: formValues.name,
    password: formValues.password,
  }).then(function (response) {
    if(response.status === 200) {
      userState.UpdateName(response.data.name)
      userState.UpdateToken(response.data.token)
      userState.UpdateStatus(true)
    }
  }).catch(function (error) {
    // Handle errors, present to user correctly..
    console.log(error)
  })
}

export const registerUser = (formValues: CreateUserType, userState: any) => {  
  axios.post(USER_REGISTER_API, {
    name: formValues.name,
    email: formValues.email,
    password: formValues.password,
  }).then(function (response) {
    if(response.status === 201) {
      return response.data.status
    }
  }).catch(function (error) {
    // Handle errors, present to user correctly..
    console.log(error)
  })
}

export const getToken = () => {
  const token = localStorage.getItem("token")
  return token
}