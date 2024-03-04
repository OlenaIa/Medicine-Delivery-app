import styled from 'styled-components';

export const MedicineBlock = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`;

export const MedicineListStyled = styled.ul`
    display: flex;
    align-items: start;
    gap: 24px;
    padding: 12px;
    flex-wrap: wrap;
    height: 372px;
    width: 100%;
    overflow-y: auto;
    border: 1px solid var(--color-button-hover);
    border-radius: 14px;
`;
