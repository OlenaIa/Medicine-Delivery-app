import { useSelector } from "react-redux";
import { selectFilterMedicineByShop, selectSort } from "../redux/selectors";
import { MedicineBlock, MedicineListStyled } from "./MedicineList.styled";
import { MedicineItem } from "components/MedicineItem/MedicineItem";
import { EmptyPage } from "pages/Page.styled";

export const MedicineList = () => {
    const filterMedicineByShop = useSelector(selectFilterMedicineByShop);
    const { pharmacy } = filterMedicineByShop[0] || '';
    const sortMethod = useSelector(selectSort);

    let visibleMedicines = [...filterMedicineByShop];

    if (sortMethod?.value === 'price') {
        visibleMedicines.sort((a, b) => a.price - b.price)
    }

    if (sortMethod?.value === 'alphabet') {
        visibleMedicines.sort((a, b) => a.medicine.localeCompare(b.medicine))
    }

    if (sortMethod?.value === 'all') {
        visibleMedicines = [...filterMedicineByShop];
    }

    return (
        <MedicineBlock>
            {filterMedicineByShop?.length > 0 ?
                <>
                    <h2>Drugs in {pharmacy}</h2>
                    <MedicineListStyled>
                        {visibleMedicines.map(medicine =>
                            <MedicineItem key={medicine.id} drug={medicine} />)}
                    </MedicineListStyled>
                </> :
                <MedicineListStyled>
                    <EmptyPage>
                        <p>Please, select pharmacy.</p>
                    </EmptyPage>
                </MedicineListStyled>
            }
        </MedicineBlock>
    )
};