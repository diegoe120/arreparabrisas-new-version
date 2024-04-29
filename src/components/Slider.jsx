
import ImageGallery from "react-image-gallery";
function Slider() {
    const images = [
        {
            original: "../img/carrusel/carrusel-2.jpg",
        },
    ];
    const Slider = (images) => {

        return (
            <div>
                <ImageGallery items={images} />
            </div>
        )
    }
}



export default Slider;


