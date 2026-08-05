const API_URL =
  "http://localhost:5000/api/customers";

async function readResponse(response) {
  let result;

  try {
    result = await response.json();
  } catch {
    result = null;
  }

  if (!response.ok) {
    throw new Error(
      result?.message ||
        `Request failed with status ${response.status}`
    );
  }

  return result;
}

export async function fetchCustomers() {
  const response = await fetch(API_URL);

  return readResponse(response);
}

export async function createCustomer(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return readResponse(response);
}

export async function updateCustomer(id, data) {
  if (!id) {
    throw new Error("Customer ID is required.");
  }

  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return readResponse(response);
}