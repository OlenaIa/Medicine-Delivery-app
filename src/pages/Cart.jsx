import { CartPriceWrap, Container, EmptyPage, Section } from "./Page.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectBasket } from "../redux/selectors";
import { Link } from 'react-router-dom';
import { MedicineListStyled } from "MedicineList/MedicineList.styled";
import { MedicineItem } from "components/MedicineItem/MedicineItem";
import { Form } from "components/Form/Form";
import { FormCartWrap } from "components/Form/Form.styled";
import { Counter } from "components/Counter/Counter";
import { Button } from "components/PharmacyList/PharmacyList.styled";
import { useState } from "react";
import { options, postOrder } from "../redux/shoppingCart/orderThank";
import { resetShoppingCart } from "../redux/shoppingCart/shoppingCartSlice";
import { Notify } from "notiflix";

const Cart = () => {
    const dispatch = useDispatch();
    const inBasket = useSelector(selectBasket);
    const [user, setUser] = useState(null);

    const totalPrice = inBasket?.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity),
        0,);

    const returnUser = (user) => {
        setUser(user)
    }
    
    const onClickSubmit = () => {
        const { name, email, tel, address } = user;
        if (name === '' || email === '' || tel === '' || address === '') {
            Notify.failure(`Please, fill in all fields of the form`, options);
            return;
        }
        const newOrder = {
            inBasket,
            user,
            createDate: new Date()
        };
        postOrder(newOrder)
        resetOrder();
    }

    const resetOrder = () => {
        dispatch(resetShoppingCart());
        setUser(null);
    };

    return (
        <Section>
            <Container>
                <FormCartWrap>
                    <Form returnUser={returnUser} user={user} />
                    {(inBasket?.length > 0) ?
                        <CartPriceWrap>
                            <MedicineListStyled>
                                {inBasket?.map(medicine =>
                                    <MedicineItem key={medicine.id} drug={medicine} >
                                        <Counter drug={medicine} />
                                    </MedicineItem>
                                )}
                            </MedicineListStyled>
                            <h2>Total price: {totalPrice} €</h2>
                            <Button type="submit" onClick={onClickSubmit}>Submit</Button>
                        </CartPriceWrap> :
                        <MedicineListStyled>
                            <EmptyPage>
                                <p>
                                    Please, select medicine on <Link to="/">Pharmacies</Link> page!
                                </p>
                            </EmptyPage>
                        </MedicineListStyled>}
                </FormCartWrap>
            </Container>
        </Section>
    )
};

export default Cart;