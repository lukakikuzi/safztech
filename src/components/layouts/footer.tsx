import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="layout-standard flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
          <div className="space-y-1">
            <div className="text-sm">© 2026 SAFZTECH. ALL RIGHTS RESERVED.</div>
            <div className="text-sm text-white/60">23226 24th Ave SE, Bothell, Washington</div>
            <div className="text-sm text-white/60">
              We have offices in Pakistan, Canada, Australia & Ireland as well.
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm tracking-wider">
          <Link
            href="/privacy-policy"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-conditions"
            className="hover:text-white transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/refund-policy"
            className="hover:text-white transition-colors"
          >
            Refund Policy
          </Link>
          <Link
            href="/cancellation-policy"
            className="hover:text-white transition-colors"
          >
            Cancellation Policy
          </Link>
          <Link
            href="/delivery-timelines"
            className="hover:text-white transition-colors"
          >
            Delivery & Timelines
          </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
