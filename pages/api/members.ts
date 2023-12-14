import { withIronSession } from "next-iron-session";
import { NextApiRequest, NextApiResponse } from "next";
import ironConfig from "../../util/iron.config";

export default withIronSession(handler, ironConfig);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const route = `${process.env.API_ROUTE}/profile`;
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json({ error: error, message: error.message });
  }
}
