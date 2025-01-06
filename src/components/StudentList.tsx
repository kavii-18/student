import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Student } from "../types/Student";

const StudentList = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteStudent = (id: number) => {
    axios.delete(`/api/students/${id}`)
      .then(() => setStudents((prev) => prev.filter((student) => student.id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{`${student.firstName} ${student.lastName}`}</td>
            <td>{student.email}</td>
            <td>{student.department}</td>
            <td>{student.yearOfEnrollment}</td>
            <td>
              <button onClick={() => navigate(`/edit-student/${student.id}`)}>Edit</button>
              <button onClick={() => deleteStudent(student.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
