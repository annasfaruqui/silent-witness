import styled from "styled-components";

import { useUser } from "./useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-700);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <StyledUserAvatar>
      <Avatar
        src={avatar || "default-user.jpg"}
        alt={avatar ? `Avatar of ${fullName}` : "default user"}
      />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
