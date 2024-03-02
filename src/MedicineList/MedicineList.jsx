import { useSelector } from "react-redux";
import { selectFilterMedicineByShop } from "../redux/selectors";
import { MedicineBlock, MedicineListStyled } from "./MedicineList.styled";
import { MedicineItem } from "components/MedicineItem/MedicineItem";

export const MedicineList = () => {
    const filterMedicineByShop = useSelector(selectFilterMedicineByShop);
    console.log('filterMedicineByShop', filterMedicineByShop[0]);
    const { pharmacy } = filterMedicineByShop[0] || '';

    return (
        <MedicineBlock>
            {filterMedicineByShop?.length > 0 &&
                <>
                    <h2>Drugs in {pharmacy}</h2>
                    <MedicineListStyled>
                        {filterMedicineByShop.map(medicine =>
                            <MedicineItem key={medicine.id} drug={medicine} />)}
                    </MedicineListStyled>
                </>}
        </MedicineBlock>
    )
};