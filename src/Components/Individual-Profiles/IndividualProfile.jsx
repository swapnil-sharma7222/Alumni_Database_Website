import { useParams } from 'react-router-dom';

export const IndividualProfile = ({ post }) => {
  const { _id } = useParams();
  const currentProfile = post.find((item) => item._id === _id);
  return (
    <div>
      {currentProfile && (
        <div>
          <div>
            Name: {currentProfile.name}
          </div>
          <div>
            InstituteID: {currentProfile.instituteid}
          </div>
          <div>
            Passout Year{currentProfile.passoutyear}
          </div>
          <div>
            Email: {currentProfile.email}
          </div>
          <div>
            Mobile: {currentProfile.mobile}
          </div>
          <div>
            Department: {currentProfile.department}
          </div>
          <div>
            Batch: {currentProfile.batch}
          </div>
          <div>
            Profession: {currentProfile.profession}
          </div>
          <div>
            Designation: {currentProfile.designation}
          </div>
          <div>
            Company: {currentProfile.company}
          </div>
          <div>
            City {currentProfile.city}
          </div>
          <div>
            State: {currentProfile.state}
          </div>
          <div>
            Linkedin: {currentProfile.linkedin}
          </div>
          <div>
            Program: {currentProfile.program}
          </div>
        </div>
      )}
    </div>
  );
};
