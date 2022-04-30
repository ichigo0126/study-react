import {useEffect, useState} from 'react';
import { ListItem } from './components/ListItem';
//http通信をするためのライブラリのimport//
import axios from 'axios';
import type { User } from "./types/user";
import './App.css';

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>("https://example.com/users").then((res) => {
      setUsers(res.data);
    })
  }, []);

  return (
    <div>
      {users.map(user => (

        <ListItem 
        id={user.id}
        name={user.name} 
        age={user.age} 
        personalColor={user.personalColor} 
        hobbies={user.hobbies}/>
      ))}
    </div>
  )
}

export default App;