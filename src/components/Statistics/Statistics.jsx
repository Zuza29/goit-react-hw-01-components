import css from './Statistics.module.css';
import { getColor } from 'components/getColor';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <ul className={css.list}>
        {title && <h2 className="title">{title}</h2>}
        {stats.map(stat => (
          <li
            className={css.item}
            key={stat.id}
            style={{ backgroundColor: getColor() }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: null
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number
    })
  ),
};

export default Statistics;