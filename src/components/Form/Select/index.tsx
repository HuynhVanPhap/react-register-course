import * as Styled from "./styled";
import { PropsInputs } from "@types";

interface SelectItem {
    id: number,
    name: string
}

type Props = PropsInputs & {
    items: SelectItem[]
}

export const Select = (props: Props) => {
    return (
        <Styled.Layout>
            <Styled.FormControl 
                fullWidth={props.fullWidth}
                margin={props.margin}
                size={props.size}
            >
            <Styled.InputLabel 
                id="demo-simple-select-label"
            >
                {props.label}
            </Styled.InputLabel>
            <Styled.Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label={props.label}
                // onChange={handleChange}
            >
                {props.items.map((item) => (
                    <Styled.MenuItem value={item.id} key={item.id}>{item.name}</Styled.MenuItem>
                ))}
            </Styled.Select>
            </Styled.FormControl>
        </Styled.Layout>
    );
}