const express = require('express');
const router = express.Router();

// Import all 13 controller files
const UserController = require('../Controllers/userController');
const AdminController = require('../Controllers/adminController'); 
const SubAdminController = require('../Controllers/subAdminController');
const PostController = require('../Controllers/postController');
const CustomerController = require('../Controllers/customerController');
const CategoryController = require('../Controllers/categoryController');
const OrderController = require('../Controllers/orderController');
const ProductController = require('../Controllers/productController');
const OrderItemController = require('../Controllers/order_itemController');
const PaymentController = require('../Controllers/paymentController');
const ShipmentController = require('../Controllers/shipmentController');
const CartController = require('../Controllers/cartController');
const WishlistController = require('../Controllers/wishlistController');


// User Routes
router.get('/users/create', UserController.createUser);
router.get('/users/read', UserController.readUser);
router.get('/users/update/:id', UserController.updateUser);
router.get('/users/delete/:id', UserController.deleteUser);


// Admin Routes
router.get('/admin/create', AdminController.createAdmin);
router.get('/admin/read', AdminController.readAdmin);
router.get('/admin/update/:id', AdminController.updateAdmin);
router.get('/admin/delete/:id', AdminController.deleteAdmin);

// SubAdmin Routes
router.get('/subadmin/create', SubAdminController.createSubAdmin);
router.get('/subadmin/read', SubAdminController.readSubAdmin);
router.get('/subadmin/update/:id', SubAdminController.updateSubAdmin);
router.get('/subadmin/delete/:id', SubAdminController.deleteSubAdmin);;

// // Post Routes
router.get('/post/create', PostController.createPost);
router.get('/post/read', PostController.readPost);
router.get('/post/update/:id', PostController.updatePost);
router.get('/post/delete/:id', PostController.deletePost);

// // Customer Routes
router.get('/customer/create', CustomerController.createCustomer);
router.get('/customer/read', CustomerController.readCustomer);
router.get('/customer/update/:id', CustomerController.updateCustomer);
router.get('/customer/delete/:id', CustomerController.deleteCustomer);

// // Category Routes
router.get('/category/create', CategoryController.createCategory);
router.get('/category/read', CategoryController.readCategory);
router.get('/category/update/:id', CategoryController.updateCategory);
router.get('/category/delete/:id', CategoryController.deleteCategory);

// // Order Routes
router.get('/order/create', OrderController.createOrder);
router.get('/order/read', OrderController.readOrder);
router.get('/order/update/:id', OrderController.updateOrder);
router.get('/order/delete/:id', OrderController.deleteOrder);

// // Product Routes
router.get('/product/create', ProductController.createProduct);
router.get('/product/read', ProductController.readProduct);
router.get('/product/update/:id', ProductController.updateProduct);
router.get('/product/delete/:id', ProductController.deleteProduct);

// // Order Item Routes
router.get('/orderitem/create', OrderItemController.createOrderItem);
router.get('/orderitem/read', OrderItemController.readOrderItem);
router.get('/orderitem/update/:id', OrderItemController.updateOrderItem);
router.get('/orderitem/delete/:id', OrderItemController.deleteOrderItem);

// // Payment Routes
router.get('/payment/create', PaymentController.createPayment);
router.get('/payment/read', PaymentController.readPayment);
router.get('/payment/update/:id', PaymentController.updatePayment);
router.get('/payment/delete/:id', PaymentController.deletePayment);

// // Shipment Routes
router.get('/shipment/create', ShipmentController.createShipment);
router.get('/shipment/read', ShipmentController.readShipment);
router.get('/shipment/update/:id', ShipmentController.updateShipment);
router.get('/shipment/delete/:id', ShipmentController.deleteShipment);

router.get('/cart/create', CartController.createCart);
router.get('/cart/read', CartController.readCart);
router.get('/cart/update/:id', CartController.updateCart);
router.get('/cart/delete/:id', CartController.deleteCart);

// // Wishlist Routes
router.get('/wishlist/create', WishlistController.createWishList);
router.get('/wishlist/read', WishlistController.readWishList);
router.get('/wishlist/update/:id', WishlistController.updateWishList);
router.get('/wishlist/delete/:id', WishlistController.deleteWishList);

module.exports = router;
