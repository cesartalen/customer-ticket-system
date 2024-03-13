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
      userState.UpdateId(response.data.id)
      userState.UpdateStatus(true)
    }
  }).catch(function (error) {
    // Handle errors, present to user correctly..
    console.error(error)
  })
}

export const registerUser = async (formValues: CreateUserType) => {
  try {
    const response = await axios.post(USER_REGISTER_API, {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
    });
    if(response.status === 201) {
      return response.data.status;
    }
  } catch (error : any) {
    if(error.response.status !== null) {
      return error.response.status
    } else {
      console.error(error)
    }
  }
  return null; 
}

export const getToken = (userState: { token: any }) => {
  try {
    return userState.token
  } catch {
    return false
  }
}