import {useState} from 'react';
import Card from './Card';

function Education(){
    const [editing, setEditing] = useState(false);
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

    function handleSubmit(e){
      e.preventDefault();
      setEditing(false);
    }

    function handleEdit(){
      setEditing(true);
    }

  return (
    <Card>
    <h2>Education</h2>
    <div>
      {editing ? (
        
          <form onSubmit={handleSubmit}>
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

            <input
              type="date"
              name="studyDate"
              value={formData.studyDate}
              onChange={handleChange}
            />

            <button type="submit">Submit</button>
          </form>
        ) : (
          
          <div>
            <p><strong>School:</strong> {formData.schoolName}</p>
            <p><strong>Degree:</strong> {formData.degreeName}</p>
            <p><strong>Date:</strong> {formData.studyDate}</p>

            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
      </Card>
    );
  }
export default Education

    

