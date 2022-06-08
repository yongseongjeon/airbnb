/* eslint-disable operator-linebreak */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import SIZE from 'styles/size';
import { useContext, useEffect } from 'react';
import PRICE_MARKER from 'styles/customOverlay';
import { AccommodationContext } from 'store/AccommodationContext';

const { kakao } = window;
let map;

function Map() {
  const { accommodations } = useContext(AccommodationContext);

  useEffect(loadMap, [accommodations]);

  return (
    <Wrap>
      <KakaoMap id="map" />
      <ZoomController>
        <ZoomBtn onClick={() => map.setLevel(map.getLevel() - 1)}>
          <ZoomImg
            src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
            alt="확대"
          />
        </ZoomBtn>
        <ZoomBtn onClick={() => map.setLevel(map.getLevel() + 1)}>
          <ZoomImg
            src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
            alt="축소"
          />
        </ZoomBtn>
      </ZoomController>
    </Wrap>
  );

  function loadMap() {
    drawMap();
    drawPriceMarkers();

    function drawMap() {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(37.458925709771, 126.68308461192),
        level: 3,
      };
      map = new kakao.maps.Map(container, options);
    }

    function drawPriceMarkers() {
      const positions = accommodations.map(({ name, lat, lng, price }) => ({
        title: name,
        latlng: new kakao.maps.LatLng(lat, lng),
        content: `<div style="${PRICE_MARKER}">₩${price.toLocaleString()}</div>`,
      }));

      positions.forEach(({ latlng, content }) => {
        const customOverlay = new kakao.maps.CustomOverlay({
          map,
          position: latlng,
          content,
        });
      });
    }
  }
}

const Wrap = styled.div`
  flex: 1.6;
  height: calc(100vh - ${SIZE.RESULT_PAGE_HEADER});
  position: relative;
`;

const KakaoMap = styled.div`
  width: 100%;
  height: 100%;
`;

const ZoomController = styled.div`
  position: absolute;
  top: 50px;
  right: 10px;
  width: 36px;
  height: 80px;
  overflow: hidden;
  z-index: 1;
  background-color: #f5f5f5;
`;

const ZoomBtn = styled.button`
  display: block;
  width: 36px;
  height: 40px;
  text-align: center;
  cursor: pointer;

  &:first-child {
    border-bottom: 1px solid #bfbfbf;
  }
`;

const ZoomImg = styled.img`
  width: 15px;
  height: 15px;
  border: none;
  margin: auto auto;
`;

export default Map;
