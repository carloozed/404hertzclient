import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { asImageSrc } from '@prismicio/client';

import { createClient } from '@/prismicio';
import DashboardClient from './components/DashboardClient/DashboardClient';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('dashboard').catch(() => notFound());
  const userAvatar = await client
    .getSingle('user_avatar')
    .catch(() => notFound());
  const replaceIcon = await client
    .getSingle('replace_icon')
    .catch(() => notFound());

  return (
    <DashboardClient
      page={page}
      userAvatar={userAvatar}
      replaceIcon={replaceIcon}
    />
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('dashboard').catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? '' }],
    },
  };
}
