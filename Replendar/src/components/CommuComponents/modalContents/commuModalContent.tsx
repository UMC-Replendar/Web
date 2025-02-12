import styled from 'styled-components';
import { PlusFriendsButton } from '../../../modal/AddTaskModal';
//import GrayPlusIcon from '../../../assets/images/GrayPlusIcon.svg';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
dayjs.locale('ko');
import useFriendsStore from '../../../store/useFriendStore';
import SelectFriendsModal from '../../../modal/SelectFriendsModal';
import useGetData from '../../../hooks/useGetData';
import { ILecture } from '../../../types';
import { AddDepartmentAssignment } from '../../../apis/commuApi';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

const CommuModalContent: React.FC<{ queryKey: string }> = ({ queryKey }) => {
  const [academicYear, setacademicYear] = useState(1);
  const [time, setTime] = useState('');
  const [selectedLecture, setSelectedLecture] = useState<number | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [deadline, setDeadline] = useState<Dayjs | null>(dayjs());

  const { isFriendModalOpen } = useFriendsStore();

  const queryClient = useQueryClient();

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputTime = e.target.value.replace(/[^0-9]/g, '');

    if (inputTime.length > 4) {
      inputTime = inputTime.slice(0, 4);
    }

    let formattedTime = inputTime;
    if (inputTime.length >= 2) {
      formattedTime = `${inputTime.slice(0, 2)}:${inputTime.slice(2)}`;
    }

    setTime(formattedTime);
  };

  const handleTimeBlur = () => {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

    if (!timeRegex.test(time)) {
      alert('24시간 형식 (00:00 ~ 23:59)으로 입력하세요.');
      setTime('');
    }
  };

  const { data: lectures } = useGetData(
    `/api/major/lectures/list/${academicYear}`
  );

  const AddDepartmentAssignmentMutation = useMutation({
    mutationFn: ({
      lectureId,
      title,
      content,
      endDate,
    }: {
      lectureId: number;
      title: string;
      content: string;
      endDate: string;
    }) => AddDepartmentAssignment({ lectureId, title, content, endDate }), // 메모 업데이트를 위한 API 호출
    onSuccess: (data) => {
      alert(data); // 메모 업데이트 성공 메시지
      queryClient.invalidateQueries({
        queryKey: [queryKey], // 쿼리 캐시를 무효화하여 데이터를 최신 상태로 유지
      });
    },
    onError: (error: Error) => {
      alert('학과 과제 추가하기에 실패했습니다'); // 메모 업데이트 실패 메시지
      console.error(error);
    },
  });

  const handleLectureChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lectureId = Number(e.target.value);
    setSelectedLecture(lectureId);
  };

  const handleAddAssignment = () => {
    if (selectedLecture === null) {
      alert('강좌를 선택해주세요.');
      return;
    }
    if (!title.trim()) {
      alert('과제명을 입력해주세요.');
      return;
    }
    if (!deadline) {
      alert('마감일을 선택해주세요.');
      return;
    }
    const formattedDeadline = `${deadline.format('YYYY/MM/DD')}`;
    const data = {
      lectureId: selectedLecture,
      title: title,
      content: content.trim() || '내용 없음',
      endDate: formattedDeadline,
    };
    console.log(data);
    AddDepartmentAssignmentMutation.mutate(data);
  };

  return (
    <>
      <TitleH1>학과 과제 추가하기</TitleH1>
      <FlexGroup>
        <Label>과제명</Label>
        <TransparentInput
          placeholder="과제 이름을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></TransparentInput>
      </FlexGroup>
      <FlexGroup>
        <Label>학년</Label>
        <Select
          value={academicYear}
          onChange={(e) => setacademicYear(Number(e.target.value))}
        >
          <option value={1}>1학년</option>
          <option value={2}>2학년</option>
          <option value={3}>3학년</option>
          <option value={4}>4학년</option>
        </Select>
      </FlexGroup>

      <FlexGroup>
        <Label>강좌</Label>
        <Select onChange={handleLectureChange}>
          <option value="" hidden>
            강좌를 선택하세요
          </option>
          {lectures.map((lecture: ILecture) => (
            <option key={lecture.lectureId} value={lecture.lectureId}>
              {lecture.lectureName} - {lecture.professor}
            </option>
          ))}
        </Select>
      </FlexGroup>

      <FlexGroup>
        <Label>과제마감일</Label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <InputContainer>
            <DesktopDatePicker
              value={deadline}
              onChange={(newValue) => setDeadline(newValue || deadline)}
              format="YYYY/MM/DD"
              slots={{ textField: StyledTextField }}
            />
            <StyledTimeInput
              type="text"
              value={time}
              placeholder="23:59"
              onChange={handleTimeChange}
              onBlur={handleTimeBlur}
              maxLength={5}
              required
            />
          </InputContainer>
        </LocalizationProvider>
      </FlexGroup>
      {isFriendModalOpen && <SelectFriendsModal />}
      <FlexGroup>
        <Label>메모</Label>
        <Memo
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></Memo>
      </FlexGroup>
      <FlexEndGroup>
        {' '}
        <PlusFriendsButton onClick={handleAddAssignment}>
          일정 추가하기
        </PlusFriendsButton>
      </FlexEndGroup>
    </>
  );
};

/*<FlexGroup>
{' '}
<Label>공유할 친구</Label>{' '}
<PlusFriendsButton onClick={openFriendModal}>
  <img src={GrayPlusIcon} alt="Gray Plus Icon" />
  추가
</PlusFriendsButton>
{nicknames.length > 0 && (
  <SelectedFriendsList>
    {nicknames.map((nickname) => (
      <FriendTag key={nickname}>{nickname}</FriendTag>
    ))}
  </SelectedFriendsList>
)}
</FlexGroup>*/

export default CommuModalContent;

const Select = styled.select`
  width: 100px;
  width: 300px;

  background: white;
  border: none;
  outline: none;
  font-size: 19px;
`;

const StyledTimeInput = styled.input`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  background: white;
  color: #666666;
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;

  width: 86px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StyledTextField = muiStyled(TextField)({
  width: 'auto',
  maxWidth: '200px',
  boxSizing: 'border-box',

  '& .MuiInputBase-root': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '19px',
    padding: '8px',
    height: '47px',
  },

  '& .MuiOutlinedInput-root': {
    borderRadius: '5px',
    border: '0.5px solid #E8E8E8',
    backgroundColor: 'white',

    '&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline':
      {
        borderColor: '#E8E8E8',
      },
  },

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#E8E8E8',
  },

  '& .MuiSvgIcon-root': {
    fontSize: '1.2rem',
  },
});

const Memo = styled.textarea`
  background-color: white;
  width: 400px;
  height: 200px;
  border: 1px solid rgba(213, 213, 213, 1);
  &:focus {
    outline: none;
  }
`;
const TitleH1 = styled.h1`
  padding-bottom: 40px;
  font-family: Pretendard;
  font-size: 23px;
  font-weight: 600;
  line-height: 32.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;
const TransparentInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 300px;

  font-family: Pretendard;
  font-size: 19px;
  font-weight: 500;
  line-height: 26.6px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const Label = styled.label`
  width: 150px;
  font-family: Pretendard;
  font-size: 23px;
  font-weight: 600;
  line-height: 32.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;
const FlexGroup = styled.div`
  display: flex;
  gap: 20px;
  padding: 5px;
`;
const FlexEndGroup = styled.label`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`;
