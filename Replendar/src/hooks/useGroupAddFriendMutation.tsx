import { useMutation, useQueryClient } from '@tanstack/react-query';
import { groupAddFriend } from '../apis/commuApi';
import useModalStore from '../store/modalStore';

export const useGroupAddFriendMutation = () => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalStore();

  return useMutation({
    mutationFn: ({
      groupId,
      friendshipIds,
    }: {
      groupId: number;
      friendshipIds: number[];
    }) => groupAddFriend({ groupId, friendshipIds }),

    onSuccess: () => {
      closeModal();
      queryClient.invalidateQueries({ queryKey: [`/api/friend-groups`] });
    },

    onError: (error: Error) => {
      alert('그룹에 친구 추가하기 실패했습니다');
      console.error(error);
    },
  });
};
