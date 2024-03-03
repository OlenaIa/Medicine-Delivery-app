import { CartPriceWrap, Container, EmptyPage, Section } from "./Page.styled";
import { useSelector } from "react-redux";
import { selectBasket } from "../redux/selectors";
import { Link } from 'react-router-dom';
import { MedicineListStyled } from "MedicineList/MedicineList.styled";
import { MedicineItem } from "components/MedicineItem/MedicineItem";
import { Form } from "components/Form/Form";
import { FormCartWrap } from "components/Form/Form.styled";
import { Counter } from "components/Counter/Counter";
import { Button } from "components/PharmacyList/PharmacyList.styled";

const Favorite = () => {
    const inBasket = useSelector(selectBasket);

        const totalPrice = inBasket?.reduce(
  (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity),
            0,);
    
    const onClickSubmit = (user) => {
        console.log('inBasket', inBasket);
    }

    return (
        <Section>
            <Container>
                <FormCartWrap>
                    <Form/>
                    {(inBasket?.length > 0) ?
                        <CartPriceWrap>
                            <MedicineListStyled>
                                {inBasket?.map(medicine =>
                                    <MedicineItem key={medicine.id} drug={medicine} >
                                        <Counter drug={medicine} />
                                    </MedicineItem>
                                )}
                            </MedicineListStyled>
                            <h2>Total price:{totalPrice}</h2>
                                          <Button type="submit" onClick={onClickSubmit}>Submit</Button>

                        </CartPriceWrap> :
                        <EmptyPage>
                            <p>
                                Please select medicine <Link to="/catalog">Сatalog</Link>.
                            </p>
                        </EmptyPage>}
                </FormCartWrap>
            </Container>
        </Section>
    )
};

export default Favorite;