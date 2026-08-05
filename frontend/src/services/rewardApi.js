const API_URL =
  "http://localhost:5000/api/rewards";

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

export async function fetchRewards() {
  const response = await fetch(API_URL);

  return readResponse(response);
}

export async function redeemReward(data) {
  const response = await fetch(
    `${API_URL}/redeem`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return readResponse(response);
}