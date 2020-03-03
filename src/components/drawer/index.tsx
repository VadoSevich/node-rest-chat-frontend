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
  const { loading, conversations, useOpenUsersModal, useGetConversation } = useHooks();

  return (
    <div className={styles.Drawer}>
      <button onClick={useOpenUsersModal} type="button">Add user + </button>

      {loading ? 
        <p>Loading...</p>
        :
        <ul>
          {conversations.map((conversation: UserProps) => (
            <li key={conversation.id}>
              <button 
                type="button"
                value={conversation.id}
                onClick={useGetConversation}
              >
                {conversation.id}
              </button>
            </li>))
          }
        </ul>
      }
    </div>
  );
}

export default Drawer;