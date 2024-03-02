import { Button } from "components/PharmacyList/PharmacyList.styled";
import { DescriptionWrap, Img, MedicineItemStyle, Price } from "./MedicineItem.styled";
import { addShoppingCart, deleteShoppingCart } from "../../redux/shoppingCart/shoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectBasket } from "../../redux/selectors";


export const MedicineItem = ({ drug }) => {
    const dispatch = useDispatch();
        const inBasket = useSelector(selectBasket);

    const { img, medicine, description, price, id } = drug;
    const [inCart, setInCart] = useState(false);

      useEffect(() => {
        if (inBasket?.some(item => item.id === id)) {
            setInCart(true);
        } else { setInCart(false) }
    }, [inBasket, id]);

    const onClickCard = () => {
        inCart ? dispatch(deleteShoppingCart(id)) : dispatch(addShoppingCart(drug))
        setInCart(!inCart);
    };

    return (
                    <MedicineItemStyle>
                    <Img src={img ?
                        img :
                        'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'}
                        alt={medicine} />
            <DescriptionWrap>
                <h3>{medicine}</h3>
                <p>{description}</p>
            </DescriptionWrap>
                <Price>{price}</Price>
            <Button onClick={onClickCard}>{inCart ? 'Delete from Cart' : 'Add to Cart'}</Button>
                    </MedicineItemStyle>
    )
};