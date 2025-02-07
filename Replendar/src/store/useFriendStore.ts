import { create } from 'zustand';

type CheckedFriends = {
  [key: number]: boolean;
};

interface FriendsStore {
  checkedFriends: CheckedFriends;
  friendshipIds: number[];
  toggleFriend: (id: number) => void;
  toggleAllFriends: (friends: number[]) => void;
  resetFriends: () => void;

  // 모달 상태 관리
  isFriendModalOpen: boolean; // 모달 상태
  openFriendModal: () => void; // 모달 열기
  closeFriendModal: () => void; // 모달 닫기
}

const useFriendsStore = create<FriendsStore>((set, get) => ({
  // friendId를 키로 체크 boolean값 갖고 있는 상태 객체
  checkedFriends: {},

  //friendshipId배열<추후 다른 api에 사용
  friendshipIds: [],

  // 개별 선택 함수
  toggleFriend: (id) =>
    set((state) => {
      const newCheckedFriends = {
        ...state.checkedFriends,
        [id]: !state.checkedFriends[id],
      };

      // 상태 업데이트 후 friendshipIds 갱신
      const friendshipIds = Object.keys(newCheckedFriends)
        .filter((key) => newCheckedFriends[Number(key)])
        .map((key) => Number(key));

      return {
        checkedFriends: newCheckedFriends,
        friendshipIds,
      };
    }),

  // 전체 선택 함수
  toggleAllFriends: (friends) =>
    set((state) => {
      const allChecked = friends.every((id) => state.checkedFriends[id]);

      const newCheckedFriends = allChecked
        ? {} // 모두 선택되어 있으면 초기화
        : friends.reduce((acc, id) => {
            acc[id] = true;
            return acc;
          }, {} as CheckedFriends);

      // 상태 업데이트 후 friendshipIds 갱신
      const friendshipIds = Object.keys(newCheckedFriends)
        .filter((key) => newCheckedFriends[Number(key)])
        .map((key) => Number(key));

      return {
        checkedFriends: newCheckedFriends,
        friendshipIds,
      };
    }),

  resetFriends: () => set({ checkedFriends: {}, friendshipIds: [] }),

  isFriendModalOpen: false,
  openFriendModal: () => set({ isFriendModalOpen: true }), // 모달 열기
  closeFriendModal: () => set({ isFriendModalOpen: false }), // 모달 닫기
}));

export default useFriendsStore;
