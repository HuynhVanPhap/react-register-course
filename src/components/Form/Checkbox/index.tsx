import * as Styled from "./styled";
import { PropsInputs } from "@types";

interface MenuItem {
    name: string,
    value: string | number
}

type Props = PropsInputs & {
    items: MenuItem[]
}

export const Checkbox = (props: Props) => {
    return (
        <Styled.Layout>
            <Styled.FormControl component="fieldset">
                <Styled.FormLabel component="legend">
                    {props.label}
                </Styled.FormLabel>
                <Styled.FormGroup aria-label="position" row>
                    {props.items.map((item) => (
                        <Styled.FormControlLabel
                            key={item.name}
                            value={item.value}
                            control={<Styled.Checkbox />}
                            label={item.name}
                            labelPlacement="start"
                        />
                    ))}
                </Styled.FormGroup>
            </Styled.FormControl>
        </Styled.Layout>
    );
}