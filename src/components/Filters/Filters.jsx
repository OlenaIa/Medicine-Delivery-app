import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select';
import { sortSet } from "../../redux/filter/filterSlice";
import { selectSort } from "../../redux/selectors";

export const Filters = () => {
    const dispatch = useDispatch();
    const sort = useSelector(selectSort);

    const options = [
        { value: 'all', label: 'Unsorted data' },
        { value: 'price', label: 'Sort by price' },
        { value: 'alphabet', label: 'Sort by alphabet' }
    ];

    return (
        <Select
            onChange={(selectedOption) => dispatch(sortSet(selectedOption))}
            options={options}
            placeholder='Sort by'
            value={sort}
        />
    )
};