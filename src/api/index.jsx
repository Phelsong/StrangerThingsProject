const cohortName = "2202-ftb-et-web-ft";
export const ApiURl = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const userME = {}
export async function userMe(myToken) {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/${cohortName}/users/me`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myToken}`,
      },
    }
  );
  const result = await response.json();
  return result;
}






export async function getAllPosts() {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/${cohortName}/posts`
  );
  const data = await response.json();
  return data;
}

export async function registerNewUser(user, password) {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/${cohortName}/users/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${user}`,
          password: `${password}`,
        },
      }),
    }
  );
  const result = await response.json();
  return result;
}

export async function userLogin(user, password) {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/${cohortName}/users/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${user}`,
          password: `${password}`,
        },
      }),
    }
  );
  const result = await response.json();
  return result;
}




export async function createPost(
  myToken,
  title,
  description,
  price,
  location,
deliver
) {

  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/${cohortName}/posts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${myToken}`,
      },
      body: JSON.stringify({
        post: {
          title: `${title}`,
          description: `${description}`,
          price: `${price}`,
          location: `${location}`,
          willDeliver: `${deliver}`,
        },
      }),
    }
  );
  const result = await response.json()
  return result.data.post
}


export async function deletePost(myToken, postId) {
  const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${myToken}`
    }
  })
  const result = await response.json();
  return result.success
}


export async function sendMessage (myToken, postId, message) {
  const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/posts/${postId}/messages`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${myToken}`
    },
    body: JSON.stringify({
      message: {
        content: `${message}`
      }
    })
  })
    const result = await response.json();
    return result
}


export async function editPost (myToken, postId, title,
  description,
  price,
  location,
deliver) {
  const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/posts/${postId}`, {
  method: "PATCH",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${myToken}`
  },
  body: JSON.stringify({
    post: {
      title: `${title}`,
      description: `${description}`,
      price: `${price}`,
      location: `${location}`,
      willDeliver: `${deliver}`,
    }})})
  const result = await response.json();

  return result.data.post;
  }