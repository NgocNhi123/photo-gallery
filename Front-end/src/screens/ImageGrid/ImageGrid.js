import React from "react";
import SingleImage from "../../components/SingleImage/SingleImage";
import "./ImageGrid.css";

const ImageGrid = () => {
  const images = [
    {
      id: 1,
      url:
        "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
      description: "nature",
      tags: ["nature", "sky"],
      datetime: "20/12/2010",
    },
    {
      id: 2,
      url:
        "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
      description: "nature",
      tags: ["nature", "sky"],
      datetime: "20/12/2010",
    },
    {
      id: 3,
      url:
        "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
      description: "nature",
      tags: ["nature", "sky"],
      datetime: "20/12/2010",
    },
  ];
  return (
    <div className="grid-container">
      {images.map((image) => {
        return <SingleImage key={image.id} {...image} />;
      })}
      {images.map((image) => {
        return <SingleImage key={image.id} {...image} />;
      })}
      {images.map((image) => {
        return <SingleImage key={image.id} {...image} />;
      })}
      {images.map((image) => {
        return <SingleImage key={image.id} {...image} />;
      })}
    </div>
    // <Row className="grid-container">
    //   {images.map((image) => {
    //     return (
    //       <Col md={4}>
    //         <Image key={image.id} {...image} />
    //       </Col>
    //     );
    //   })}
    // </Row>
  );
};

export default ImageGrid;
