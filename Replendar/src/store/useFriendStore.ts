import { create } from 'zustand';
import { IFriendList, ITaskFriendList } from '../types';

type CheckedFriends = {
  [key: number]: boolean;
};

interface FriendsStore {
  checkedFriends: CheckedFriends;
  friendshipIds: (number | null)[];
  nicknames: string[];
  friendIds: number[];
  friendData: IFriendList[] | ITaskFriendList[];
  setFriendData: (data: IFriendList[] | ITaskFriendList[]) => void;
  toggleFriend: (id: number) => void;
  toggleAllFriends: (friends: number[]) => void;
  resetFriends: () => void;
  updateFriendsData: () => void;

  // 모달 상태 관리
  isFriendModalOpen: boolean;
  openFriendModal: () => void;
  closeFriendModal: () => void;
}

const useFriendsStore = create<FriendsStore>((set, get) => ({
  checkedFriends: {},

  //필요하신 배열 쓰시면 돼요
  friendshipIds: [],

  nicknames: [],

  friendIds: [],

  friendData: [],

  setFriendData: (friendData) => set({ friendData }),
  toggleFriend: (id) =>
    set((state) => ({
      checkedFriends: {
        ...state.checkedFriends,
        [id]: !state.checkedFriends[id],
      },
    })),

  toggleAllFriends: (friends) =>
    set((state) => {
      const allChecked = friends.every((id) => state.checkedFriends[id]);
      const newCheckedFriends = allChecked
        ? {}
        : friends.reduce((acc, id) => {
            acc[id] = true;
            return acc;
          }, {} as CheckedFriends);
      return { checkedFriends: newCheckedFriends };
    }),

  //이거 해주셔야 해요
  /* useEffect(() => {
    if (JSON.stringify(data) !== JSON.stringify(friendData)) {
      setFriendData(data);
    }
  }, [data]);*/
  updateFriendsData: () => {
    const { checkedFriends, friendData } = get();

    const checkedFriendsList = friendData.filter(
      (friend) => checkedFriends[friend.friendId]
    );

    //friendshipId 없으면 friendId 넣기
    const friendshipIds = checkedFriendsList.map((friend) =>
      'friendshipId' in friend && typeof friend.friendshipId === 'number'
        ? friend.friendshipId
        : friend.friendId
    );
    const nicknames = checkedFriendsList.map((friend) => friend.nickname);
    const friendIds = checkedFriendsList.map((friend) => friend.friendId);

    set({ friendshipIds, nicknames, friendIds });
  },

  //mutation보내고 난 후나 작업 끝났을 때 리셋해주세요
  resetFriends: () =>
    set({
      checkedFriends: {},
      friendIds: [],
      friendshipIds: [],
      nicknames: [],
      friendData: [],
    }),

  isFriendModalOpen: false,
  openFriendModal: () => set({ isFriendModalOpen: true }),
  closeFriendModal: () => set({ isFriendModalOpen: false }),
}));

export default useFriendsStore;
