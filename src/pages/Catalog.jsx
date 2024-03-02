import { Filters } from "components/Filters/Filters";
import { Container, PharmacyMedicineWrap, Section } from "./Page.styled";
import { PharmacyList } from "components/PharmacyList/PharmacyList";
import { MedicineList } from "MedicineList/MedicineList";

const Catalog = () => {
    return (
        <>
            <Section>
                <Container $top='50px'>
                    <Filters />
                </Container>
            </Section>
            <PharmacyMedicineWrap>
                <PharmacyList />
                <MedicineList/>
            </PharmacyMedicineWrap>
        </>
    )
};

export default Catalog;