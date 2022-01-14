import { join } from "path";
import { readFileSync } from "fs";
import { compile } from "nexe";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await compile({
    input: this.input,
    output: this.output,
    targets: this.targets,
  });

  const imageBuffer = readFileSync(join(process.cwd(), "playground", module));

  res.send(imageBuffer);
};
