import { create } from 'zustand';
import { fetchGetAllList, ItemType } from '../fetch/testFetch.ts';

/** 참조
 * https://www.rldnrl.dev/blog/zustand
 */
export const useFetchListZustand = create<ItemType[]>((set) => ({
  itemList: [],
  fetchGet: async () => {
    const { data, status } = await fetchGetAllList();
    if (status === 'success') set({ itemList: [...data] });
  },
}));
