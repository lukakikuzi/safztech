import { existsSync } from "node:fs";
import path from "node:path";

export const serviceImage = (slug: string) =>
  existsSync(path.join(process.cwd(), "public/images/services", `${slug}-v2.webp`)) ? `/images/services/${slug}-v2.webp` : null;
