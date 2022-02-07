import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import styles from "./FriendListItem.module.css";

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList} id="friendList">
      {friends.map((friend) => (
        <FriendListItem {...friend} key={friend.id} />
      ))}
    </ul>
  );
}
