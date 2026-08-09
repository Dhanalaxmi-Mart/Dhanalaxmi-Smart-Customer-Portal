const API_URL =
  "http://localhost:5000/api/customers";

function getAuthHeaders(includeJson = false) {
  const token = localStorage.getItem(
    "dsrp-auth-token"
  );

  const headers = {};

  if (includeJson) {
    headers["Content-Type"] =
      "application/json";
  }

  if (token) {
    headers.Authorization =
      `Bearer ${token}`;
  }

  return headers;
}

async function readResponse(response) {
  let result;

  try {
    result = await response.json();
  } catch {
    result = null;
  }

  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem(
        "dsrp-auth-token"
      );
      localStorage.removeItem(
        "dsrp-auth-user"
      );
    }

    throw new Error(
      result?.message ||
        `Request failed with status ${response.status}`
    );
  }

  return result;
}

export async function fetchCustomers() {
  const response = await fetch(API_URL, {
    headers: getAuthHeaders(),
  });

  return readResponse(response);
}

export async function createCustomer(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: getAuthHeaders(true),
    body: JSON.stringify(data),
  });

  return readResponse(response);
}

export async function updateCustomer(id, data) {
  if (!id) {
    throw new Error(
      "Customer ID is required."
    );
  }

  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "PUT",
      headers: getAuthHeaders(true),
      body: JSON.stringify(data),
    }
  );

  return readResponse(response);
}