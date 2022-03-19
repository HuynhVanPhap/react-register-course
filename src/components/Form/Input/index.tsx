import * as Styled from "./styled";
import { PropsInputs } from "@types";

type Props = PropsInputs & {}

export const Input = (props: Props) => {
    return (
        <Styled.Layout>
            <Styled.TextField 
                label={props.label}
                margin={props.margin}
                size={props.size}
                fullWidth={props.fullWidth}
            />
        </Styled.Layout>
    );
}