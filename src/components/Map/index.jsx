/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import SIZE from 'constants/size';
import { useEffect } from 'react';

const { kakao } = window;

function Map() {
  useEffect(function loadKakaoMap() {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <Wrap>
      <KakaoMap id="map" />
    </Wrap>
  );
}

const Wrap = styled.div`
  flex: 1.6;
  height: calc(100vh - ${SIZE.RESULT_PAGE_HEADER});
`;

const KakaoMap = styled.div`
  width: 100%;
  height: 100%;
`;

export default Map;
