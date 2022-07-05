import styled, { css } from "styled-components";

const commonCss = css`
    display: block;
`;

export const Label = styled.label`
    ${commonCss}
    margin-bottom: ${({ theme }) => theme.spacing(2)};
`;
export const StyledInput = styled.input`
    ${commonCss}
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    padding: ${({ theme }) => theme.spacing(2, 0, 2, 2)};
    border: 1px solid #cccccc;
    border-radius: 10px;

    &:focus-within {
        outline: 1px solid lightblue;
    }
`;
