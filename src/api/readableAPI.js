const api = "http://localhost:5001"

// Generate a unique token for storing your readable data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAllCategories = () =>
   fetch(`${api}/categories`, { headers })
     .then(res => res.json())
     .then(data => data.categories)

export function savePost(post){
 return dispatch => {
   return fetch(`${api}/categories`, {
     method: 'post',
     body: JSON.stringify(post),
     headers: {headers}
   }).then(res => res.json())
 }
}
// export const createPost = (post) =>
//    save(`${api}/posts`, { headers })
//      .then(res => res.json())
//      .then(data => data)
