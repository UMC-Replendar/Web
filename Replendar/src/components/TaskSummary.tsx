import styled from "styled-components";

const CustomDiv = styled.div`
  display:flex;
  gap: 10px;
  justify-content: center;
  margin-top: 50px;
`

const CustomButton = styled.button`
  border-radius: 5px;
  width: 100px;
  height : 50px ;
`
function TaskSummary() {
    return (
      <CustomDiv className="task-summary">
        <CustomButton>완료한 과제 </CustomButton>
        <CustomButton>보관한 과제 </CustomButton>
        <CustomButton>통계 보기</CustomButton>
      </CustomDiv>
    );
  }
  
export default TaskSummary

