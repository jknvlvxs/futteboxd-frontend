import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

function parseCookies(req: NextApiRequest) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const cookies = parseCookies(req);

    const route = `${process.env.API_ROUTE}/follows`;
    const response = await fetch(route, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookies.token}`,
        "Content-Type": "application/json",
      },
      body: req.body,
    });

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json({ error: error, message: error.message });
  }
}
