import express from 'express';
import { likeResAPI,likeUserApi,rateResAPI,rateUserAPI,orderAPI } from '../controllers/appfood.controller.js';
const appfoodRoutes =express.Router();

appfoodRoutes.get("/likeres/:resID",likeResAPI);
appfoodRoutes.get("/likeuser/:userID",likeUserApi);
appfoodRoutes.get("/rateres/:resID",rateResAPI);
appfoodRoutes.get("/rateuser/:userID",rateUserAPI);
appfoodRoutes.get("/order/:userorderID",orderAPI);

export default appfoodRoutes;