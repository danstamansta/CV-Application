import Card from "./Card";
import Input from "../UI/Input";
import Button from "../UI/Button";
function Experience({ formData, setFormData, isEditing, setIsEditing }) {
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
      <h2>Experience</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <Input
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />

          <Input
            name="responsibilites"
            placeholder="Position Title"
            value={formData.responsibilites}
            onChange={handleChange}
          />

          <div>
            <label>Worked from </label>
            <Input
              type="date"
              name="dateofEmploymentStart"
              value={formData.dateofEmploymentStart}
              onChange={handleChange}
            />

            <br />

            <label>Until </label>
            <Input
              type="date"
              name="dateofEmploymentEnd"
              value={formData.dateofEmploymentEnd}
              onChange={handleChange}
            />
          </div>

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

export default Experience;
