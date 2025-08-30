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
  url,
}: AnalyzeMixProps) => {
  e.preventDefault();
  if (isAnalyzing || !user) return;

  setIsAnalyzing(true);

  const pollInterval = 2000;
  const totalDuration = 35000;
  let elapsedTime = 0;

  const fetchData = async () => {
    try {
      const data = await analyze(url);
      console.log('response, response', data);
      setResponse(data);
    } catch (err) {
      console.error('AnalyzeError:', err);
    }
  };

  // Initial fetch
  await fetchData();

  const intervalId = setInterval(async () => {
    elapsedTime += pollInterval;

    if (elapsedTime >= totalDuration) {
      clearInterval(intervalId);
      setIsAnalyzing(false);
      return;
    }

    await fetchData();
  }, pollInterval);
};

export default analyzeMix;
