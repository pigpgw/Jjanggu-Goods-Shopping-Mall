const jwt = require('jsonwebtoken');

const secret = 'elice';

exports.secret = secret;
exports.setUserToken = (res, user) => {
  // 유저 jwt 토큰생성
  const accessToken = jwt.sign(user, secret, {expiresIn: "1h"}); //(userinfo, secretKey, option, callback) {expiresIn: "30s"}
  // 토큰을 쿠키로 전달
  res.cookie('accessToken', accessToken, {masAge: 36000}); 
};

// res.cookie('쿠키이름', 전달내용)
  // 'token'라는 쿠키를 res에 자동으로 전달
  // 브라우저는 전달받아서 브라우저저장소에 저장했다가
  // 서버의 주소로 요청할때마다 토큰을 보내도록 한다.
