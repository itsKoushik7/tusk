import React from "react";
import { styled, Typography } from '@mui/material';

interface TypographyProps {
  labelData: string;  
  variants: 'body2'; 
  isActive: boolean; 
}

const StyledTypography = styled(Typography)<{ isActive: boolean }>(({ theme, isActive }) => ({
  color: isActive ? '#1B877A' : '#373C38',
  fontWeight: isActive ? 600 : 500,
}));

const TypographyAtom: React.FC<TypographyProps> = ({ labelData, variants, isActive }) => {
  return (
    <StyledTypography variant={variants} isActive={isActive}>
      {labelData}
    </StyledTypography>
  );
}

export default TypographyAtom;
