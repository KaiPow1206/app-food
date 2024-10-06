import express from 'express';
import appfoodRoutes from './appfood.router.js';
const rootRoutes = express.Router();


rootRoutes.use("/appfood",appfoodRoutes);

export default rootRoutes;