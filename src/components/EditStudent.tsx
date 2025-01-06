import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    yearOfEnrollment: 0,
  });

  useEffect(() => {
    axios.get(`/api/students/${id}`)
      .then((response) => setStudent(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.put(`/api/students/${id}`, student)
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" value={student.firstName} onChange={handleChange} required />
      <input name="lastName" value={student.lastName} onChange={handleChange} required />
      <input name="email" value={student.email} onChange={handleChange} required />
      <input name="department" value={student.department} onChange={handleChange} required />
      <input name="yearOfEnrollment" type="number" value={student.yearOfEnrollment} onChange={handleChange} required />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditStudent;
