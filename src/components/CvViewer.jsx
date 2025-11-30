import { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";
import CvPreview from "./CvPreview";

function CvViewer() {

  // ---- General Info ----
  const [generalInfoData, setGeneralInfoData] = useState({
    phoneNumber: "",
    name: "",
    email: "",
    schoolName: "",
  });
  const [generalInfoEditing, setGeneralInfoEditing] = useState(true);

  // ---- Experience ----
  const [experienceData, setExperienceData] = useState({
    companyName: "",
    responsibilites: "",
    dateofEmploymentStart: "",
    dateofEmploymentEnd: "",
  });
  const [experienceEditing, setExperienceEditing] = useState(true);

  // ---- Education ----
  const [educationData, setEducationData] = useState({
    schoolName: "",
    degreeName: "",
    studyDate: "",
  });
  const [educationEditing, setEducationEditing] = useState(true);

  return (
    <div>

      <div>
        <GeneralInfo
          formData={generalInfoData}
          setFormData={setGeneralInfoData}
          editing={generalInfoEditing}
          setEditing={setGeneralInfoEditing}
        />

        <Education
          formData={educationData}
          setFormData={setEducationData}
          editing={educationEditing}
          setEditing={setEducationEditing}
        />
        <Experience
          formData={experienceData}
          setFormData={setExperienceData}
          editing={experienceEditing}
          setEditing={setExperienceEditing}
        />

      </div>

      <div className="cv-preview">
        <CvPreview
          generalInfo={generalInfoData}
          education={educationData}
          experience={experienceData}
        />
      </div>

    </div>
  );
}

export default CvViewer;