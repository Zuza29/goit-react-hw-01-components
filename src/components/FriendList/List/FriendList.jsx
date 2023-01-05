import css from './FriendList.module.css';
import FriendListItem from '../Item/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.list}>
        <h2>Friends</h2>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        ))}
      </ul>
    </>
  );
};

FriendListItem.defaultProps = {
  avatar:
    'https://cdn0.iconfinder.com/data/icons/communication-456/24/account_profile_user_contact_person_avatar_placeholder-512.png',
  name: 'Anonymous'
};
    
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string
    })
  )
}

export default FriendList;