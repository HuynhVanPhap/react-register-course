import { FC } from "react";
import * as Styled from "./styled";

type Props = {
    value?: number,
    index?: number,
}

export const MenuItem: FC<Props> = (props) => {
    const { value, index } = props;

    return (
        <Styled.MenuItemLayout>
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
            >
                {value === index && (
                <Styled.Box>
                    {props.children}
                </Styled.Box>
                )}
            </div>
        </Styled.MenuItemLayout>
    );
}