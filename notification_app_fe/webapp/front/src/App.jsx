import { useEffect, useState } from "react";
import Navbar from "../../../webapp/front/src/components/Navbar";
import NotificationList from "../../../webapp/front/src/components/NotificationList";
import PriorityList from "../../../webapp/front/src/components/PriorityList";
import Filter from "../../../webapp/front/src/components/Filter";
import { fetchNotifications } from "../../../webapp/front/src/api";

const TOKEN =  import.meta.env.VITE_TOKEN;
export default function App() {
  const [data, setData] = useState([]);
  const [view, setView] = useState("all");
  const [type, setType] = useState("");

  useEffect(() => {
    fetchNotifications(TOKEN, 1, 20, type).then(res => {
      setData(res.notifications || []);
    });
  }, [type]);

  return (
    <div>
      <Navbar setView={setView} />
      <Filter setType={setType} />

      {view === "all" ? (
        <NotificationList data={data} />
      ) : (
        <PriorityList data={data} />
      )}
    </div>
  );
}