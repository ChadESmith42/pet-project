const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send([{
        id: 1,
        name: 'Linus',
        sex: 'Male',
        birthday: new Date(2019, 6, 1),
        breed: 'Golden Retriever',
        breedingStatus: 'Neutered',
        color: ['Red'],
        weight: 80,
    }, {
        id: 2,
        name: 'Max',
        sex: 'Male',
        birthday: new Date(2014, 9, 12),
        breed: 'German Shepherd',
        breedingStatus: 'Neutered',
        color: ['Black', 'Tan'],
        weight: 110,
    }]);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send({
      id: id,
      name: "Linus",
      sex: "Male",
      birthday: new Date(2019, 6, 1),
      breed: "Golden Retriever",
      color: ["Red"],
      weight: 80,
    });
});

module.exports = router;