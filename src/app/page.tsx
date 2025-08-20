import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { asImageSrc } from '@prismicio/client';

import { createClient } from '@/prismicio';
import LoginForm from './components/FormComponents/LoginForm/LoginForm';
import AnalyzeField from './components/FormComponents/AnalyzeField/AnalyzeField';
import LogoutUser from './components/FormComponents/LogoutUser/LogoutUser';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('homepage').catch(() => notFound());

  return (
    <div
      style={{
        marginTop: '10rem',
        width: '24rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <LoginForm />
      <AnalyzeField />
      <LogoutUser />
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('homepage').catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? '' }],
    },
  };
}
