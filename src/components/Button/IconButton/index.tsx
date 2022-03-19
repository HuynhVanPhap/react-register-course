import * as Styled from "./styled";

interface Props {
    icon: {},
    isDisabled?: boolean
}

export const IconButton = (props: Props) => {
    return (
        <Styled.ButtonLayout>
            <Styled.Button disabled={props.isDisabled} >
                {props.icon}
            </Styled.Button>
        </Styled.ButtonLayout>
    );
}