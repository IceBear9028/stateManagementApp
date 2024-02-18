import { create } from 'zustand';
import { fetchGetAllList, ItemType } from '../fetch/testFetch.ts';

/** 참조
 * https://www.rldnrl.dev/blog/zustand
 */

interface FetchZustand {
  itemList: ItemType[];
  fetchGet: () => Promise<void>;
}

export const useFetchListZustand = create<FetchZustand>((set) => ({
  itemList: [],
  isLoading: false,
  fetchGet: async () => {
    const { data, status } = await fetchGetAllList();
    if (status === 'success') set({ itemList: [...data] });
    if (status === 'fail') set({ itemList: [] });
  },
}));
