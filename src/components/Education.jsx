import {useState} from 'react'

function Education(){
    const [formData, setFormData] = useState({
        schoolName: "",
        degreeName: "",
        studyDate:"",

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
      <h2>Education</h2>

      <input
        name="schoolName"
        placeholder="School Name"
        value={formData.schoolName}
        onChange={handleChange}
      />

      <input
        name="degreeName"
        placeholder="Type Of Education"
        value={formData.degreeName}
        onChange={handleChange}
      />

      <input type="date"
        name="studyDate"
        placeholder="Date Of Study"
        value={formData.studyDate}
        onChange={handleChange}
      />

      <p>
        <strong>Preview:</strong><br />
        schoolName: {formData.schoolName}<br />
        degreeName: {formData.degreeName}<br />
        studyDate: {formData.studyDate}
      </p>
    </div>
  );
}

export default Education;

    

