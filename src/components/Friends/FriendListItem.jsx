import PropTypes from 'prop-types';
import { FriendsElements, Online, Offline, Img, Name } from './Friend.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsElements>
      {isOnline ? <Online /> : <Offline />}
      <Img src={avatar} alt={name} />
      <Name>{name}</Name>
    </FriendsElements>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
