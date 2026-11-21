import { SERVICES, SERVICE_GROUP_TITLES } from "@/data/services";

export const SERVICE_GROUPS = SERVICE_GROUP_TITLES.map((title, i) => ({
  title,
  options: SERVICES.filter((s) => s.group === i).map((s) => s.title),
}));
