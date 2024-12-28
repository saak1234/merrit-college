import Image from 'next/image';

const Gallery = () => {
  const images = [
    { src: '/m1.jpg', alt: 'Photo 1' },
    { src: '/m2.jpg', alt: 'Photo 2' },
    { src: '/m3.jpg', alt: 'Photo 3' },
    { src: '/m4.jpg', alt: 'Photo 4' },
    { src: '/m5.jpg', alt: 'Photo 5' },
    { src: '/m6.jpg', alt: 'Photo 6' },
    { src: '/m7.jpg', alt: 'Photo 7' },
    { src: '/m8.jpg', alt: 'Photo 8' },
    { src: '/m9.jpg', alt: 'Photo 9' },
    { src: '/m10.jpg', alt: 'Photo 10' },
    { src: '/m11.jpg', alt: 'Photo 11' },
    { src: '/m12.jpg', alt: 'Photo 12' },
    { src: '/m13.jpg', alt: 'Photo 13' },
    { src: '/m14.jpg', alt: 'Photo 14' },
    { src: '/m15.jpg', alt: 'Photo 15' },
    { src: '/m16.jpg', alt: 'Photo 16' },
    { src: '/m17.jpg', alt: 'Photo 17' },
    { src: '/m18.jpg', alt: 'Photo 18' },
  ];
heldsf]adqqdvdsfadfasdfasdfasfdsfdsfafdewsdfwaeawefdsadfweadsf0i9urewetiojwturefklgjshgdddf
  return (
    <section className="flex justify-center items-center px-6 py-10 bg-gradient-to-r from-green-50 to-gray-50 shadow-lg rounded-[30px] m-5">
      <div className="w-full max-w-screen-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-green-500 pb-2 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[30px] shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
