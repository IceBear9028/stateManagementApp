import { apiFetch } from './apiFetch.ts';
import { JSON_LIST } from './urls.ts';

export interface ItemType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// fetching 속도가 너무 빨라서 의도적으로 타임 딜레이 추가
export function fetchGetAllList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(apiFetch<ItemType[]>(JSON_LIST, 'get'));
    }, 1000);
  });
}
