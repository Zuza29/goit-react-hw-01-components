import Profile from './Profile/Profile';
import user from 'data/user.json';
import Statistics from './Statistics/Statistics';
import data from 'data/data.json';

export const App = () => {
  return (
    <div className="App">
      <h2 className="heading">Profile</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2 className="heading">Statistics</h2>
      <Statistics
      title="Upload stats" stats={data} />
    </div>
  );
};
