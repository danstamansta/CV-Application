import Card from "./Card";

function Experience({ formData, setFormData, editing, setEditing }) {

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
      <h2>Experience</h2>

      {editing ? (
        <form onSubmit={handleSubmit}>
          <input
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />

          <input
            name="responsibilites"
            placeholder="Position Title"
            value={formData.responsibilites}
            onChange={handleChange}
          />

          <div>
            <label>Worked from </label>
            <input
              type="date"
              name="dateofEmploymentStart"
              value={formData.dateofEmploymentStart}
              onChange={handleChange}
            />

            <br />

            <label>Until </label>
            <input
              type="date"
              name="dateofEmploymentEnd"
              value={formData.dateofEmploymentEnd}
              onChange={handleChange}
            />
          </div>

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

export default Experience;
