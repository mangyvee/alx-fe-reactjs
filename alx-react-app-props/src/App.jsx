import './App.css';
import UserContext from './UserContext';
import ProfilePage from './components/ProfilePage';

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>User Profile</h1>
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;
