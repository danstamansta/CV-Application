import {useState} from 'react';
import Card from "./Card";

function Experience(){
		const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        companyName:"",
        responsibilites:"",
        dateofEmploymentStart:"",
				dateofEmploymentEnd:"",

    })

    function handleChange(e){
        const {name,value} = e.target;

    	setFormData({
        ...formData,
        [name]: value,

			});
		};
		
		function handleSubmit(e){
			e.preventDefault();
			setEditing(false);
		};

		function handleEdit(){
			setEditing(true);
		};

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
          Company Name: <p>{formData.companyName}</p>
          Position Name: <p>{formData.responsibilites}</p>
          studyStart: <p>{formData.dateofEmploymentStart}</p>
          studyEnd: <p>{formData.dateofEmploymentEnd}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}

    </Card> 
  );
}

export default Experience;