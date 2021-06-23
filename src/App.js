import { UserController } from './context/UserContext'
import UserList from './components/UserList'
import './App.css';

function App() {
  return (
    <UserController>
      <UserList className={App} />
    </UserController>
  );
}

export default App;
