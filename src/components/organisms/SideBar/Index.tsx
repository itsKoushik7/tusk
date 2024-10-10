import React from "react";
import IconText from "../../molecules/IconText/Index";
import Constants from '../../../utils/constants/Index';
import Data from '../../../utils/constants/SecondData';
import { useState } from "react";
import { Divider, Stack, styled, ThemeProvider } from "@mui/material";
import Theme from "../../../themes/MyTheme";


const StyledStack = styled(Stack)({
  width: '270px',
  display:'flex',
  flexDirection: 'column',
})

const SideBar : React.FC   = () => {

    const [activeIndex, setActiveIndex] = useState<number>(2); 
    const handleItemClick = (id: number) => {
      setActiveIndex(id); 
    };
    const StyledDivider = styled(Divider) ({
      width : '200px',
    })
    
    return (
        <ThemeProvider theme={Theme}>
            <StyledStack>
                  {Constants.map((menuItem,index) => (
              <IconText      
                iconPath={menuItem.icon}  
                label={menuItem.label}
                isActive={activeIndex === menuItem.id}
                onClick={ () => handleItemClick(menuItem.id)}
                iconAlt={menuItem.label}/> 
            ))}
            </StyledStack>
            <StyledStack>
            <StyledDivider variant="middle"></StyledDivider>
            {Data.map((menuItem,index) => (
               <IconText      
               iconPath={menuItem.icon}  
               label={menuItem.label}
               isActive={activeIndex === menuItem.id}
               onClick={ () => handleItemClick(menuItem.id)}
               iconAlt={menuItem.label}
             />
            ))}
            </StyledStack>
        </ThemeProvider>
    )
}

export default SideBar;