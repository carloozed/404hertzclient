import { User } from '../../../../../lib/types/user';

import { AnalyzeStoreProps } from '../../../../../stores/UseAnalyzeStore';

import { analyze } from '../../../../../lib/api/analyze';

export type AnalyzeMixProps = AnalyzeStoreProps & {
  e: React.FormEvent<HTMLFormElement>;
  user: User | null;
  url: string;
};

const analyzeMix = async ({
  e,
  isAnalyzing,
  user,
  setIsAnalyzing,
  setResponse,
  response,
  url,
}: AnalyzeMixProps) => {
  e.preventDefault();
  if (isAnalyzing || !user) return;

  setIsAnalyzing(true);

  try {
    const data = await analyze(url);
    console.log('response, response', response);
    setResponse(data);
  } catch (err) {
    console.error('AnalyzeError:', err);
  } finally {
    setIsAnalyzing(false);
  }
};

export default analyzeMix;
