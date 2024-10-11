import React from "react";
import IconText from "../../molecules/IconText/Index";
import { MENU_ITEMS_1, MENU_ITEMS_2 } from "../../../utils/constants/Index";
import { useState } from "react";
import { Divider, Stack, styled, ThemeProvider } from "@mui/material";
import Theme from "../../../themes/Index";

const StyledStack = styled(Stack)({
paddingTop : '20px',
  width: '270px',
  display:'flex',
  flexDirection: 'column',
  gap:'16px',
})
const StyledDivider = styled(Divider) ({
  width : '200px',
})


const SideBar : React.FC   = () => {

    const [activeIndex, setActiveIndex] = useState<number>(2); 
    const handleItemClick = (id: number) => {
      setActiveIndex(id); 
    };

    return (
        <ThemeProvider theme={Theme}>
            <StyledStack>
                  {MENU_ITEMS_1.map((menuItem,index) => (
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
            {MENU_ITEMS_2.map((menuItem,index) => (
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