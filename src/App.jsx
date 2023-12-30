
import './App.css'
import { Outlet, useLoaderData } from 'react-router-dom'
import UserContext from './shared/store/UserContext'

function App() {
  const { USERS, POSTS } = useLoaderData();

  return (
    <>
      <UserContext.Provider value={{
        users: USERS,
        posts:POSTS
      }}>
        < Outlet />
        </UserContext.Provider>
    </>
  )
}

export async function loaderData() {
  const [usersResult, postsResult] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users'),
    fetch('https://jsonplaceholder.typicode.com/posts')
  ]);

  const USERS = await usersResult.json();
  const POSTS = await postsResult.json();

  return { USERS , POSTS };
}

export default App
