const API_URL =
  "http://localhost:5000/api/backups";

function getAuthHeaders() {
  const token = localStorage.getItem(
    "dsrp-auth-token"
  );

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

async function handleResponse(response) {
  let data;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (response.status === 401) {
    localStorage.removeItem(
      "dsrp-auth-token"
    );

    localStorage.removeItem(
      "dsrp-auth-user"
    );

    window.location.href = "/login";

    throw new Error("Session expired");
  }

  if (!response.ok) {
    throw new Error(
      data?.message ||
        `Request failed with status ${response.status}`
    );
  }

  return data;
}

export async function fetchBackups() {
  const response = await fetch(
    API_URL,
    {
      method: "GET",
      headers: getAuthHeaders(),
    }
  );

  return handleResponse(response);
}

export async function createBackup() {
  const response = await fetch(
    API_URL,
    {
      method: "POST",
      headers: getAuthHeaders(),
    }
  );

  return handleResponse(response);
}
export async function downloadBackup(fileName) {
  const token = localStorage.getItem(
    "dsrp-auth-token"
  );

  const response = await fetch(
    `http://localhost:5000/api/backups/${encodeURIComponent(
      fileName
    )}/download`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    let result = null;

    try {
      result = await response.json();
    } catch {
      result = null;
    }

    throw new Error(
      result?.message ||
        "Unable to download backup."
    );
  }

  const blob = await response.blob();

  const url =
    window.URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;
  link.download = fileName;

  document.body.appendChild(link);
  link.click();
  link.remove();

  window.URL.revokeObjectURL(url);
}
export async function deleteBackup(fileName) {
  const response = await fetch(
    `${API_URL}/${encodeURIComponent(fileName)}`,
    {
      method: "DELETE",
      headers: getAuthHeaders(),
    }
  );

  return handleResponse(response);
}
