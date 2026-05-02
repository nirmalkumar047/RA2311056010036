const BASE_URL = "http://20.207.122.201/evaluation-service";

export async function fetchNotifications(token, page = 1, limit = 10, type = "") {
  let url = `${BASE_URL}/notifications?page=${page}&limit=${limit}`;
  if (type) url += `&notification_type=${type}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  if (!res.ok) {
    console.error("Status:", res.status);
    throw new Error("API Error");
  }

  return res.json();
}