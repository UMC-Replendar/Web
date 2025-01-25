import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 90%;
  width: 80%;
  margin: 50px auto 0;
  gap: 20px;
`;

const Box = styled.div`
  background-color: #eaeaea;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

interface TaskCardProps {
  imageSrc: string;
  title: string;
}

const TaskCard = ({ imageSrc, title }: TaskCardProps) => {
  return (
    <Container>
      <Wrapper>
        <Image src={imageSrc} alt="Task Icon" />
        <Text>{title}</Text>
      </Wrapper>
      <Box />
    </Container>
  );
};

export default TaskCard;
