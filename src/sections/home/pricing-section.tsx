import SectionHeading from "@/components/ui/section-heading";
import { ProgramPricing } from "@/components/pricing/program-pricing";
import { TERM_MONTHS } from "@/data/plans";

function PricingSection() {
  return (
    <section id="pricing" className="bg-secondary-background section-padding-standard">
      <div className="layout-standard section-padding-standard">
        <SectionHeading title="Our packages.">
          Pick a growth program, then a tier. Every package is an initial payment plus {TERM_MONTHS} monthly retainers, and ad budget is paid separately.
        </SectionHeading>

        <ProgramPricing />

        <p className="mt-10 max-w-3xl text-sm text-paragraph">
          {TERM_MONTHS}-month minimum commitment. Hosting, domains and third-party subscriptions are excluded. No guaranteed sales, rankings or advertising results.
        </p>
      </div>
    </section>
  );
}

export default PricingSection;
