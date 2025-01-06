import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    yearOfEnrollment: 0,
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post("/api/students", student)
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" onChange={handleChange} placeholder="First Name" required />
      <input name="lastName" onChange={handleChange} placeholder="Last Name" required />
      <input name="email" onChange={handleChange} placeholder="Email" required />
      <input name="department" onChange={handleChange} placeholder="Department" required />
      <input name="yearOfEnrollment" type="number" onChange={handleChange} placeholder="Year of Enrollment" required />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;
