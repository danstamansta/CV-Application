import useToggleState from "../hooks/useToggleState";

import Card from "./Card";
import Input from "../UI/Input";
import Button from "../UI/Button";

function GeneralInfo({ formData, setFormData }) {
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
      <div>
        <h2>General Information</h2>

        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />

            <Input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />

            <Input
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <Button type="submit">Submit</Button>
          </form>
        ) : (
          <div>
            <Button onClick={toggleState}>Edit</Button>
          </div>
        )}
      </div>
    </Card>
  );
}

export default GeneralInfo;
