import { Router } from "express";
const chatRoutes = Router();
// Define a default route
chatRoutes.get("/", (req, res) => {
    res.send("Chat routes are working!");
});
export default chatRoutes;
//# sourceMappingURL=chats-routes.js.map