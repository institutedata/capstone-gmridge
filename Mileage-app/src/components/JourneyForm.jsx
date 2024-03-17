import { useState } from "react";

export default function JourneyForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startPoint: "",
    endPoint: "",
    comments: [],
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <h1>Add New Journey</h1>