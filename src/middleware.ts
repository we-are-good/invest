import { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  let cookie = request.cookies.getAll();
  console.log(cookie);
};
