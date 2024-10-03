import Carousel from 'react-bootstrap/Carousel';
import IMG1 from '../images/feedup_drink.webp';
import IMG2 from '../images/feedup2.webp';

function IndividualIntervalsExample() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={IMG1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={IMG2}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;
