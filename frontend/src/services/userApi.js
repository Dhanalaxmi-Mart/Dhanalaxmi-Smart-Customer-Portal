const API_URL = "http://localhost:5000/api/users";

function getAuthHeaders() {
  const token = localStorage.getItem("dsrp-auth-token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

async function handleResponse(response) {
  if (response.status === 401) {
    localStorage.removeItem("dsrp-auth-token");
    localStorage.removeItem("dsrp-auth-user");

    window.location.href = "/login";

    throw new Error("Session expired");
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Request failed"
    );
  }

  return data;
}

export async function getUsers() {
  const response = await fetch(API_URL, {
    headers: getAuthHeaders(),
  });

  return handleResponse(response);
}

export async function createUser(userData) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(userData),
  });

  return handleResponse(response);
}

export async function updateUser(
  id,
  userData
) {
  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(userData),
    }
  );

  return handleResponse(response);
}

export async function resetPassword(
  id,
  password
) {
  const response = await fetch(
    `${API_URL}/${id}/password`,
    {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({
        password,
      }),
    }
  );

  return handleResponse(response);
}