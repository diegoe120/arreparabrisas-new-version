import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Galeria() {
    const images = [
        {
            original: "src/img/carrusel/carrusel-1.jpg",
        },
        {
            original: "src/img/carrusel/carrusel-2.jpg",
        },
        {
            original: "src/img/carrusel/carrusel-3.jpg",
        },
    ];

    return (
        <div>
            <ImageGallery items={images} />
        </div>
    )
};

