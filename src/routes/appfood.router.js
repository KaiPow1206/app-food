import express from 'express';
import { likeResAPI,likeUserApi,rateResAPI,rateUserAPI,orderAPI,creatorderAPI, creatRateAPI, creatLikeAPI,deleteLikeAPI } from '../controllers/appfood.controller.js';
const appfoodRoutes =express.Router();

appfoodRoutes.get("/likeres/:resID",likeResAPI);
appfoodRoutes.get("/likeuser/:userID",likeUserApi);
appfoodRoutes.get("/rateres/:resID",rateResAPI);
appfoodRoutes.get("/rateuser/:userID",rateUserAPI);
appfoodRoutes.get("/order/:userorderID",orderAPI);
appfoodRoutes.post("/createorder",creatorderAPI);
appfoodRoutes.post("/createrate",creatRateAPI);
appfoodRoutes.post("/createlike",creatLikeAPI);
appfoodRoutes.delete('/unlike', deleteLikeAPI);

export default appfoodRoutes;