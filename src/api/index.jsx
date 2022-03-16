const cohortName = "2202-ftb-et-web-ft";
export const ApiURl = `https://strangers-things.herokuapp.com/api/${cohortName}`;

export async function getAllPosts () {
  const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/posts`)
    const data = await response.json()
    return data;
} 

export async function registerNewUser (user, password) {
const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/users/register`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
body: JSON.stringify({
  user: {
    username: `${user}`,
    password: `${password}`
  }})
})
const result = await response.json() 
return result 
}

export async function userLogin (user, password) {
 
const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/users/login`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
   
  },
body: JSON.stringify({
  user: {
    username: `${user}`,
    password: `${password}`
  }})
})
const result = await response.json() 
return result 
}



export async function userMe (MyToken) {
  
const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/users/me`, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${MyToken}`
},})
result = await response.json()
}
