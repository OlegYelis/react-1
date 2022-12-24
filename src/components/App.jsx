import user from 'json/user';
import data from 'json/data';
import friends from 'json/friends';
import transactions from 'json/transactions';

import { UserProfile } from './UserProfile/UserProfile';


const {
  username,
  tag,
  location,
  avatar,
  stats,
} = user;

export const App = () => {
  return (
    <div style={{ padding: '50px 0' }}>
      <UserProfile 
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </div>
    
  );
};
