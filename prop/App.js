import StudentCard from "./components/StudentCard";

function App() {
  return (
    <>
      <StudentCard
        name="Siddhi"
        course="B.Tech CSE"
        college="XYZ College"
      />

      <StudentCard
        name="Rahul"
        course="B.Tech IT"
        college="ABC College"
      />
    </>
  );
}

export default App;