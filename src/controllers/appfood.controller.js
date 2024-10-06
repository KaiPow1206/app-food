import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";


const model = initModels(sequelize);


const likeResAPI = (req,res) => {
   res.send("hellooo");
}

export {
   likeResAPI,
}
