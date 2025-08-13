import React from 'react';

import MenuClient from './MenuClient/MenuClient';

import { createClient } from '@/prismicio';

export default async function MainNavigation() {
  const client = createClient();

  const navbar = await client.getSingle('navigation');

  return <MenuClient navbar={navbar} />;
}
