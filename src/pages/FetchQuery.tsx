import { useQuery } from 'react-query';
import { fetchGetAllList } from '../fetch/testFetch.ts';

/** react-query 상태에 비동기 통신 결과 저장 테스트
 */
const FetchQuery = () => {
  const { isFetching, data, refetch } = useQuery('fetchList', fetchGetAllList, { enabled: false });
  return (
    <div>
      <button onClick={() => refetch()}>클릭</button>
      {isFetching && <p>로딩 중</p>}
      {data && data.data?.map((item, index) => <p key={`-${index}`}>{item.title}</p>)}
    </div>
  );
};

export default FetchQuery;
