import * as Styled from "./styled";

type Props = {
    name: string,
}

export const Title = (props: Props) => {
    return (
        <Styled.Layout>
            <Styled.Typography align="center" variant="h4">
                {props.name}
            </Styled.Typography>
        </Styled.Layout>
    );
}