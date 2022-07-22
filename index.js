const express = require("express");
const { cloudinary } = require("./utils/cloudinary");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(
  express.json({
    limit: "10mb",
  })
);
const PORT = process.env.PORT || 5000;

app
  .post("/avatar/add", async (req, res) => {
    const { image } = req.body;
    console.log(image);
    cloudinary.uploader
      .upload((file = image), {
        upload_preset: "avatars",
      })
      .then((response) => {
        console.log(response);
        res.status(200).send({
          message: "Image uploaded successfully",
          image: response.url,
        });
      })
      .catch((e) => {
        console.log(e);
        res.status(500).send({
          message: "Image upload failed",
        });
      });
  })
  .post("/avatar/remove/:id", async (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
