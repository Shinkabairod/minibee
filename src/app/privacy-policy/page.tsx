import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for MINIBEE LLC — learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Effective Date: March 10, 2026
        </p>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Overview
            </h2>
            <p>
              This Privacy Policy describes how MINIBEE LLC (&quot;Company,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses,
              and safeguards information when you interact with our website at
              minibee.pro, our mobile applications distributed through the Apple
              App Store and Google Play Store, and any other software
              applications or digital services we provide (collectively, the
              &quot;Services&quot;). By downloading, accessing, or using our
              Services, you acknowledge and agree to the practices outlined in
              this policy.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We are committed to collecting only the minimum data necessary to
              provide and improve our Services. We may collect the following
              categories of information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-gray-700">Device Information:</strong>{" "}
                Device model, operating system version, browser type, language
                settings, timezone, and unique device identifiers.
              </li>
              <li>
                <strong className="text-gray-700">Usage Data:</strong>{" "}
                Interaction patterns, screens visited, features used, session
                duration, crashes, and performance metrics.
              </li>
              <li>
                <strong className="text-gray-700">
                  General Location Data:
                </strong>{" "}
                Approximate location derived from IP address (country and city
                level only). We do not collect precise GPS location.
              </li>
              <li>
                <strong className="text-gray-700">
                  Communication Data:
                </strong>{" "}
                Information you voluntarily provide when contacting us via email
                or other channels.
              </li>
              <li>
                <strong className="text-gray-700">
                  Non-Personal Identifiers:
                </strong>{" "}
                App instance identifiers and anonymous device identifiers used
                for analytics purposes.
              </li>
            </ul>
            <p className="mt-3">
              We do not currently require account creation to access our
              Services. We do not collect or store names, email addresses, or
              passwords unless you voluntarily provide them. Payment metadata is
              handled solely by the Apple App Store or Google Play Store —
              MINIBEE LLC does not receive or store any payment card information.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">
              2.1 Health &amp; Fitness Data (Special Category — if applicable)
            </h3>
            <p>
              Certain applications may collect health and fitness data including
              body metrics (weight, height, age), fitness objectives, activity
              levels, dietary restrictions, and calculated nutritional targets
              (calories, macronutrients). This data is classified as sensitive
              and is never sold, never used for advertising, and processed solely
              to deliver core application functionality.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. How We Use Your Data
            </h2>
            <p className="mb-3">
              Information we collect is used strictly for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                Improving the performance, reliability, and usability of our
                Services.
              </li>
              <li>
                Measuring engagement and analyzing usage trends to guide product
                decisions.
              </li>
              <li>
                Diagnosing technical issues, crashes, and errors in our
                software.
              </li>
              <li>
                Delivering push notifications and communicating with you
                regarding service updates or responding to inquiries.
              </li>
              <li>Meeting legal and regulatory compliance requirements.</li>
            </ul>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Analytics &amp; Third-Party Services
            </h2>
            <p className="mb-4">
              We employ the following third-party service providers to operate
              and improve our Services. Each provider operates under their own
              privacy policy and data processing agreements:
            </p>

            <div className="space-y-5">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-gray-900 font-medium">
                  Supabase Inc. — Database &amp; Authentication
                </p>
                <p className="text-sm mt-1">
                  Data: User identifiers, account data, app content
                </p>
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-500 transition-colors"
                >
                  supabase.com/privacy
                </a>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-gray-900 font-medium">
                  RevenueCat Inc. — Subscription &amp; IAP Management
                </p>
                <p className="text-sm mt-1">
                  Data: User ID, subscription status, purchase history, device
                  info
                </p>
                <a
                  href="https://www.revenuecat.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-500 transition-colors"
                >
                  revenuecat.com/privacy
                </a>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-gray-900 font-medium">
                  PostHog Inc. — Product Analytics
                </p>
                <p className="text-sm mt-1">
                  Data: Usage events, session data, feature interactions, device
                  ID
                </p>
                <a
                  href="https://posthog.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-500 transition-colors"
                >
                  posthog.com/privacy
                </a>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-gray-900 font-medium">
                  Tenjin Inc. — Mobile Attribution
                </p>
                <p className="text-sm mt-1">
                  Data: Device ID, IDFA/GAID (with ATT consent on iOS), install
                  source
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Requires App Tracking Transparency consent on iOS 14.5+
                </p>
                <a
                  href="https://www.tenjin.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-500 transition-colors"
                >
                  tenjin.com/privacy
                </a>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-gray-900 font-medium">
                  Superwall Inc. — Paywall Optimization
                </p>
                <p className="text-sm mt-1">
                  Data: Device ID, subscription status, paywall interactions
                </p>
                <a
                  href="https://superwall.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-500 transition-colors"
                >
                  superwall.com/privacy
                </a>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-gray-900 font-medium">
                  Functional Software Inc. (Sentry) — Crash Reporting
                </p>
                <p className="text-sm mt-1">
                  Data: Crash logs, stack traces, device state, app version
                </p>
                <a
                  href="https://sentry.io/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-500 transition-colors"
                >
                  sentry.io/privacy
                </a>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-gray-900 font-medium">
                  OneSignal Inc. — Push Notifications
                </p>
                <p className="text-sm mt-1">
                  Data: Push tokens, device info, notification interactions
                </p>
                <a
                  href="https://onesignal.com/privacy_policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-500 transition-colors"
                >
                  onesignal.com/privacy_policy
                </a>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-gray-900 font-medium">
                  OpenAI LLC — AI Content Generation (if applicable)
                </p>
                <p className="text-sm mt-1">
                  Data: Anonymized parameters only, no personal identifiers
                </p>
                <a
                  href="https://openai.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-500 transition-colors"
                >
                  openai.com/privacy
                </a>
              </div>
            </div>

            <p className="mt-4">
              We do not sell or rent your personal information to any third
              party.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">
              4.1 App Tracking Transparency (ATT) — iOS
            </h3>
            <p>
              Certain applications use Tenjin for mobile attribution. On iOS
              14.5+, we request explicit user consent via Apple&apos;s native ATT
              prompt before any IDFA collection occurs. If you grant permission,
              your IDFA is used solely for install attribution — never for
              cross-app advertising. If you deny permission, only aggregated
              anonymous data is collected. You can change this at any time via:{" "}
              <strong className="text-gray-700">
                Settings &gt; Privacy &amp; Security &gt; Tracking
              </strong>
              .
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Data Storage &amp; Security
            </h2>
            <p>
              We implement industry-standard security measures to protect the
              information we handle. Most data collected through our mobile
              applications is stored locally on your device. Analytics data is
              processed and stored on servers located within the United States.
              While no system can guarantee absolute security, we take
              reasonable precautions to safeguard your data against unauthorized
              access, alteration, or disclosure.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. Data Retention
            </h2>
            <p className="mb-4">
              We retain collected data only for as long as it is necessary to
              fulfill the purposes described in this policy. Specific retention
              periods are as follows:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">
                      Data Category
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">
                      Retention Period
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3">Analytics data</td>
                    <td className="px-4 py-3">
                      24 months, then deleted/anonymized
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Attribution data (Tenjin)</td>
                    <td className="px-4 py-3">24 months maximum</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Crash data (Sentry)</td>
                    <td className="px-4 py-3">90 days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Push tokens (OneSignal)</td>
                    <td className="px-4 py-3">
                      Until opt-out or app uninstall
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Support communications</td>
                    <td className="px-4 py-3">
                      12 months after resolution
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Account data (if collected)</td>
                    <td className="px-4 py-3">
                      Active period + 30 days after deletion
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Your Rights (GDPR / CCPA / Global)
            </h2>
            <p className="mb-3">
              Depending on your jurisdiction, you may have certain rights
              regarding your personal data under regulations such as the General
              Data Protection Regulation (GDPR) and the California Consumer
              Privacy Act (CCPA), including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                The right to access information we hold about you.
              </li>
              <li>
                The right to request correction of inaccurate data.
              </li>
              <li>
                The right to request deletion of your personal information.
              </li>
              <li>
                The right to restrict or object to certain processing
                activities.
              </li>
              <li>
                The right to withdraw consent for data processing at any time.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:contact@minibee.pro"
                className="text-primary-600 hover:text-primary-500 transition-colors"
              >
                contact@minibee.pro
              </a>
              . We will respond to your request within 30 days maximum in
              accordance with applicable law.
            </p>
            <p className="mt-3">
              For EU/EEA users, you may also lodge a complaint with your local
              data protection authority (e.g., CNIL in France, ICO in the UK, or
              your national supervisory authority).
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. Children&apos;s Privacy
            </h2>
            <p>
              Our Services are not intended for individuals under the age of 13.
              We do not knowingly collect personal information from children. If
              we become aware that we have inadvertently gathered data from a
              child under 13, we will take prompt steps to delete that
              information. If you believe a child has provided us with personal
              data, please contact us at{" "}
              <a
                href="mailto:contact@minibee.pro"
                className="text-primary-600 hover:text-primary-500 transition-colors"
              >
                contact@minibee.pro
              </a>
              .
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              9. International Data Transfers
            </h2>
            <p className="mb-3">
              All third-party service providers listed in Section 4 are based in
              the United States. For users located in the EU/EEA, data transfers
              to the US are governed by:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                The EU-U.S. Data Privacy Framework (DPF) for certified providers
              </li>
              <li>
                Standard Contractual Clauses (SCCs) adopted by the European
                Commission for other providers
              </li>
            </ul>
            <p className="mt-3">
              You may request details on applicable transfer safeguards by
              emailing{" "}
              <a
                href="mailto:contact@minibee.pro"
                className="text-primary-600 hover:text-primary-500 transition-colors"
              >
                contact@minibee.pro
              </a>
              .
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              We reserve the right to update this Privacy Policy at any time.
              Changes will be reflected on this page with an updated effective
              date. We encourage you to review this policy periodically. Your
              continued use of our Services following any modifications
              constitutes acceptance of the revised policy.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              11. Contact Us
            </h2>
            <p className="mb-3">
              If you have questions or concerns regarding this Privacy Policy or
              our data practices, please contact us:
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
