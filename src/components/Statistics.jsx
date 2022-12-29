const Statistics = ({ title = null, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
    </section>
  );
};

export default Statistics;