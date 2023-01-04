// Import Profile Component & its data
import Profile from './Profile/Profile';
import user from 'data/user.json';

// Import Statistics Component & its data
import Statistics from './Statistics/Statistics';
import data from 'data/data.json';

// Import FriendList Component & its data
import FriendList from './FriendList/List/FriendList';
import friends from 'data/friends.json'

// Import Transactions Component & its data
import TransactionHistory from './Transactions/Transactions';
import transactions from 'data/transactions.json'

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
      <FriendList
      friends={friends}
      />
      <TransactionHistory
      transactions={transactions} />
    </div>
  );
};
