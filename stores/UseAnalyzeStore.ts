import { create } from 'zustand';
import { AnalyzeResponse } from '../lib/types/analyze';

type AnalyzeStoreProps = {
  isAnalyzing: boolean;
  setIsAnalyzing: (isAnalyzing: boolean) => void;
  response: AnalyzeResponse | null;
  setResponse: (response: AnalyzeResponse) => void;
};

export const useAnalyzeStore = create<AnalyzeStoreProps>((set) => ({
  // Analyzing Processing
  isAnalyzing: false,
  setIsAnalyzing: (isAnalyzing: boolean) => set({ isAnalyzing }),

  // Responses
  response: null,
  setResponse: (response: AnalyzeResponse) => set({ response }),
}));
