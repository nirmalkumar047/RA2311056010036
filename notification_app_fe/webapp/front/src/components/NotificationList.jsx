export default function NotificationList({ data }) {
  return (
    <div>
      {data.map(n => (
        <div key={n.ID} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h4>{n.Message}</h4>
          <p>Type: {n.Type}</p>
          <p>{n.Timestamp}</p>
        </div>
      ))}
    </div>
  );
}