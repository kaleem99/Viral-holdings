const imagePaths = [
  "Image (1).jpeg",
  "Image (2).jpeg",
  "Image (3).jpeg",
  "Image (4).jpeg",
  "Image (5).jpeg",
  "Image (6).jpeg",
  "Image (7).jpeg",
  "Image (8).jpeg",
  "Image (9).jpeg",
  "Image (10).jpeg",
  "Image (11).jpeg",
  "Image (12).jpeg",
  "Image (13).jpeg",
  "Image (14).jpeg",
  "Image (15).jpeg",
  "Image (16).jpeg",
  "Image (17).jpeg",
  "Image (18).jpeg",
  "Image (19).jpeg",
  "Image (20).jpeg",
  "Image (21).jpeg",
  "Image (22).jpeg",
  "Image (23).jpeg",
  "Image (24).jpeg",
  "Image (25).jpeg",

];

const Gallery = () => {
  const images = imagePaths.map((path, index) => {
    const imgSrc = require(`../img/${path}`); // Use require to import the image
    return (
      <img
        className="GalleryImages"
        key={index}
        src={imgSrc}
        alt={""}
      />
    );
  });
  return (
    <section className="section" id="services">
      <div className="aboutUsDiv" style={{ textAlign: "center" }}>
        {images}
      </div>
    </section>
  );
};

export default Gallery;
