import React  from "react";
import TypographAtom from "../../atoms/Typography/Index";
import IconAtom from "../../atoms/Icon/Index";
import {  styled,Stack } from "@mui/material";

interface IconTextProps {
    iconPath : string,
    label : string,
    onClick: () => void;
    isActive: boolean;
    iconAlt : string,
}

const StyledStack = styled(Stack)<{isActive : boolean}>(({theme, isActive}) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingLeft: '42px',
    height : '48px', 
    gap: '4px',
    backgroundColor: isActive ? '#E8FFFC' : 'transparent',
    '&:hover': {
        backgroundColor : '#E8FFFC',
    },   
    cursor:'pointer',
}))

const IconText : React.FC <IconTextProps> = ({iconPath, label, onClick, isActive, iconAlt}) => {
    
    return (
        <StyledStack onClick={onClick} isActive={isActive} >
            <IconAtom iconPath={iconPath} isActive={isActive} iconAlt={iconAlt}/>
            <TypographAtom labelData={label} variants="body2" isActive={isActive}></TypographAtom>
        </StyledStack>   
    )
}
export default IconText;