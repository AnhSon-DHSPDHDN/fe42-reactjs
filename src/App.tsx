import Header from "./components/Header";
import "./App.css";
import StudentManagement from "./components/StudentManagement";

function App() {
  console.log(process.env.REACT_APP_API_URL, "REACT_APP_API_URL");

  return (
    <div className="App">
      <Header />
      <div
        style={{
          padding: 10,
        }}
        className="management-container"
      >
        <StudentManagement />
      </div>
    </div>
  );
}

export default App;
