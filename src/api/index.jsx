const cohortName = "2202-ftb-et-web-ft";
export const ApiURl = `https://strangers-things.herokuapp.com/api/${cohortName}`;

export async function fetchQueryResultsFromURL() {
  try {
    const response = await fetch(ApiURl);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser (user, password) {
  console.log(user, password, 'user')
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
console.log(result)
return result 



}

