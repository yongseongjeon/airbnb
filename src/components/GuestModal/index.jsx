import styled from 'styled-components';
import SearchBarModal from 'components/Modal/SearchBarModal';
import GuestSettingForm from './GuestSettingForm';

const GUEST_SETTING_FORMS = [
  { type: 'adult', title: '성인', titleInfo: '만 13세 이상' },
  { type: 'child', title: '어린이', titleInfo: '만 2세~12세' },
  { type: 'infant', title: '유아', titleInfo: '만 2세 미만' },
];

function GuestModal() {
  return (
    <SearchBarModal padding="64px" borderRadius="40px">
      <Wrap>
        {GUEST_SETTING_FORMS.map(({ type, title, titleInfo }) => (
          <GuestSettingForm type={type} title={title} titleInfo={titleInfo} />
        ))}
      </Wrap>
    </SearchBarModal>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export default GuestModal;
