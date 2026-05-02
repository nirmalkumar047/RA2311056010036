function getField(notification, field) {
  return notification[field] ?? notification[field.toLowerCase()] ?? notification[field.charAt(0).toLowerCase() + field.slice(1)];
}

function NotificationList({ data }) {
  if (!data || data.length === 0) {
    return <p>No notifications found.</p>;
  }

  return (
    <div>
      {data.map(n => (
        <div key={getField(n, "ID") || getField(n, "id") || JSON.stringify(n)} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h4>{getField(n, "Message") || getField(n, "message")}</h4>
          <p>Type: {getField(n, "Type") || getField(n, "type")}</p>
          <p>{getField(n, "Timestamp") || getField(n, "timestamp")}</p>
        </div>
      ))}
    </div>
  );
}
export default NotificationList;