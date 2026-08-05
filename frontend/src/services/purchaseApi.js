const API_URL =
  "http://localhost:5000/api/purchases";

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

export async function fetchPurchases() {
  const response = await fetch(API_URL);

  return readResponse(response);
}

export async function createPurchase(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return readResponse(response);
}