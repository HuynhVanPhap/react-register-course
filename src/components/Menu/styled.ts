import { styled } from "@mui/system";
import {
    Paper,
    Box,
    Tabs,
    Tab
} from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export const MenuLayout = styled(Box, {
    name: "MenuLayout"
})(() => ({
    padding: "10px 10px 10px 10px",
    marginTop: "25px"
}));

export {
    Paper,
    Tabs,
    Tab,
    TabContext,
    TabList,
    TabPanel
}

