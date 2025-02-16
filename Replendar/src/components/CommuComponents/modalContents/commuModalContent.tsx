import styled from 'styled-components';
import { PlusFriendsButton } from '../../../modal/AddTaskModal';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
dayjs.locale('ko');
import useModalStore from '../../../store/modalStore';
import useGetData from '../../../hooks/useGetData';
import { ILecture } from '../../../types';
import { AddDepartmentAssignment } from '../../../apis/commuApi';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { useAcademicYearStore } from '../../../store/profileStore';
import Swal from 'sweetalert2';

const CommuModalContent: React.FC<{ queryKey: string }> = ({ queryKey }) => {
  const [academicYear, setacademicYear] = useState(1);
  const [selectedLecture, setSelectedLecture] = useState<number | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [deadline, setDeadline] = useState<Dayjs | null>(dayjs());

  const { closeModal } = useModalStore();
  const { setAcademicYear } = useAcademicYearStore();

  const queryClient = useQueryClient();

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
    }) => AddDepartmentAssignment({ lectureId, title, content, endDate }),
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        text: '학과 과제가 추가되었습니다',
        timer: 2000,
        showConfirmButton: false,
      });
      setAcademicYear(academicYear);
      closeModal();
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
    },
    onError: (error: Error) => {
      Swal.fire({
        icon: 'error',
        text: '학과 과제 추가하기에 실패했습니다.',
        confirmButtonText: '확인',
        showConfirmButton: true,
      });
      console.error(error);
    },
  });

  const handleLectureChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lectureId = Number(e.target.value);
    setSelectedLecture(lectureId);
  };

  const handleAddAssignment = () => {
    if (selectedLecture === null) {
      Swal.fire({
        icon: 'warning',
        text: '강좌를 선택해주세요',
      });
      return;
    }
    if (!title.trim()) {
      Swal.fire({
        icon: 'warning',
        text: '과제명을 선택해주세요',
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }
    if (!deadline) {
      Swal.fire({
        icon: 'warning',
        text: '마감일을 선택해주세요',
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }
    const formattedDeadline = `${deadline.format('YYYY/MM/DD')}`;
    const data = {
      lectureId: selectedLecture,
      title: title,
      content: content.trim() || '',
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
          <DesktopDatePicker
            value={deadline}
            onChange={(newValue) => setDeadline(newValue || deadline)}
            format="YYYY/MM/DD"
            slots={{ textField: StyledTextField }}
          />
        </LocalizationProvider>
      </FlexGroup>
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

export default CommuModalContent;

const Select = styled.select`
  width: 300px;
  background: white;
  border: none;
  outline: none;
  font-size: 19px;
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
  width: 220px;

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
