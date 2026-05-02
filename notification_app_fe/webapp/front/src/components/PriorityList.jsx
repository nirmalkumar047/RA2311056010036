import { getTopNotifications } from "../utils/priority";

export default function PriorityList({ data }) {
  const top = getTopNotifications(data, 10);

  return (
    <div>
      {top.map(n => (
        <div key={n.ID} style={{ border: "2px solid green", margin: "10px", padding: "10px" }}>
          <h4>{n.Message}</h4>
          <p>Type: {n.Type}</p>
          <p>{n.Timestamp}</p>
        </div>
      ))}
    </div>
  );
}