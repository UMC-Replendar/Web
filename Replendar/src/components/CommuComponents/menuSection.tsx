import { useState } from 'react';
import styled from 'styled-components';

import MenuContent from './menuContent';
import DownArrowIcon from '../../assets/images/DownArrowIcon.svg';
import UpArrowIcon from '../../assets/images/UpArrowIcon.svg';

interface MenuSectionProps {
  title: string;
  menuItems: string[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, menuItems }) => {
  const [menuState, setMenuState] = useState({
    activeMenu: menuItems[0],
    expanded: false,
  });

  const handleMenuClick = (menu: string) =>
    setMenuState({ activeMenu: menu, expanded: false });

  const handleExpandClick = () =>
    setMenuState((prevState) => ({
      ...prevState,
      expanded: !prevState.expanded,
    }));

  return (
    <div>
      <Gaph2>{title}</Gaph2>
      <SpaceBtwDiv>
        <BtnContainer>
          {menuItems.map((menu) => (
            <CustomBtn key={menu} onClick={() => handleMenuClick(menu)}>
              {menu}
            </CustomBtn>
          ))}
        </BtnContainer>
        <FlexDiv onClick={handleExpandClick}>
          {menuState.expanded ? '닫기' : '더보기'}
          <img
            src={menuState.expanded ? UpArrowIcon : DownArrowIcon}
            alt={menuState.expanded ? 'Up Arrow' : 'Down Arrow'}
          />
        </FlexDiv>
      </SpaceBtwDiv>
      <StyledDiv>
        <MenuContent
          menuState={menuState.activeMenu}
          expanded={menuState.expanded.toString()}
        ></MenuContent>
      </StyledDiv>
    </div>
  );
};

export default MenuSection;
const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 16px;
  gap: 6px;
`;
const StyledDiv = styled.div`
  background: rgba(252, 246, 245, 1);
  width: 95%;

  border-radius: 20px;
  box-shadow: 0px 5px 15.7px 0px rgba(177, 198, 187, 0.4);

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const CustomBtn = styled.button`
  background: rgba(243, 243, 243, 1);
  width: 135px;
  height: 38px;
  border-radius: 50px;
  border: none;
  font-size: 16px;
  color: rgba(102, 102, 102, 1);
  padding: 0px;
  box-shadow: 0px 5px 15.7px 0px rgba(177, 198, 187, 0.4);
  margin-bottom: 15px;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Gaph2 = styled.h2`
  margin: 0px 0px 30px 0px;
`;
const SpaceBtwDiv = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`;
