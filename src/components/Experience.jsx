import useToggleState from "../hooks/useToggleState";
import Card from "./Card";
import Input from "../UI/Input";
import Button from "../UI/Button";

function Experience({ formData, setFormData}) {
  const { isEditing, toggleState } = useToggleState();

   function handleSubmit(e) {
    e.preventDefault();
    toggleState();
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
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
          <Button onClick={toggleState}>Edit</Button>
        </div>
      )}
    </Card>
  );
}

export default Experience;
