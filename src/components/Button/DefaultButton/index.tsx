import * as Styled from "./styled";

interface Props {
    text?: string,
    icon?: {}
}

export const DefaultButton = (props: Props) => {
    return (
        <Styled.ButtonLayout>
            <Styled.Button variant="contained" endIcon={props.icon}>
                {props.text}
            </Styled.Button>
        </Styled.ButtonLayout>
    );
}