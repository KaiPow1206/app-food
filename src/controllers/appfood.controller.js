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
           attributes: ['amount'],
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
     return res.status(500).json({ message: "error" });
   }
 }
 const creatorderAPI = async (req,res) => {
   try {
      let { userID, foodID, amount } = req.body;
  
      let newOrder = await model.orders.create({
        user_id: userID,
        food_id: foodID,
        amount: amount,
      });
  
      return res.status(201).json({ message: "Order created successfully",newOrder});
    } catch (error) {
      return res.status(500).json({ message: "Error creating order" });
    }
 }
 

const creatRateAPI = async (req,res) => {
  try {
    let {userID,resID,amount} = req.body;
    let newRate = await model.rate_res.create({
      user_id:userID,
      res_id:resID,
      amount: amount,
    })
    return res.status(201).json({ message: "Rate created successfully",newRate});
  } catch (error) {
    return res.status(500).json({ message: "Error creating rate" });
  }
}

const creatLikeAPI = async (req,res) => {
  try {
    let {userID,resID,amount} = req.body;
    let newLike = await model.like_res.create({
      user_id:userID,
      res_id:resID,
    })
    return res.status(201).json({ message: "Like created successfully",newLike});
  } catch (error) {
    return res.status(500).json({ message: "Error creating like" });
  }
}
const deleteLikeAPI = async (req, res) => {
  try {
    let { userID, resID } = req.body;

    let deletedLike = await model.like_res.destroy({
      where: {
        user_id: userID,
        res_id: resID,
      },
    });
    if (deletedLike) {
      return res.status(200).json({ message: "Unlike successfully" });
    }
    return res.status(400).json({ message: "Like not found" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting like" });
  }
}


const deleteRateAPI = async (req,res) => {
  try {
    let { userID, resID } = req.body;

    let deletedLike = await model.rate_res.destroy({
      where: {
        user_id: userID,
        res_id: resID,
      },
    });
    if (deletedLike) {
      return res.status(200).json({ message: "Unrate successfully" });
    }
    return res.status(400).json({ message: "Rate not found" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting rate" });
  }
}



export {
   likeResAPI,
   likeUserApi,
   rateResAPI,
   rateUserAPI,
   orderAPI,
   creatorderAPI,
   creatRateAPI,
   creatLikeAPI,
   deleteLikeAPI,
   deleteRateAPI
}
