import {useState} from "react";

function GeneralInfo() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    name: "",
    email: "",
    schoolName:"",

  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,   //use the value of the variable name as the key
    });
  }

  return (
    <div>
      <h2>General Information</h2>

      <input
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />

      <p>
        <strong>Preview:</strong><br />
        Name: {formData.name}<br />
        Phone: {formData.phoneNumber}<br />
        Email: {formData.email}
      </p>
    </div>
  );
}

export default GeneralInfo;
