//When we will press the login button then 3 things will happen ..

//1. login will start 

//2. If user is registered and user credentials are available in Database then. login will success 

//3. if user credentials are not available in database then login will failure ..

// And all the actions are defined in below

export const loginStart = (userCredentials) =>({
    type:"LOGIN_START"
})

export const LoginSuccess = (user)=>({
    type:"LOGIN_SUCCESS",
    payLoad:user
})

export const LoginFailure = () =>({
    type:"LOGIN_FAILURE"

})

export const Logout = () =>({
    type:"LOGOUT"

})

export const UpdateStart = (userCredentials) => ({
    type: "UPDATE_START",
  });
  
  export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user,
  });
  
  export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE",
  });
