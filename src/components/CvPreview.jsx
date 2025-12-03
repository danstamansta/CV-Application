function CvPreview({ generalInfo, education, experience }) {
  return (
    <div className="cv-preview-text">
      <h2>General Information</h2>
      <p>Name: {generalInfo.name}</p>
      <p>Phone: {generalInfo.phoneNumber}</p>
      <p>Email: {generalInfo.email}</p>

      <h2>Education</h2>
      <p>School: {education.schoolName}</p>
      <p>Degree: {education.degreeName}</p>
      <p>Date: {education.studyDate}</p>

      <h2>Experience</h2>
      <p>Company: {experience.companyName}</p>
      <p>Role: {experience.responsibilites}</p>
      <p>Employment Start: {experience.dateofEmploymentStart}</p>
      <p>Until: {experience.dateofEmploymentEnd}</p>
    </div>
  );
}
export default CvPreview;
