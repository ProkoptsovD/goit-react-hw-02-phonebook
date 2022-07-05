import { Label, StyledInput } from "./FormField.styled";

const FormField = ({ fieldName, name, ...restProps }) => {
    return (
        <>
            <Label
                htmlFor={name}
            >
                {fieldName}
            </Label>
            <StyledInput
                id={name}
                name={name}
                {...restProps}
            />
        </>
    )
}

export default FormField;