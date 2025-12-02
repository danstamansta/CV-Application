import Card from "./Card";
import Input from "../UI/Input";
import Button from "../UI/Button";
function Education({ formData, setFormData, isEditing, setIsEditing }) {
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <Card>
      <h2>Education</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <Input
            name="schoolName"
            placeholder="School Name"
            value={formData.schoolName}
            onChange={handleChange}
          />

          <Input
            name="degreeName"
            placeholder="Degree Name"
            value={formData.degreeName}
            onChange={handleChange}
          />

          <Input
            type="date"
            name="studyDate"
            placeholder="Study Date"
            value={formData.studyDate}
            onChange={handleChange}
          />

          <Button type="submit">Submit</Button>
        </form>
      ) : (
        <div>
          <Button onClick={handleEdit}>Edit</Button>
        </div>
      )}
    </Card>
  );
}

export default Education;
