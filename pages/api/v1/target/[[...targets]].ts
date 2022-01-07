import { getTargets } from "@/lib";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const [platform, arch, version] = Array.isArray(req.query.targets)
    ? req.query.targets
    : [];

  res.status(200).json(await getTargets({ platform, arch, version }));
};
