import { apiFetch } from './apiFetch.ts';
import { JSON_LIST } from './urls.ts';

export interface ItemType{
  "userId": number,
  "id": number,
  "title": string,
  "body": string
}

export async function fetchGetAllList(){
  return await apiFetch<ItemType[]>(JSON_LIST, 'get')
}
