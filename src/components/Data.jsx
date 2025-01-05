export default function Data() {
  const data = [
    { name: "Johnson", age: 24, occupation: "software engineer" },
    { name: "Ufe", age: 25, occupation: "cobbler" },
    { name: "Sammy", age: 27, occupation: "yahoo boy" },
  ];
  return (
    <div>
      {data.map((data) => (
        <li key={data.name}>
          {data.name}
          {data.age} {data.occupation}
        </li>
      ))}
    </div>
  );
}
