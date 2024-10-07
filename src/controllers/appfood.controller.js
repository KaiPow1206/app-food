import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { where } from 'sequelize';

const model = initModels(sequelize);


const likeResAPI =async (req,res) => {
 try {
   let { resID } = req.params;
   let data = await model.like_res.findAll({
       where: {
           res_id: resID,
       },
       attributes:['res_id'],
       include: [{
           model: model.users,
           as: 'user',
           attributes: ['full_name'],
           required:true
       }]
   });
   
   return res.status(200).json(data) ;
 } catch (error) {
   return res.status(500).json({message:"error"});
}}

const likeUserApi = async (req,res) => {
  try {
   let{userID}= req.params;
   let data= await model.like_res.findAll({
      where:{
         user_id:userID
      },
      attributes:['user_id'],
      include:[{
         model:model.restaurant,
         as: 're',
         attributes:['res_name'],
         required:true,
      }]
   })
   return res.status(200).json(data) ;
  } catch (error) {
   return res.status(500).json({message:"error"});
  }
}
const rateResAPI = async (req,res) => {
   try {
      let { resID } = req.params;
      let data = await model.rate_res.findAll({
          where: {
              res_id: resID,
          },
          attributes:['res_id'],
          include: [{
              model: model.users,
              as: 'user',
              attributes: ['full_name'],
              required:true
          }]
      });
      
      return res.status(200).json(data) ;
    } catch (error) {
      return res.status(500).json({message:"error"});
   }
}

const rateUserAPI = async (req,res) => {
   try {
      let{userID}= req.params;
      let data= await model.rate_res.findAll({
         where:{
            user_id:userID
         },
         attributes:['user_id'],
         include:[{
            model:model.restaurant,
            as: 're',
            attributes:['res_name'],
            required:true,
         }]
      })
      return res.status(200).json(data);
     } catch (error) {
      return res.status(500).json({message:"error"});
     }
}


const orderAPI = async (req, res) => {
   try {
     let { userorderID } = req.params;
     let data = await model.users.findAll({
       where: {
         users_id: userorderID,
       },
       attributes: ['full_name'],
       include: [
         {
           model: model.orders,
           as: 'orders',
           attributes: ['order_id', 'user_id', 'food_id', 'amount'],
           include:[{
            model: model.food,
            as: 'food',
            attributes: ['food_name'],
          }]
         },
       ],
     });
     return res.status(200).json(data);
   } catch (error) {
      console.log(error);
     return res.status(500).json({ message: "error" });
   }
 }
 



export {
   likeResAPI,
   likeUserApi,
   rateResAPI,
   rateUserAPI,
   orderAPI
}
