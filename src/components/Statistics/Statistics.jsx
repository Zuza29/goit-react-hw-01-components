import css from './Statistics.module.css';

const getColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);


const Statistics = ({ title = null, stats }) => {
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

export default Statistics;