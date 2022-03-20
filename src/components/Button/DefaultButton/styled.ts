import { styled } from "@mui/system";
import {
    Button,
    Box
} from '@mui/material';

// value nên kiểu giá trị strinh hoặc number
const needDefault = (value: any) => {
    return (typeof value === 'undefined') && ("");
}

export const ButtonLayout = styled(Box, {
    name: "ButtonLayout"
})(() => ({
    
}));

export {
    Button
}