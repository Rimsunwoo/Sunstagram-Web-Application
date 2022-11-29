const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
////////////////////////////////////////////////////////////
const bcrypt = require("bcrypt");

////////////////////////////////////////////////////////////
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "sunstagram/dist")));

//

//
const MongoClient = require("mongodb").MongoClient;
let db;
MongoClient.connect(
  "mongodb+srv://rhdrb0915:qorhdrb1@cluster0.ziv6h6j.mongodb.net/?retryWrites=true&w=majority",
  { useUnifiedTopology: true },
  function (에러, client) {
    if (에러) return console.log(에러);
    db = client.db("database");
    app.listen(8090, function () {
      console.log("8090..");
    });
  }
);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "sunstagram/dist/index.html"));
});

app.post("/join", function (req, res) {
  //  아이디 중복검사
  db.collection("login").findOne({ id: req.body.id }, function (err, result) {
    if (err) return console.log(err);
    console.log("아이디 중복검사");
    if (!result) return res.send(true);
    else return res.send(false);
  });
});

app.post("/signUp", function (req, res) {
  // 회원가입
  const encrypted = bcrypt.hashSync(req.body.pw, 10);
  db.collection("login").insertOne(
    {
      id: req.body.id,
      pw: encrypted,
      userName: req.body.name,
      profileMsg: "",
      userImg: "",
    },
    function (err, result) {
      if (err) return console.log(err);
      res.send(encrypted);
      console.log("회원가입");
      console.log("아이디 :" + req.body.id);
      console.log("비밀번호 :" + encrypted);
    }
  );
});

app.post("/login", function (req, res) {
  // 로그인
  db.collection("login").findOne(
    { id: req.body.userId },
    async function (err, result) {
      if (err) return console.log(err);
      // 아이디 틀림!
      if (!result) return res.send({ message: "idFail" });
      // 아이디 맞고 비번 맞음
      const check = await bcrypt.compare(req.body.userPw, result.pw);
      if (check) {
        console.log("로그인했습니다");
        console.log(req.body.userPw);
        console.log(result.pw);
        return res.send({ message: "success", encryptedPw: result.pw }); // a.data.encryptedPw
      } else {
        // 아이디 맞고 비번 틀림
        return res.send({ message: "pwFail" });
      }
    }
  );
});

app.post("/profile", function (req, res) {
  // 프로필 클릭 시 실행
  console.log(req.body.id);
  db.collection("login").findOne({ id: req.body.id }, function (err, result) {
    console.log(result); // params.id 로 들어오는데 {입력값 : ''} 으로 들어옴
    if (result) return res.send(result);
    else if (!result) return res.send(false);
  });
});

//하단
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "sunstagram/dist/index.html"));
});
