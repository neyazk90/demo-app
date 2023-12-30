import React from 'react'
import { Link } from 'react-router-dom'

const UserListItem = ({ userItem, POSTS }) => {

  return (
    <Link to={`${userItem.id}`} relative="route">
      <ul className='list-none p-2 max-w-96 m-auto'>
      <li className='flex justify-between border-2 rounded-md mb-10 p-3'>
          <span>Name: {userItem.name }</span>
          {POSTS?.some(post => post.userId === userItem.id) ? (
            <ul className=''>
              {POSTS?.filter(post => post.userId === userItem.id).length > 0 && (
                <p>{POSTS?.filter(post => post.userId === userItem.id).length}</p>
                )
                }
            </ul>
          ) : (
            <p>No posts for this user</p>
          )}
        </li>
      </ul>
    </Link>
  )
}

export default UserListItem