import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const LargeCarousel = ({carouselData}) => {
    const data = carouselData;

    const listItems = data.map((d) => 
        <Carousel.Item className="p-3 text-white bg-opacity-50 carousel-maxheight">
            <div className="darken-overlay">
                <img
                className="d-block w-100"
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
        <div>
            <Carousel className="carousel-margin">
                {listItems}
            </Carousel>
        </div>
    )
}

export default LargeCarousel
