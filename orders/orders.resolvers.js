const ordersModel = require('./oders.model')

module.exports = {
    Query:{
       orders: () => {
        return ordersModel.getAllOrders()
       }
    }
   }