const methods: Record<string, string> = {
  POST: "post",
  GET: "get",
  DELETE: "delete",
  PUT: "put",
};
export default {
  create(routeMethods: any) {
    return function (req: any, res: any) {
      if (routeMethods.hasOwnProperty(methods[req.method])) {
        return routeMethods[methods[req.method]](req, res);
      }
      return res.status(403).json({
        message: `${req.method} not supported for this route`,
      });
    };
  },
};
