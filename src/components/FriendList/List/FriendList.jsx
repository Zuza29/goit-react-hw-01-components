import css from './FriendList.module.css';
import FriendListItem from '../Item/FriendListItem';

const FriendList = ({ friends }) => {
    return (
    <ul className={css.list}>
        {
            friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                />
        ))
        }
    </ul>
)}
export default FriendList;