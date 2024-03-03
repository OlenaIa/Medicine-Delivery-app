import styled from 'styled-components';

export const FormCartWrap = styled.div`
  display: flex;
  gap: 20px;
  `;

export const UserForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
  border: 1px solid var(--color-button-hover);
padding: 12px;
    border-radius: 14px;
  height: 372px;

  `;

export const LabelForm = styled.label`
display: flex;
flex-direction: column;
gap: 8px;
align-items: start;
 `;

 export const InputForm = styled.input`
  width: 250px;
  height: 40px;
  padding: ${props => props.$padding || '8px 14px 8px 14px'};
  border-radius: ${props => props.$radius || '14px'};
  border: none;
  background-color: var(--color-filter-field);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.11;

  &:invalid {
    border: 1px solid red;
  }

  &:invalid + span::after {
    position: absolute;
    bottom: -20px;
    left: 0;
    content: "Only 5 digits. Min - 1 km";
    color: red;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
}
`;
