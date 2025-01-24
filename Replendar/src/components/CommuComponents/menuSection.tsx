import { useState } from 'react';
import styled from 'styled-components';
import { MoreIcon } from './commuIcons';
import { CloseIcon } from './commuIcons';
import MenuContent from './menuContent';

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
    <>
      <Gaph2>{title}</Gaph2>
      <SpaceBtwDiv>
        <BtnContainer>
          {menuItems.map((menu) => (
            <CustomBtn key={menu} onClick={() => handleMenuClick(menu)}>
              {menu}
            </CustomBtn>
          ))}
        </BtnContainer>
        {menuState.expanded ? (
          <CloseIcon onClick={handleExpandClick} />
        ) : (
          <MoreIcon onClick={handleExpandClick} />
        )}
      </SpaceBtwDiv>
      <StyledDiv>
        <MenuContent
          menuState={menuState.activeMenu}
          expanded={menuState.expanded.toString()}
        ></MenuContent>
      </StyledDiv>
    </>
  );
};

export default MenuSection;

const StyledDiv = styled.div`
  background: rgba(252, 246, 245, 1);
  width: 100%;

  border-radius: 20px;
  box-shadow: 0px 5px 15.7px 0px rgba(177, 198, 187, 0.4);
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const CustomBtn = styled.button`
  background: rgba(243, 243, 243, 1);
  width: 100px;
  height: 30px;
  border-radius: 50px;\
border:none;
font-size:10px;
color:rgba(102, 102, 102, 1);
padding:0px;
box-shadow: 0px 5px 15.7px 0px rgba(177, 198, 187, 0.4);
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Gaph2 = styled.h2`
  padding: 10px 0px;
  margin: 0px;
`;
const SpaceBtwDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
