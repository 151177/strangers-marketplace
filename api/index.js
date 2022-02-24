const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2110-FTB-PT-WEB-PT";

export const fetchPosts = async (token) => {
  try {
    let response;
    if (token) {
      response = await fetch(`${BASE_URL}/posts`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      response = await fetch(`${BASE_URL}/posts`);
    }
    const {
      data: { posts },
    } = await response.json();
    return posts;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    console.log(response);
    const {
      data: { token },
    } = await response.json();
    return token;
  } catch (error) {
    console.error(error);
  }
};

export const register = async (username, password) => {
  const response = await fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const {
    data: { token },
  } = await response.json();
  return token;
};

export const getUser = async (token) => {
  const response = await fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const { data: userObject } = await response.json();
  return userObject;
};

export const newPostData = async (
  token,
  title,
  description,
  price,
  location,
  username,
  willDeliver
) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          location,
          username,
          willDeliver,
        },
      }),
    });
    console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const handleDelete = async (token, _id) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const { success } = await response.json();
    return success;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMessage = async (token, content, _id) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${_id}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content,
        },
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
