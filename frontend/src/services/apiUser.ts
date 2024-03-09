import axios from 'axios'
import { USER_LOGIN_API } from '../statics/apiUrls'
import { LoginUserType } from '../types/userType'

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

export const getToken = () => {
  const token = localStorage.getItem("token")
  return token
}