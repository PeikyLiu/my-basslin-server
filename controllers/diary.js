const { generateToken } = require("../middlewares/auth");
const diary = {
  checkCode: async (ctx, next) => {
    const { code } = ctx.request.body;
    if (code == 528400) {
      const token = await generateToken(code);
      console.log(code, token, 123);
      ctx.body = {
        code: 1,
        msg: "success",
        data: {
          token,
        },
      };
    } else {
      ctx.body = {
        code: 0,
        msg: "验证码错误",
        data: null,
      };
    }
  },
};

module.exports = diary;
