import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const LargeCarousel = ({carouselData}) => {
    const data = carouselData;

    const listItems = data.map((d) => 
        <Carousel.Item className="bg-black p-2 text-white bg-opacity-50">
            <div className="darken-overlay">
                <img
                className="d-block w-100 "
                src={d.link}
                alt={d.h3}
                />
            </div>
            <Carousel.Caption>
            <h3>{d.h3}</h3>
            <p>{d.p}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );


    return (
        <Carousel>
            {listItems}
        </Carousel>

    )
}

export default LargeCarousel
