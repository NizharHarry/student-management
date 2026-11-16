
import { useState } from "react";
import studentsData from "./data/students";
import StudentTable from "./components/StudentTable";
import LiveClock from "./components/LiveClock";
import "./App.css";

function App() {
  // Menyimpan data mahasiswa menggunakan useState
  const [students] = useState(studentsData);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Student Management</h1>
        <p>Daftar Data Mahasiswa</p>
      </header>

      <main className="main-content">

        {/* Informasi jumlah mahasiswa */}
        <section className="overview-section">
          <div className="student-count-card">
            <span className="overview-label">TOTAL MAHASISWA</span>
            <h2>{students.length}</h2>
            <p>Mahasiswa terdaftar</p>
          </div>

          {/* Jam digital */}
          <LiveClock />
        </section>

        {/* Tabel mahasiswa */}
        <section className="student-section">
          <div className="section-heading">
            <h2>Data Mahasiswa</h2>
            <span className="student-count">
              {students.length} Mahasiswa
            </span>
          </div>

          <StudentTable students={students} />
        </section>

      </main>
    </div>
  );
}

export default App;
