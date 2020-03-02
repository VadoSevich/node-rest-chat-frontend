import React from 'react';

import styles from './styles.module.scss';

import useHooks from './hooks';

interface DrawerProps {
}

interface UserProps {
  id: number
  name: string
  email: string
}

const Drawer = (props: DrawerProps) => {
  const { users, useOpenUsersModal } = useHooks();

  return (
    <div className={styles.Drawer}>
      <button onClick={useOpenUsersModal} type="button">Add user + </button>

      {/* <ul>{users.map((user: UserProps) => (
        <li onClick={() => useFetchConversations(user.id)} key={user.id}>
          {user.name}
        </li>))}
      </ul> */}
    </div>
  );
}

export default Drawer;