import Card from "./Card";

function GeneralInfo({ formData, setFormData, editing, setEditing }) {

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
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
      <div>
        <h2>General Information</h2>

        {editing ? (
          <form onSubmit={handleSubmit}>

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

            <button type="submit">Submit</button>

          </form>
        ) : (
          <div>
            
            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
    </Card>
  );
}

export default GeneralInfo;
