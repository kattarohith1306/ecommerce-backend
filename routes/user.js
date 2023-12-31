const express= require("express");
const router=express.Router();
// middleware
const { authCheck } =require("../middlewares/auth");
//controller
const {
  userCart,
  getUserCart,
  emptyCart,
  saveAddress,
  applyCouponToUserCart,
  createOrder,
  orders,
  addToWishlist,
  wishlist,
  removeFromWishlist,
  createCashOrder,
} = require("../controllers/user");

router.post('/user/cart',authCheck,userCart);//save cart
router.get("/user/cart",authCheck,getUserCart);//get cart
router.delete("/user/cart",authCheck,emptyCart);//delete cart
router.post("/user/address",authCheck,saveAddress);

router.post("/user/order",authCheck,createOrder);//stripe
router.post("/user/cash-order",authCheck,createCashOrder);//COD 
router.get("/user/orders",authCheck,orders);
//coupon
router.post("/user/cart/coupon",authCheck,applyCouponToUserCart);

//wishlist
router.post("/user/wishlist",authCheck,addToWishlist);
router.get("/user/wishlist",authCheck,wishlist);
router.put("/user/wishlist/:productId",authCheck,removeFromWishlist);

// router.get("/user",(req,res)=>{
//     res.json({
//       date:"hey you hit the user api endpoint",
//     });
//   });

  module.exports =  router ;