import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  margin: 0 auto;
  padding: 0px 30px;
  margin-bottom: 20px;
  margin-top: 0px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0px 50px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0px 128px;
    margin-bottom: 50px;
  }
`;

export const EmptyPage = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  color: var(--color-text-main);
  margin: 0 auto;
`;

export const PharmacyMedicineWrap = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const CartPriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: end;
`;
