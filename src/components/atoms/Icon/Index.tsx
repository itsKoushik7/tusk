import React from 'react';
import {  Box, styled } from '@mui/material';

interface IconAtomProps {
  iconPath: string;
  isActive: boolean;
  iconAlt :string,
}

const StyledBox = styled(Box)({
  backgroundColor:'#F5F5F5',
  borderRadius : '50%',
  paddingTop: '2px',
  paddingLeft: '2px',
  paddingRight: '2px',
})

const IconAtom: React.FC<IconAtomProps> = ({ iconPath, isActive,iconAlt }) => {
  
  return (
    <StyledBox>
        <img  src={iconPath} alt={iconAlt} className="logo-img" />
    </StyledBox>
  );
};

export default IconAtom;















 // const StyledImg = styled('img')<{ isActive: boolean }>(({ isActive }) => ({
  //   filter: isActive ? 'invert(54%) sepia(79%) saturate(1640%) hue-rotate(134deg) brightness(101%) contrast(101%)' : 'none',
  //   width: '100%',
  //   height: '100%',
  //   objectFit: 'contain',
  // }));