import HomeLayout from "../layout/Home";

const images = [
  "/gallery/gallery_image_1.jpeg",
  "/gallery/gallery_image_2.jpeg",
  "/gallery/gallery_image_3.jpeg",
  "/gallery/gallery_image_4.jpeg",
  "/gallery/gallery_image_5.jpeg",
  "/gallery/gallery_image_6.jpeg",
];

const Gallery = () => {
  return (
    <HomeLayout>
      <section id="gallery" className="py-16 bg-white pt-32">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
            Gallery
          </h2>
          <p className="text-center mb-12 text-gray-600">
            Explore our collection of completed projects showcasing our
            expertise and dedication to quality.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg transform transition duration-500"
              >
                <img
                  src={image}
                  alt={`Construction ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default Gallery;
