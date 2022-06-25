// const router = require("express").Router();
// const { Message, User, Conversation } = require("../../db/models");
// const { Op } = require("sequelize");

// router.post("/", async (req, res, next) => {
//   try {
//     const conversationId = req.body.conversationId;

//     // Message.update({
//     //   isRead: true
//     // }, {where: {id: }})

//     const conversation = await Conversation.findOne({
//       where: {
//         id: conversationId,
//       },
//       attributes: ["id"],
//       order: [[Message, "createdAt", "DESC"]],
//       include: [{ model: Message, order: ["createdAt", "DESC"] }],
//     });

//     // console.log({ conversation });
//     // updateList.length > 0 &&
//     //   updateList.forEach(async (id) => {
//     //     await Message.update({ isRead: true }, { where: { id: id } });
//     //   });

//     // conversation[0]?.messages.forEach((message) => {
//     //   message.update({ text: "Testing" });
//     // });

//     await conversation.messages.forEach((message) => {
//       if (message.isRead === false) {
//         message.update({ isRead: true });
//       }
//     });
//     res.send(conversation.messages);
//     // console.log(conversation[0]?.messages);
//   } catch (error) {
//     next(error);
//   }
// });

// module.exports = router;
