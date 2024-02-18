import { useFetchListZustand } from '../zustand/fetchState.ts';

/** Zustand 상태에 비동기 통신 결과 저장 테스트
 */
const FetchZustand = () => {
  const { itemList, fetchGet } = useFetchListZustand();
  return (
    <div>
      {itemList.length && itemList.map((item, index) => <p key={`-${index}`}>{item.title}</p>)}
      <button onClick={fetchGet}>버튼 클릭</button>
    </div>
  );
};

export default FetchZustand;
