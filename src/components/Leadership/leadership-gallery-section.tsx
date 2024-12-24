import Image from "next/image";

const Gallery = () => {
  const images = [
    { src: "/gallery1.jpg", alt: "Gallery Image 1" },
    { src: "/gallery2.jpg", alt: "Gallery Image 2" },
    { src: "/gallery3.jpg", alt: "Gallery Image 3" },
    { src: "/gallery4.jpg", alt: "Gallery Image 4" },
    { src: "/gallery5.jpg", alt: "Gallery Image 5" },
    { src: "/gallery6.jpg", alt: "Gallery Image 6" },
  ];

  return (
    <div className="bg-green-50 py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-900">Gallery</h2>
          <div className="h-1 w-16 bg-green-600 mx-auto mt-2"></div>
          <p className="text-green-700 mt-4">
            Explore moments captured during our programs and events.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={400}
                height={300}
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
