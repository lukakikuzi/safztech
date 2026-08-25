import React from "react";

function TermsConditionsPage() {
  return (
    <main className="layout-standard section-padding-standard section-margin-standard mt-[8rem]">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-poppins text-heading font-bold mb-8 text-balance">
          Terms & Conditions
        </h1>
        <p className="text-foreground text-lg leading-relaxed">
          These Terms and Conditions (&quot;Agreement&quot;) govern your use of
          services provided by SafzTech (&quot;Company,&quot; &quot;we,&quot;
          &quot;us,&quot; &quot;our&quot;). By engaging our services, you agree
          to be bound by this Agreement.
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            1. Services
          </h2>
          <p className="leading-relaxed">
            Company agrees to perform professional digital services as described
            on the Website. Client agrees to provide timely feedback, materials,
            and cooperation necessary to complete the Services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            2. Fees and Payments
          </h2>
          <p className="leading-relaxed">
            Fees are payable in advance in U.S. Dollars via Stripe. Company
            reserves the right to suspend Services for non-payment.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            3. Intellectual Property
          </h2>
          <p className="leading-relaxed">
            Upon receipt of full payment, Client obtains ownership of final
            deliverables, excluding pre-existing materials, stock assets, or
            tools. Company retains the right to display work in its portfolio.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            4. Revisions and Scope
          </h2>
          <p className="leading-relaxed">
            Revisions are limited to those included in the selected package.
            Additional work requested outside scope shall be billed at
            Company&apos;s standard rates.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            5. Cancellations and Refunds
          </h2>
          <p className="leading-relaxed">
            Governed by the Refund and Cancellation Policies, incorporated
            herein by reference.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            6. Limitation of Liability
          </h2>
          <p className="leading-relaxed">
            Company shall not be liable for indirect, incidental, or
            consequential damages. Maximum liability shall not exceed the amount
            paid by Client.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            7. Governing Law
          </h2>
          <p className="leading-relaxed">
            This Agreement shall be governed by the laws of Ontario, Canada (or
            Pakistan, if you prefer to anchor locally).
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            8. Entire Agreement
          </h2>
          <p className="leading-relaxed">
            This document, along with referenced policies, constitutes the
            entire agreement between the parties.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            9. SMS/Text Messaging Program
          </h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              By providing your phone number and opting in via our website
              contact form, you agree to receive SMS/text messages from
              SAFZTECH related to support and service updates, including
              responses to inquiries, scheduling of audits/consultations, and
              account or project updates.
            </p>
            <p>Message frequency varies. Message and data rates may apply.</p>
            <p>
              Consent to receive SMS messages is not a condition of
              purchasing any goods or services.
            </p>
            <p>
              You may opt out of receiving text messages at any time by
              replying STOP to any message. For help, reply HELP or contact us
              at info@safztech.com.
            </p>
            <p>Carriers are not liable for delayed or undelivered messages.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TermsConditionsPage;
