import { PlanLanding } from "@/components/landing/plan-landing";
import { getPlan } from "@/data/plans";
import { GetPageMetadata } from "@/utils/meta-data";

const plan = getPlan("business-growth-program")!;

export const metadata = GetPageMetadata({
  alternates: { canonical: "/business-growth-program" },
  title: `${plan.name} | SAFZTECH`,
  description: `${plan.positioning} ${plan.audience}`.slice(0, 300),
  robots: { index: false, follow: true },
});

export default function Page() {
  return <PlanLanding plan={plan} />;
}
