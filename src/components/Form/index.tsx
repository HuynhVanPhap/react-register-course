import * as Styled from "./styled";
import { Select } from "@components/Form/Select";
import { Input } from "@components/Form/Input";
import { Checkbox } from "@components/Form/Checkbox";
import { dumbData } from "./dumbData";

export const Form = () => {
    return (
        <Styled.FormLayout>
            <Styled.FormContent component="form">
                <Input
                    label="Name"
                    size="small"
                    margin="dense"
                    fullWidth
                />
                
                <Styled.Grid container spacing={1}>
                    <Styled.Grid item xs={7}>
                        <Styled.TextField
                            margin="dense"
                            size="small"
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            
                        />
                    </Styled.Grid>
                    <Styled.Grid item xs={5}>
                        <Select 
                            label="Genders"
                            size="small"
                            margin="dense"
                            fullWidth
                            items={dumbData.selects}
                        />
                    </Styled.Grid>
                </Styled.Grid>

                <Input
                    label="Address"
                    size="small"
                    margin="dense"
                    fullWidth
                />

                <Input
                    label="CMD"
                    size="small"
                    margin="dense"
                    fullWidth
                />

                <Input
                    label="Phone"
                    size="small"
                    margin="dense"
                    fullWidth
                />

                <Checkbox 
                    label="Learning Leanguage"
                    items={dumbData.checkboxs}
                />
            </Styled.FormContent>
        </Styled.FormLayout>
    );
}