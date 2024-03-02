import { Container, EmptyPage, Section } from "./Page.styled";
import { useSelector } from "react-redux";
import { selectBasket } from "../redux/selectors";
import { Link } from 'react-router-dom';
import { MedicineListStyled } from "MedicineList/MedicineList.styled";
import { MedicineItem } from "components/MedicineItem/MedicineItem";

const Favorite = () => {
    const inBasket = useSelector(selectBasket);
    console.log('inBasket', inBasket);

    return (
        <Section>
            <Container $top='50px'>
                {(inBasket?.length > 0) ?
                    <MedicineListStyled>
                        {inBasket?.map(medicine =>
                    <MedicineItem key={medicine.id} drug={medicine} />
                        )}
                    </MedicineListStyled> :
                    <EmptyPage>
                        <p>
                            Please select medicine <Link to="/catalog">Сatalog</Link>.
                        </p>
                    </EmptyPage>}
            </Container>
        </Section>
    )
};

export default Favorite;