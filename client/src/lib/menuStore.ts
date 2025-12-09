import { create } from 'zustand';

export interface SelectedMenuItem {
  name: string;
  category: string;
}

interface MenuStore {
  selectedItems: SelectedMenuItem[];
  addItem: (item: SelectedMenuItem) => void;
  removeItem: (name: string) => void;
  clearItems: () => void;
  isSelected: (name: string) => boolean;
}

export const useMenuStore = create<MenuStore>((set, get) => ({
  selectedItems: [],
  addItem: (item) =>
    set((state) => ({
      selectedItems: [...state.selectedItems, item],
    })),
  removeItem: (name) =>
    set((state) => ({
      selectedItems: state.selectedItems.filter((i) => i.name !== name),
    })),
  clearItems: () => set({ selectedItems: [] }),
  isSelected: (name) => get().selectedItems.some((i) => i.name === name),
}));
