import { useDispatch } from 'react-redux';
import { updateShoppingCart } from '../../redux/shoppingCart/shoppingCartSlice';
import { InputQuantity } from './Counter.styled';

export const Counter = ({ drug }) => {
    const dispatch = useDispatch();

    const onChangeQuantity = (e) => {
        dispatch(updateShoppingCart({ quantity: parseInt(e.target.value), id: drug.id }))
    };

    return (
        <InputQuantity
            type="number"
            value={drug.quantity}
            onChange={onChangeQuantity}
            min="1"
            step="1"
        />
    )
};