const express = require('express');

const expressController = require('../controllers/express');

const router = express.Router();

router.post('/expense/add-expense',expressController.addExpense);

router.get('/expense/get-expense',expressController.getExpense);

router.delete('/expense/delete-expense/:id',expressController.deleteExpense);



module.exports=router;