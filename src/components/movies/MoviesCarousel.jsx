import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {NavLink} from "react-router-dom";

export default function MoviesCarousel({movies}) {
    const responsive = [{breakpoint: 1280, settings: {slidesToShow: 3}},
        {breakpoint: 900, settings: {slidesToShow: 2}}, {breakpoint: 600, settings: {slidesToShow: 1}},
    ];
    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: responsive,
    }

    return (
        <Slider {...settings} className={"movie-suggestions-container container"}>
            {movies && movies?.map(movie => (
                <NavLink to="/movie" key={movie.id} state={{id: movie.id}} className={"movie-suggestion"}>
                    <img src={movie.imgUrl} alt={movie.title}/>
                </NavLink>
            ))}
        </Slider>
    )
}