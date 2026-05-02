export default function Filter({ setType }) {
  return (
    <select onChange={(e) => setType(e.target.value)}>
      <option value="">All</option>
      <option value="Event">Event</option>
      <option value="Result">Result</option>
      <option value="Placement">Placement</option>
    </select>
  );
}