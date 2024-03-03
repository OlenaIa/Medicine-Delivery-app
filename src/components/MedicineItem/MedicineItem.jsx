import { Button } from "components/PharmacyList/PharmacyList.styled";
import { DescriptionWrap, Img, MedicineItemStyle, Price, PriceQuantityWrap } from "./MedicineItem.styled";
import { addShoppingCart, deleteShoppingCart } from "../../redux/shoppingCart/shoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectBasket } from "../../redux/selectors";


export const MedicineItem = ({ drug, children }) => {
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
        const newDrugObj = Object.assign({ quantity: 1 }, drug);
        inCart ? dispatch(deleteShoppingCart(id)) : dispatch(addShoppingCart(newDrugObj))
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
            <PriceQuantityWrap>
                <Price>{price}</Price>
                            {children}
            </PriceQuantityWrap>
            <Button onClick={onClickCard}>{inCart ? 'Delete from Cart' : 'Add to Cart'}</Button>
                    </MedicineItemStyle>
    )
};