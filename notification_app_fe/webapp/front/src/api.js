const BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

export async function fetchNotifications(token, page = 1, limit = 10, type = "") {
  let url = `${BASE_URL}/notifications?page=${page}&limit=${limit}`;
  if (type) url += `&notification_type=${type}`;

  console.debug("Fetching notifications", { url, hasToken: !!token });
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("API Error", { status: res.status, url, body: errorText });
    throw new Error(`API Error ${res.status}: ${errorText}`);
  }

  return res.json();
}