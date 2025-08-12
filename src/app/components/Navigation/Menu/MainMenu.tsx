import React from 'react';

import NavigationClient from './MenuClient/MenuClient';

import { createClient } from '@/prismicio';

export default async function MainNavigation() {
  const client = createClient();

  const navbar = await client.getSingle('navigation');

  return <NavigationClient navbar={navbar} />;
}
