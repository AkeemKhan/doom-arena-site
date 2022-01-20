import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const ArenaSelection = ({data}) => {
    const images = data.images;
    const title = data.title;
    const description = data.description;
    const listItems = images.map((d) => 
        <Carousel.Item className="carousel-selection-maxheight" >
            <img
            className="d-block w-100 img-fluid"
            src={d}
            />
            <Carousel.Caption className="carousel-selection-caption">
                <h4>{data.title}</h4>
            </Carousel.Caption>
        </Carousel.Item>
    );

    return (
        <>
            <Carousel fade indicators={false} controls={false} interval={2000}>
                {listItems}
            </Carousel>
        </>
    )
}

export default ArenaSelection
