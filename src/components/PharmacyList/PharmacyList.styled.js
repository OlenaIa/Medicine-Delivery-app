import styled from 'styled-components';

export const PharmacyBlock = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`;

export const PharmacyListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const PharmacyItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  width: 150px;
  height: 48px;
  padding: 14px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background: var(--color-button);
  color: var(--color-text-button-and-back);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  &:hover,
  &:focus {
    background: var(--color-button-hover);
  }
`;
