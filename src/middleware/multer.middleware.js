import multer from "multer";

export const fileHandler = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, "movies.txt");
    }
  });

  const upload = multer({ storage });

  return upload;
};
