import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics} id="statistics">
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map((stat) => (
          <li className={styles.item} key={stat.id}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
