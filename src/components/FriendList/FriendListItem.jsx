import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default function FriendListItem({ avatar, isOnline, name }) {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.green : styles.red}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}
