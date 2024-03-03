import styled from 'styled-components';

export const MedicineItemStyle = styled.li`
  display: flex;
  width: 200px;
  padding: 12px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  border-radius: 14px;
border: 1px solid var(--color-button-hover)
`;

export const Img = styled.img`
  position: relative;
  display: block;
  overflow: hidden;  
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 14px;
`;

export const DescriptionWrap = styled.div`
  display: flex;
  width: 100%;
  height: 66px;
  flex-direction: column;
  gap: 8px;
`;

export const Price = styled.p`
font-weight: 700;
font-size: 14px;
align-self: flex-start;
`;

export const PriceQuantityWrap = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`;
