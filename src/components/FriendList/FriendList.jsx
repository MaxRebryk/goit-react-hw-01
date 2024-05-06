import FriendListItem from './FriendListItem.jsx';
import styles from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendsList}>
      {friends.map(friend => (
        <li className={styles.FriendListItem} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
