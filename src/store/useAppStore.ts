import { create } from 'zustand';

interface AppState {
  selectedModuleId: string;
  setSelectedModuleId: (id: string) => void;
  selectedBrandId: string;
  setSelectedBrandId: (id: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedModuleId: 'llm_visibility',
  setSelectedModuleId: (id) => set({ selectedModuleId: id }),
  selectedBrandId: 'acme_corp',
  setSelectedBrandId: (id) => set({ selectedBrandId: id })
}));
