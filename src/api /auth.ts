

type User = {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
};

type UserCredentials = {
  email: string;
  password: string;
};

export const createAccount = async (data: User) => {
  const url = 'http://localhost:3003/auth/signin';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const login = async (data: UserCredentials) => {
  const url = 'http://localhost:3003/auth/login';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
