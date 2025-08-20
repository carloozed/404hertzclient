import React from 'react';

import StatsContainer from './StatsContainer/StatsContainer';
import ListContainer from './ListContainer/ListContainer';

import { User } from '../../../../../../../../../../lib/types/user';

type Props = { user: User | null };

export default function UpperContainerContent({ user }: Props) {
  return (
    <>
      <StatsContainer user={user} />
      <ListContainer user={user} />
    </>
  );
}
