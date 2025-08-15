import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { asImageSrc } from '@prismicio/client';

import { createClient } from '@/prismicio';
import LoginForm from './components/FormComponents/LoginForm/LoginForm';
import AnalyzeField from './components/FormComponents/AnalyzeField/AnalyzeField';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('homepage').catch(() => notFound());

  return (
    <div style={{ marginTop: '5rem', width: '24rem' }}>
      <LoginForm />
      <AnalyzeField />
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
