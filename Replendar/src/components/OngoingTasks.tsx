import styled from "styled-components"

const MainPageTitle = styled.h1`
    font-size: 28px;
    margin: 125px 0 19px 279px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 274px;
    margin-bottom: 20px;
`;

const AddButton = styled.button`
    padding: 14px 24px;
    font-size: 16px;
    color: black;
    background-color: #E8E8E8;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    margin-right: 12px;
`;

const AddButtonWithBorder = styled(AddButton)`
    color: #666666;
    background-color: white;
    border: 2px dashed #BBBBBB;
`;

const More = styled.span`
    padding: 14px 24px;
    font-size: 16px;
    color: #666666;
    cursor: pointer;
    margin-left: auto;
    margin-right: 106px;
`;

const TaskBox = styled.div`
    background-color: #FCF6F5;
    border-radius: 10px;
    margin: 0 80px 49px 278px;
    padding: 62px 86px;
`;

const TaskBlockContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    
    &:last-child {
        margin-bottom: 0;
    }
`;

const TaskBlock = styled.div<{ color: string }>`
    background-color: ${({ color }) => color};
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 24px;
    width: calc(100% - 135px);
`;

const TaskName = styled.div`
    font-size: 16px;
    color: white;
`;

const RemainingTime = styled.div`
    font-size: 16px;
    color: white;
`;

const ToggleSwitchContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 35px;
`;

const ToggleSwitch = styled.input`
    appearance: none;
    width: 125px;
    height: 60px;
    background-color: #848484;
    border-radius: 50px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s;

    &:checked {
        background-color: #22BD68;
    }

    &::before {
        content: '';
        position: absolute;
        left: 3px;
        top: 3px;
        width: 50px;
        height: 50px;
        background-color: white;
        border-radius: 50%;
        transition: 0.3s;
    }

    &:checked::before {
        transform: translateX(65px);
    }
`;

interface TaskProps {
    color: string;
    name: string;
    time: string;
}

function Task({ color, name, time }: TaskProps) {
    return (
        <TaskBlockContainer>
            <TaskBlock color={color}>
                <TaskName>{name}</TaskName>
                <RemainingTime>{time}</RemainingTime>
            </TaskBlock>
            <ToggleSwitchContainer>
                <ToggleSwitch />
            </ToggleSwitchContainer>
        </TaskBlockContainer>
    );
}

function OngoingTasks() {
    return(
        <>
            <MainPageTitle>진행 중인 과제</MainPageTitle>
            <ButtonContainer>
                <AddButton>과제 추가하기</AddButton>
                <AddButtonWithBorder>과제 추가하기</AddButtonWithBorder>
                <More>더보기</More>
            </ButtonContainer>

            <TaskBox>
                <Task color="#2BAE66" name="과제 1" time="10h 10m 20s" />
                <Task color="#25C26C" name="과제 2" time="10h 10m 22s" />
                <Task color="#7AC19A" name="과제 3" time="10h 10m 22s" />
                <Task color="#9DCFB4" name="과제 4" time="10h 10m 22s" />
            </TaskBox>
        </>
    )
}

export default OngoingTasks;