import useToggleState from "../hooks/useToggleState";
import Card from "./Card";
import Input from "../UI/Input";
import Button from "../UI/Button";

function Education({ formData, setFormData}) {
  const { isEditing, toggleState } = useToggleState();
  function handleChange(e) {
    const {name,value} = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    toggleState();
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
          <Button onClick={toggleState}>Edit</Button>
        </div>
      )}
    </Card>
  );
}

export default Education;
