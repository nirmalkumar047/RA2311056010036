import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NotificationList from "./components/NotificationList";
import PriorityList from "./components/PriorityList";
import Filter from "./components/Filter";
import { fetchNotifications } from "./api";
import { mockNotifications } from "./mockNotifications";
import "./App.css";


const TOKEN = import.meta.env.VITE_TOKEN || "";

function normalizeNotificationResponse(res) {
  if (Array.isArray(res)) return res;
  if (res?.notifications && Array.isArray(res.notifications)) return res.notifications;
  if (res?.data && Array.isArray(res.data)) return res.data;
  if (res?.payload && Array.isArray(res.payload)) return res.payload;
  return [];
}

export default function App() {
  const [data, setData] = useState([]);
  const [view, setView] = useState("all");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    if (!TOKEN) {
      setError("Missing VITE_TOKEN in environment. Showing local sample data.");
      setData(mockNotifications.filter(n => !type || n.Type === type || n.type === type));
      setLoading(false);
      return;
    }

    console.debug("App fetching notifications", { type, tokenPresent: !!TOKEN });
    fetchNotifications(TOKEN, 1, 20, type)
      .then(res => {
        console.debug("fetchNotifications response", res);
        const notifications = normalizeNotificationResponse(res);
        if (!Array.isArray(notifications)) {
          console.warn("Unexpected notification response shape", res);
          throw new Error("Unexpected notification response format.");
        }
        setData(notifications);
      })
      .catch(err => {
        console.error("fetchNotifications failed", err);
        const fallbackData = mockNotifications.filter(n => !type || n.Type === type || n.type === type);
        setError("Priority  notifications. Showing  data.");
        setData(fallbackData);
      })
      .finally(() => setLoading(false));
  }, [type]);

  return (
    <div>
      <Navbar setView={setView} />
      <Filter setType={setType} />

      {loading && <p>Loading notifications...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && (
        view === "all" ? (
          <NotificationList data={data} />
        ) : (
          <PriorityList data={data} />
        )
      )}
    </div>
  );
}