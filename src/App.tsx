import React from "react";

import SideBar from "./components/organisms/SideBar/Index";
import './App.css';
import { ThemeProvider } from "@mui/material";
import Theme from "./themes/Index";


const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <SideBar></SideBar>
    </ThemeProvider>
   
  )
}

export default App;