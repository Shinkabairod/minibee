import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for MINIBEE LLC — the rules and conditions governing your use of our services.",
};

export default function Terms() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Effective Date: March 10, 2026
        </p>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, accessing, or using any website,
              mobile application, or digital service provided by MINIBEE LLC
              (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;), you agree to be bound by these Terms of Service
              and our Privacy Policy. If you do not agree with any part of these
              terms, you must not download or use our Services.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. Scope of Services
            </h2>
            <p>
              These terms govern your use of all digital products, services, and
              content made available through minibee.pro, our mobile
              applications distributed on the Apple App Store and Google Play
              Store, and any other software applications published and maintained
              by MINIBEE LLC (collectively, the &quot;Services&quot;).
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. License to Use
            </h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable, and
              revocable license to access and use our Services for personal,
              non-commercial, and lawful purposes. You may not copy, modify,
              distribute, sell, lease, reverse-engineer, decompile, or create
              derivative works based on our software or content without prior
              written authorization.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Intellectual Property
            </h2>
            <p>
              All content, trademarks, logos, code, designs, graphics, and
              materials available through our Services are the exclusive property
              of MINIBEE LLC or its licensors. You retain ownership of any
              content you voluntarily create or submit within our applications,
              but by doing so you grant us a non-exclusive, royalty-free license
              to use, process, and display such content as necessary to provide
              our Services.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Subscriptions &amp; Payments
            </h2>
            <p>
              Where applicable, all financial transactions — including in-app
              purchases and subscriptions — are processed exclusively through
              the Apple App Store or Google Play Store. MINIBEE LLC does not
              directly collect or store any payment card information. Billing,
              refunds, and subscription management are handled entirely by the
              respective platform through which the purchase was made. For
              purchases made through the Apple App Store, Apple&apos;s terms and
              refund policies apply.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">
              5.1 Subscriptions &amp; Auto-Renewal
            </h3>
            <p className="mb-3">
              Some of our applications offer auto-renewing subscriptions. By
              purchasing a subscription, you agree that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                Payment will be charged to your Apple ID or Google account at
                confirmation of purchase.
              </li>
              <li>
                Subscriptions automatically renew unless cancelled at least 24
                hours before the end of the current billing period.
              </li>
              <li>
                Your account will be charged for renewal within 24 hours prior
                to the end of the current period at the same rate.
              </li>
              <li>
                You can manage and cancel subscriptions on iOS via:{" "}
                <strong className="text-gray-700">
                  Settings &gt; Apple ID &gt; Subscriptions
                </strong>
                . On Android via:{" "}
                <strong className="text-gray-700">
                  Google Play &gt; Subscriptions
                </strong>
                .
              </li>
              <li>
                Some applications offer a permanent free tier with limited
                features. No free trial period is offered unless explicitly
                stated within the specific application at time of purchase.
              </li>
              <li>
                Cancelling a subscription does not entitle you to a refund for
                the current billing period.
              </li>
            </ul>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. Notifications
            </h2>
            <p>
              Our mobile applications may request permission to send you push
              notifications. By enabling notifications, you consent to receive
              messages related to service updates, new features, and relevant
              content. You may disable notifications at any time through your
              device settings.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Prohibited Conduct
            </h2>
            <p className="mb-3">
              When using our Services, you agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                Use our Services for any unlawful or unauthorized purpose.
              </li>
              <li>
                Attempt to gain unauthorized access to our systems,
                infrastructure, or user data.
              </li>
              <li>
                Employ automated tools, bots, or scrapers to extract data from
                our Services without written consent.
              </li>
              <li>
                Distribute malicious software, viruses, or any code designed to
                disrupt or harm our Services.
              </li>
              <li>
                Upload or transmit spam, unsolicited content, or any material
                that infringes on third-party rights.
              </li>
            </ul>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. Disclaimer of Warranties
            </h2>
            <p>
              Our Services are provided on an &quot;as is&quot; and &quot;as
              available&quot; basis without warranties of any kind, either
              express or implied, including but not limited to implied warranties
              of merchantability, fitness for a particular purpose, and
              non-infringement. We do not guarantee uninterrupted access,
              error-free operation, or that our Services will meet your specific
              requirements.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, MINIBEE LLC
              shall not be held liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to
              loss of data, profits, goodwill, or business interruption arising
              from your use of or inability to use our Services.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              10. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your access to our
              Services at our sole discretion, without prior notice, for conduct
              that we determine violates these terms, is harmful to other users,
              is fraudulent, or is otherwise objectionable.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              11. Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with
              the laws of the State of Delaware, United States, without regard
              to conflict of law principles. Any disputes arising from or
              related to these terms shall be resolved through binding
              arbitration conducted in Delaware. You agree to waive any right to
              participate in class-action lawsuits or class-wide arbitration.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">
              11.1 Apple App Store Additional Terms
            </h3>
            <p className="mb-3">
              For applications downloaded from the Apple App Store, the
              following terms apply:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                These Terms of Service are between you and MINIBEE LLC only, and
                not with Apple Inc. (&quot;Apple&quot;). MINIBEE LLC, not Apple,
                is solely responsible for our applications and their content.
              </li>
              <li>
                The license granted to you is a non-transferable license to use
                the application on any Apple-branded product you own or control,
                as permitted by the Apple Media Services Terms and Conditions.
              </li>
              <li>
                MINIBEE LLC is solely responsible for providing maintenance and
                support services for our applications. Apple has no obligation
                to furnish any maintenance or support services.
              </li>
              <li>
                In the event of any application failure to conform to any
                applicable warranty, you may notify Apple and Apple will refund
                the purchase price (if any). To the maximum extent permitted by
                law, Apple has no other warranty obligation.
              </li>
              <li>
                MINIBEE LLC, not Apple, is responsible for addressing claims
                relating to our applications, including product liability claims,
                regulatory compliance claims, and claims arising under consumer
                protection legislation.
              </li>
              <li>
                In the event of any third-party intellectual property
                infringement claim, MINIBEE LLC will be solely responsible for
                the investigation, defense, settlement, and discharge of such
                claim.
              </li>
              <li>
                Apple and its subsidiaries are third-party beneficiaries of
                these Terms of Service and, upon your acceptance, will have the
                right to enforce these terms against you.
              </li>
            </ul>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              12. Changes to These Terms
            </h2>
            <p>
              We may revise these Terms of Service at any time. Updated terms
              will be posted on this page with a revised effective date. Your
              continued use of our Services after changes are published
              constitutes your acceptance of the updated terms.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              13. Contact
            </h2>
            <p className="mb-3">
              For questions about these Terms of Service, please reach out to
              us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-1">
              <p className="text-gray-900 font-medium">MINIBEE LLC</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@minibee.pro"
                  className="text-primary-600 hover:text-primary-500 transition-colors"
                >
                  contact@minibee.pro
                </a>
              </p>
              <p>254 Chapman Road, Ste 208 #23664</p>
              <p>Newark, Delaware 19702, United States</p>
              <p>DUNS: 14-493-4757</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
