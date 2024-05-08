const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { processOrder } = require('../services/service');
const { componentData } = require('../data/data')

router.post('/create', (req, res) => {
    try {
        const { components } = req.body;
        if (!components || !Array.isArray(components)) {
            return res.status(400).json({ error: 'Components array is required.' });
        }

        const result = processOrder(components);
        if (result.error) {
            console.log("Error is processing order: " + result.error)
            return res.status(400).json({ error: result.error });
        }
        const orderId = uuidv4();
        const responseData = {
            order_id: orderId,
            total: result.totalPrice,
            parts: components.map(component => componentData[component].part)
        };

        return res.status(200).json({
            data: responseData
        })
    } catch (err) {
        res.status(500).json({
            error: err,
            errorStack: err.stack
        })
    }
});
module.exports = router;
