import { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [userData] = useState({
    name: 'Jane Doe',
    email: 'jane@example.com',
  });

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };
export default UserContext;
