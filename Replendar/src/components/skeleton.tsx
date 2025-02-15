import styled, { keyframes } from 'styled-components';

const skeletonLoading = keyframes`
  0% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f0f0f0;
  }
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const SkeletonItem = styled.div<{ gap?: string }>`
  display: flex;
  gap: ${({ gap }) => gap || '100px'};
  height: 67px;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 0px 30px;
  margin-bottom: 1px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  animation: ${skeletonLoading} 1.5s infinite;
  display: flex;
  align-items: center;

  & > div {
    background-color: #e0e0e0;
  }
`;

const SkeletonColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RegisterSkeletonItem = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 1400px;
  margin-left: 40px;
  display: flex;
  gap: 40px;
  padding: 20px;
  border: 1px solid rgba(232, 232, 232, 1);
  height: 132px;
  background-color: #f0f0f0;
  animation: ${skeletonLoading} 1.5s infinite;

  align-items: center;
`;

const RegisterProfileImage = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: #e0e0e0;
`;

const SkeletonProfileImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e0e0e0;
`;

const SkeletonText = styled.div<{ width?: string }>`
  width: ${(props) => props.width || '100px'};
  height: 20px;
  border-radius: 5px;
  background-color: #e0e0e0;
`;

const SkeletonButton = styled.div`
  width: 106px;
  height: 26px;
  border-radius: 50px;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FriendRegisterSkeleton = () => (
  <SkeletonContainer>
    <RegisterSkeletonItem>
      <RegisterProfileImage />
      <SkeletonColumn>
        <SkeletonText width="70px" />
        <SkeletonText width="50px" />
        <SkeletonText width="400px" />
      </SkeletonColumn>
    </RegisterSkeletonItem>
  </SkeletonContainer>
);

export const FriendListSkeleton = ({ count = 5 }: { count?: number }) => (
  <SkeletonContainer>
    {[...Array(count)].map((_, index) => (
      <SkeletonItem key={index} gap="60px">
        <SkeletonProfileImage />
        <SkeletonText width="100px" />
        <SkeletonText width="150px" />
      </SkeletonItem>
    ))}
  </SkeletonContainer>
);
const NewsSkeleton = ({ count = 5 }: { count?: number }) => (
  <SkeletonContainer>
    {[...Array(count)].map((_, index) => (
      <SkeletonItem key={index}>
        <SkeletonText width="100px" />
        <SkeletonText width="400px" />
        <SkeletonButton />
      </SkeletonItem>
    ))}
  </SkeletonContainer>
);

export default NewsSkeleton;
