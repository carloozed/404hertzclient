import React from 'react';
import { User } from '../../../../../../../../../../lib/types/user';

import styles from './Information.module.css';
import FieldContainer from './FieldContainer/FieldContainer';

type InformationProps = {
  user: User | null;
};

export default function Information({ ...InformationProps }: InformationProps) {
  const { user } = InformationProps;

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <FieldContainer>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            defaultValue={user ? user.email : ''}
          />
        </FieldContainer>
        <FieldContainer>
          <label htmlFor="surname">Surname:</label>
          <input
            id="surname"
            name="surname"
            type="text"
            defaultValue={user ? user.last_name : ''}
          />
        </FieldContainer>
        <FieldContainer>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            defaultValue={user ? user.first_name : ''}
          />
        </FieldContainer>
        <FieldContainer>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            defaultValue={user ? user.email : ''}
          />
        </FieldContainer>
        <FieldContainer>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            defaultValue={user ? user.email : ''}
            readOnly={true}
          />
        </FieldContainer>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
