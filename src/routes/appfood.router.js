import express from 'express';
import { likeResAPI } from '../controllers/appfood.controller.js';
const appfoodRoutes =express.Router();

appfoodRoutes.get("/like",likeResAPI);

export default appfoodRoutes;