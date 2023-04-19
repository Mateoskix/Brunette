import express from 'express';
const router = express.Router()
//import controller from '/../controllers/shoppingcar';

router.get('/productos', (req, res) => {
    const productos = [
        {nombre : 'helado',
        cantidad : 1,
        id: 123
        },
        {nombre : 'helado',
        cantidad : 1,
        id: 123
        },
        {nombre : 'helado',
        cantidad : 1,
        id: 123
        }
    ];
    res.json(productos);
});

export default router;