import express from 'express';
const router = express.Router()
const path = 'shoppingCar'
//import controller from '/../controllers/shoppingcar';

router.get('/', (req, res) => {
    const products = [
        {nombre : 'goyurt',
        cantidad : 1,
        id: 123
        },
        {nombre : 'goyurt',
        cantidad : 1,
        id: 123
        },
        {nombre : 'goyurt',
        cantidad : 1,
        id: 123
        }
    ];
    res.json(productos);
});

module.exports = router;