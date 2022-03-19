import { styled } from "@mui/system";
import { 
    Stack,
    Paper,
    Box
} from "@mui/material";

export const LayoutList = styled(Box, {
    name: "LayoutList"
})({

});

export const Item = styled(Paper, {
    name: "Item"
})({
    height: "3.5em",
    display: "inline-flex"
});

export const Wrap = styled("div", {
    name: "Wrap"
})({
    width: "100%",
    height: "100%"
});

export const TextWrap = styled("div", {
    name: "TextWrap"
})({
    width: "65%",
    height: "100%",
    display: "flex"
});

export const TextItem = styled("p", {
    name: "TextItem"
})({
    marginLeft: "10px",
    width: "100%",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
});

export const ButtonWrap = styled("div", {
    name: "ButtonWrap"
})({
    padding: "5px 5px 5px 10px",
    display: "flex",
    justifyContent: "flex-end",
    width: "100%"
});

export {
    Stack
}