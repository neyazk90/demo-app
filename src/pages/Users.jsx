import React, { useContext } from 'react';
import UserListItem from '../components/UserListItem';
import UserContext from '../shared/store/UserContext';

const Users = () => {

  const { users:USERS, posts: POSTS } = useContext(UserContext);

  return (
    <>
      <h3 className='text-center text-3xl mb-10'>User Directory</h3>
      {USERS.map((user) => (
        <UserListItem userItem={user} key={user.id} POSTS={ POSTS} />
      ))}
    </>
  )
}

export default Users;