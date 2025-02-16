import { useMutation, useQueryClient } from '@tanstack/react-query';
import { groupAddFriend } from '../apis/commuApi';
import useModalStore from '../store/modalStore';
import Swal from 'sweetalert2';

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
      Swal.fire({
        icon: 'success',
        text: '그룹에 친구가 추가되었습니다',
        timer: 2000,
        showConfirmButton: false,
      });
    },

    onError: (error: Error) => {
      Swal.fire({
        icon: 'error',
        text: '그룹에 친구 추가하기 실패했습니다.',
        timer: 2000,
        showConfirmButton: false,
      });
      console.error(error);
    },
  });
};
