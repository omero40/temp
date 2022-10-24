import { db } from "../db.js";

export const addTemp = (req, res) => {
  const q = "INSERT INTO esp(`temp`) VALUES (?)";

  const values = [req.body.temp];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json("Post has been uploaded");
  });
};
