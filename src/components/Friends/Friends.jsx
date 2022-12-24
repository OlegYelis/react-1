import PropTypes from 'prop-types';
import { FriendsList } from './Friend.styled';
import { FriendListItem } from './FriendListItem';

export const Friends = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsList>
  );
};
