import styled from "styled-components";

const CustomDiv = styled.div`
  margin-top : 5%;
  display: flex;
  justify-content: center;
  gap: 50px;
`

function ProfileSection() {
    return (
      <CustomDiv className="profile-section">
        <div style={{backgroundColor:"lightgrey", borderRadius:"100%", width:"300px", height:"300px"}} className="profile-picture"></div>
        <div>
          <h2>닉네임</h2>
          <p>친구</p>
          <p>진행중인 과제</p>
        </div>
      </CustomDiv>
    );
  }
  
  export default ProfileSection;

