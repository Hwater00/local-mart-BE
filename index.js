const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const specs = require("./config/swagger.config");
import cookieParser from "cookie-parser";
const { postRouter, postsRouter } = require("./src/routes/post.route");
import { authRouter } from "./src/routes/auth.route.js"; // .js 확장자 추가

import { likeRouter } from './src/routes/postLike.route';
import { postRouter } from './src/routes/post.route';
import { commentRouter } from './src/routes/comment.route';

const app = createApp(); // 함수 호출로 app 객체 생성

//서버 가동
dotenv.config();
const app = express();


// server setting
app.set("port", process.env.PORT || 3000); // 서버 포트 지정
app.use(cors()); // cors 방식 허용
app.use(express.static("public")); // 정적 파일 접근
app.use(express.json()); // request의 본문을 json으로 해석할 수 있도록 함
app.use(express.urlencoded({ extended: false }));

// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(cookieParser());

app.use("/posts", postsRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("로컬마크 시작~");
});

app.use("/post",postRouter)
app.use("/like",likeRouter )
app.use("/comment",commentRouter)

app.listen(app.get("port"), () => {
  console.log(`Example app listening on port ${app.get("port")}`);
});
