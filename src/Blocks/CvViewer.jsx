import { useState } from "react";

import GeneralInfo from "../components/GeneralInfo";
import Education from "../components/Education";
import Experience from "../components/Experience";
import CvPreview from "../components/CvPreview";

const initialGeneralInfo = {
  phoneNumber: "",
  name: "",
  email: "",
};

const initialExperience = {
  companyName: "",
  responsibilites: "",
};

const initialEducation = {
  schoolName: "",
  degreeName: "",
  studyDate: "",
};

function CvViewer() {
  const [generalInfoData, setGeneralInfoData] = useState(initialGeneralInfo);

  const [experienceData, setExperienceData] = useState(initialExperience);
  const [isExperienceEditing, setIsExperienceEditing] = useState(true);

  const [educationData, setEducationData] = useState(initialEducation);
  const [isEducationEditing, setIsEducationEditing] = useState(true);

  return (
    <div className="cv-container">
      <div>
        <GeneralInfo
          formData={generalInfoData}
          setFormData={setGeneralInfoData}
        />

        <Education
          formData={educationData}
          setFormData={setEducationData}
          isEditing={isEducationEditing}
          setIsEditing={setIsEducationEditing}
        />
        <Experience
          formData={experienceData}
          setFormData={setExperienceData}
          isEditing={isExperienceEditing}
          setIsEditing={setIsExperienceEditing}
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
