//is called before every request to the server
// is used to intercept the request and do something with it

const { NextResponse } = require("next/server");

export function middleware(req) {
  console.log(req);

  return NextResponse.next();
}
