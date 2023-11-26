const API_URl = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export const registerUser = async (userObj) => {
  try {
    const response = await fetch(`${API_URl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: userObj.firstName,
        lastname: userObj.lastName,
        email: userObj.email,
        password: userObj.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    return json.token;
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (userObj) => {
  try {
    const response = await fetch(`${API_URl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userObj.email,
        password: userObj.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    return json.token;
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (token) => {
  try {
    const response = await fetch(`${API_URl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
};
