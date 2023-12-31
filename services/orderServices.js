const asyncHandler = require('express-async-handler');
const { Order } = require('../models/model');
const { NotFoundError, DatabaseError } = require('../utils/customError')

// 전체 주문 목록 조회
const getOrderList = asyncHandler(async (req, res) => {
   const orders = await Order.find({});
   if (orders.length === 0) {
      throw new NotFoundError('현재 들어온 주문이 없습니다.');
   }
   res.json(orders);
});

// 주문 목록 조회
const getOrders = asyncHandler(async (req, res) => {
   console.log(req.user.id)
   const orders = await Order.find({ userId: req.user.id });
   if (orders.length === 0) {
      throw new NotFoundError('현재 들어온 주문이 없습니다.');
   }
   res.json(orders);
});

// 주문 상세조회
const getOrder = asyncHandler(async (req, res) => {
   const orderId = req.params.id;
   const order = await Order.findOne({ _id: orderId });
   if (!order) {
      throw new NotFoundError('주문이 존재하지 않습니다.');
   }
   res.json(order);
})

// 주문 신청
const createOrder = asyncHandler(async (req, res) => {
   const { productId, receiver, quantity, phoneNumber, orderAddress, deliveryStatus, totalPrice } = req.body;

   const order = new Order({
      userId: req.user._id, // 주문 신청 때 주문자의 id
      productId,
      quantity,
      receiver,
      phoneNumber,
      orderAddress,
      deliveryStatus,
      totalPrice
   });

   if (!order) {
      throw new NotFoundError('주문이 신청되지 않았습니다.');
   }

   await order.save();

   res.json({ message: '주문이 완료되었습니다.' });;
});

// 주문 수정  /user/orders/:id
const updateOrder = asyncHandler(async (req, res) => {
   const { productId, quantity, receiver, phoneNumber, orderAddress } = req.body;
   const orderId = req.params.id;
   const updatedOrder = await Order.updateOne(
      { _id: orderId },
      { productId, quantity, receiver, phoneNumber, orderAddress },
      { new: true },
   );

   if (!updatedOrder) {
      throw new NotFoundError('주문을 찾을 수 없습니다. ');
   }

   res.json({ message: '주문이 수정되었습니다.' });
});

// 주문 삭제
const deleteOrder = asyncHandler(async (req, res) => {
   const orderId = req.params.id;
   const findorder = await Order.findById(orderId);
   if (!findorder) {
      throw new NotFoundError('주문을 찾을 수 없습니다. ');
   }
   const deleted = await Order.deleteOne({ _id: orderId });
   if (!deleted) {
      throw new DatabaseError('서버 오류입니다. ');
   }
   res.json({ message: '주문이 삭제되었습니다.' });
});

// 배송 상태 수정
const updateDeliveryStatus = asyncHandler(async (req, res) => {
   const orderId = req.params.id;
   const order = await Order.findById(orderId);
   if (!order) {
      throw new NotFoundError('주문이 존재하지 않습니다.');
   }
   const newStatus = req.body.deliveryStatus; // 새로운 state 값
   order.deliveryStatus = newStatus; // 주문의 state 값을 업데이트
   const updatedStatus = await order.save(); // 변경된 주문을 저장
   res.json({deliveryStatus: updatedStatus.deliveryStatus, message: '배송 상태 수정 완료'}); // 업데이트된 주문을 반환
})

//주문 취소


module.exports = { getOrder, createOrder, updateOrder, deleteOrder, getOrders, getOrderList, updateDeliveryStatus }; 
