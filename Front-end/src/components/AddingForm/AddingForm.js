import React, { useState } from "react";
import "./AddingForm.css";
import CustomButton from "../CustomButton/CustomButton";
import * as Commons from "../../commons/commons";
import * as Fetch from "../../utils/Fetch";

const AddingForm = ({ onClick }) => {
  const [image, setImage] = useState(
    "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg"
  );

  //send this to db
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");

  async function onSubmit() {
    let data = await Fetch.POST(`${Commons.DOMAIN}${Commons.PORT}/upload`, {
      file,
      description,
    });
    if (data.data.valid) onClick(false);
  }

  function imageHandler(e) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === reader.DONE) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setFile(e.target.files[0]);
  }

  return (
    <form action="" className="adding-form">
      <img src={image} alt="" className="resize-card" />
      <input
        type="file"
        accept="image/*"
        name="image-upload"
        id="input"
        onChange={imageHandler}
      />
      <label htmlFor="input">
        <CustomButton onClick={null} value={null}>
          Choose your image
        </CustomButton>
      </label>

      <textarea
        placeholder="Description"
        className="input-description"
        rows="2"
        maxLength="160"
        onChange={(e) => setDescription(e.target.value)}
      />
      <CustomButton onClick={onSubmit} value={null}>
        Submit
      </CustomButton>
    </form>
  );
};

export default AddingForm;
