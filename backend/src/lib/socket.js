import { Server } from "socket.io";
import express from "express";
import http from "http";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

const useSocketMap = {}; //userId: socketId

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if(userId) useSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(useSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete useSocketMap[userId]
    io.emit("getOnlineUsers", Object.keys(useSocketMap));
  });

  
});

export { app, io, server };
