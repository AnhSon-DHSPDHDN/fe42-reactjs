import { Spin } from "antd";
import Header from "./components/Header";
import "./App.css";
import StudentManagement from "./components/StudentManagement";

function App() {
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
