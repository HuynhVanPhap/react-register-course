import * as Styled from "./styled";
import { DeleteIcon, ModeEditIcon, RemoveRedEyeIcon, FemaleIcon, MaleIcon } from "@icons";
import { IconButton } from "@components";
import { students } from "./dumbData";

export const List = () => {
    return (
        <Styled.LayoutList>
            <Styled.Stack spacing={1}>
                {students.map((student) => (
                    <Styled.Item elevation={2} key={student.id}>
                        <Styled.TextWrap>
                            <Styled.TextItem>{student.name}</Styled.TextItem>
                        </Styled.TextWrap>

                        <Styled.ButtonWrap>
                            <IconButton
                                isDisabled={true}
                                icon={ (student.gender === 'male') ? 
                                    <MaleIcon color="primary" /> : 
                                    <FemaleIcon sx={{ color: "#E05C82" }} /> 
                                }
                            />
                            <IconButton icon={ <RemoveRedEyeIcon /> }/>
                            <IconButton icon={ <ModeEditIcon /> }/>
                            <IconButton icon={ <DeleteIcon /> }/>
                        </Styled.ButtonWrap>
                    </Styled.Item>
                ))}
            </Styled.Stack>
        </Styled.LayoutList>
    );
}