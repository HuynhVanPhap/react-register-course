import { SyntheticEvent } from "react";
import { useState } from "react";
import * as Styled from "./styled";
import { Form } from '@components';
import { MenuItem } from '@components/Menu/MenuItem';

export const Menu = () => {
    const [value, setValue] = useState(0);
    const tabs = [
        {
            id: 0,
            label: "Form",
            component: <Form />
        },
        {
            id: 1,
            label: "List",
            component: <h1>List Component</h1>
        }
    ];

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Styled.MenuLayout>
            <Styled.Paper 
                elevation={6}
                sx={{
                    marginBottom: "15px",
                }}
            >
                <Styled.Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    {tabs.map((tab) => (
                        <Styled.Tab 
                            key={tab.id}
                            label={tab.label} 
                            id={`simple-tab-${tab.id}`}
                            aria-controls={`simple-tabpanel-${tab.id}`}
                        />
                    ))}
                </Styled.Tabs>
            </Styled.Paper>

            {tabs.map((tab) => (
                <MenuItem
                    key={tab.id}
                    value={value}
                    index={tab.id}
                >
                    {tab.component}
                </MenuItem>
            ))}
        </Styled.MenuLayout>
    );
}