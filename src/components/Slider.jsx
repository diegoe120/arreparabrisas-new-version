
import ImageGallery from "react-image-gallery";
function Slider() {
    const images = [
        {
            original: "../../public/carrusel/carrusel-1.jpg",

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


