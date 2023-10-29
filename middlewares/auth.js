const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET_KEY;
async function generateToken(code) {
  const token = await jwt.sign({ code }, secretKey, { expiresIn: "12h" });
  return token;
}

function verifyToken(ctx, next) {
  const token = ctx.header.authorization;
  if (!token) {
    ctx.throw(401, "No token detected in http header 'Authorization'");
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      ctx.throw(401, err);
    }
    ctx.state.user = decoded;
  });
}

module.exports = { generateToken, verifyToken };
