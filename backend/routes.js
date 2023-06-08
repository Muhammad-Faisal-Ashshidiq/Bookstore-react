const akses = require("express").Router();
const BukuModel = require("./model.js");

akses.route("/").get((req, res) => {
    BukuModel.find()
        .then((books) => res.status(200).json(books))
        .catch((error) => res.status(400).json(error.message));
});

akses.route("/delete/:id").delete((req, res) => {
    BukuModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json("Buku sudah dihapus."))
        .catch((error) => res.status(400).json(error.message));
});