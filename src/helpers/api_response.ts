import { Response } from 'express';
const apiResponse = (
  res: Response,
  statusCode: number,
  data: any,
  message: any = '',
  version: any = 1,
) => {
  let ans = {
    statusCode,
    message,
    data,
    version,
  };

  return res.status(statusCode).json(ans);
};

export default apiResponse;
