import styled from 'styled-components';
import { NineDots } from '../commuIcons';
import useGetData from '../../../hooks/useGetData';
import { useState } from 'react';
import { SmallToggleSwitch } from '../../../modal/EditTaskModal';

const Container = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;

  padding: 20px;

  box-sizing: border-box;
`;

const SpaceBtwDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px; /* 갭 조정 */
  width: 100%;
  font-size: 19px;
  height: 67px;
  background: white;
  border-radius: 20px;
  padding: 0px 30px;
  margin-bottom: 1px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`;

const RightAlignedItem = styled.div`
  margin-left: auto; /* 오른쪽 끝에 배치 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterDiv = styled.div<{ width?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || 'auto'};
`;

const FlexDiv = styled.div`
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Modal = styled.div<{ isOpen: boolean; top: string }>`
  position: absolute;
  top: ${(props) => props.top};
  right: 170px;
  width: 300px;
  background-color:rgba(255, 255, 255, 1);
  border: 1px solid #ccc;

  border-radius: 10px;

  display: ${(props: { isOpen: boolean }) => (props.isOpen ? 'flex' : 'none')};\
  flex-direction:column;

`;
const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 10px 8px 10px;
  height: 38px;
  span {
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 500;
    line-height: 18.2px;
    text-align: right;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(102, 102, 102, 1);
  }
  div {
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;
    text-align: right;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`;

const P = styled.p`
  text-align: right; /* 텍스트 오른쪽 정렬 */
  margin: 0px;
  padding: 8px 10px 8px 10px;
  height: 38px;
`;

const FriendList: React.FC<{ expanded: string }> = ({ expanded }) => {
  const visibleItems = expanded === 'true' ? 12 : 5;
  const url = expanded
    ? `https://api.replendar.site/api/friends`
    : `https://api.replendar.site/api/friends?limit=5`;

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    selectedId: number | null;
  }>({
    isOpen: false,
    selectedId: null,
  });

  const [isOn, setIsOn] = useState(false);

  /*const { data: data1, isLoading, isError } = useGetData(url);

  if (isLoading) {
    return <div>스켈레톤 이미지</div>;
  }

  if (isError) {
    return <h1>에러</h1>;
  }*/
  const handleNineDotsClick = (id: number) => {
    setModalState((prev) => ({
      isOpen: prev.selectedId !== id || !prev.isOpen, // 클릭한 아이템이 다르면 열기, 같으면 토글
      selectedId: prev.selectedId === id ? null : id, // 같은 걸 클릭하면 닫기
    }));
  };
  return (
    <Container>
      {data.slice(0, visibleItems).map((item, index) => (
        <div key={index}>
          <SpaceBtwDiv>
            <FlexDiv>
              <img src={item.image} alt="프로필 사진" />
              <CenterDiv width="100px">{item.nickname}</CenterDiv>
            </FlexDiv>

            <CenterDiv>진행 중인 과제: {item.ongoingTaskNum}개</CenterDiv>
            <RightAlignedItem>
              <NineDots
                fill={
                  modalState.selectedId === item.id
                    ? 'rgba(74, 198, 226, 1)'
                    : 'black'
                }
                onClick={() => handleNineDotsClick(item.id)}
              />
            </RightAlignedItem>
          </SpaceBtwDiv>
          <Modal
            top={`${index * 67 + 340}px`}
            isOpen={modalState.isOpen && modalState.selectedId === item.id}
          >
            <ModalContent>
              <span>진행중인 과제: ?개</span>
              <div>일정확인</div>
            </ModalContent>

            <P>과제공유</P>

            <ModalContent>
              <div
                style={{
                  display: 'flex',
                  transformOrigin: 'left',
                  alignItems: 'center', // 수직 중앙 정렬
                  transform: 'scale(0.5)', // 크기 조정
                }}
              >
                <SmallToggleSwitch
                  isOn={isOn}
                  onToggle={() => setIsOn(!isOn)}
                />
              </div>
              <div>친한친구설정</div>
            </ModalContent>
            <ModalContent>
              <span>메모내용메모내용</span>
              <div>메모수정</div>
            </ModalContent>

            <P>친구삭제</P>
          </Modal>
        </div>
      ))}
    </Container>
  );
};

export default FriendList;

const data = [
  {
    id: 1,
    image: 'src/assets/images/프로필 사진.png',
    nickname: 'CodeMaster',
    ongoingTaskNum: 2,
  },
  {
    id: 2,
    image: 'src/assets/images/프로필 사진.png',
    nickname: 'DesignGuru',
    ongoingTaskNum: 3,
  },
  {
    id: 3,
    image: 'src/assets/images/프로필 사진.png',
    nickname: 'BugHunter',
    ongoingTaskNum: 1,
  },
  {
    id: 4,
    image: 'src/assets/images/프로필 사진.png',
    nickname: 'BugHunter',
    ongoingTaskNum: 1,
  },
  {
    id: 5,
    image: 'src/assets/images/프로필 사진.png',
    nickname: 'BugHunter',
    ongoingTaskNum: 1,
  },
  {
    id: 6,
    image: 'src/assets/images/프로필 사진.png',
    nickname: 'BugHunter',
    ongoingTaskNum: 1,
  },
];
