import { styled } from "@mui/system";
import { 
    Grid,
    Paper,
    FormControl,
    TextField,
    Box
} from "@mui/material";

export const FormLayout = styled(Box, {
    name: "FormLayout"
})(() => ({
}));

export const FormContent = styled(Box, {
    name: "FormContent"
})(() => ({
    width: "100%"
}));

export {
    Grid,
    Paper,
    FormControl,
    TextField
}