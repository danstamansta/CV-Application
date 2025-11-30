import Card from './Card';

function Education({ formData, setFormData, editing, setEditing }) {

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEditing(false);
  }

  function handleEdit() {
    setEditing(true);
  }

  return (
    <Card>
      <h2>Education</h2>

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
            placeholder="Degree Name"
            value={formData.degreeName}
            onChange={handleChange}
          />

          <input
            name="studyDate"
            placeholder="Study Date"
            value={formData.studyDate}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}

    </Card>
  );
}

export default Education;
