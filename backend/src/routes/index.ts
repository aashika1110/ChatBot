import { Router } from "express";
import userRoutes from "./user-routes.js";
import chatRoutes from "./chats-routes.js";

const appRouter = Router();

// Add a default route for `/api/v1/`
appRouter.get("/", (req, res) => {
    res.send("API root is working! Use /user or /chats for specific routes.");
});

// Mount other routes
appRouter.use("/user", userRoutes); // domain/api/v1/user
appRouter.use("/chat", chatRoutes); // domain/api/v1/chats

export default appRouter;
