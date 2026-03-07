import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Vaunted Labs LLC — learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Effective Date: January 28, 2026
        </p>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Overview
            </h2>
            <p>
              This Privacy Policy describes how Vaunted Labs LLC
              (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) collects, uses, and safeguards information when
              you interact with our website at vauntedlabsllc.com and any
              software applications or digital services we provide. By accessing
              or using our services, you acknowledge and agree to the practices
              outlined in this policy.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect the following categories of information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-gray-700">Device Information:</strong>{" "}
                Device type, operating system, browser type, and unique device
                identifiers.
              </li>
              <li>
                <strong className="text-gray-700">Usage Data:</strong>{" "}
                Interaction patterns, pages visited, features used, session
                duration, and performance metrics.
              </li>
              <li>
                <strong className="text-gray-700">
                  General Location Data:
                </strong>{" "}
                Approximate location derived from IP address (country and city
                level only).
              </li>
              <li>
                <strong className="text-gray-700">
                  Communication Data:
                </strong>{" "}
                Information you voluntarily provide when contacting us via email
                or other channels.
              </li>
            </ul>
            <p className="mt-3">
              We do not require account creation to access our services. Any
              payment processing is handled through third-party platforms and we
              do not directly collect or store payment card details.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. How We Use Your Data
            </h2>
            <p className="mb-3">
              Information we collect is used for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                Improving the performance, reliability, and usability of our
                services.
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
                Communicating with you regarding service updates or responding
                to inquiries.
              </li>
              <li>Meeting legal and regulatory compliance requirements.</li>
            </ul>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Analytics &amp; Third-Party Services
            </h2>
            <p className="mb-3">
              We may employ third-party analytics and infrastructure providers
              to help us understand how our services are used. These providers
              operate under their own privacy policies and include services such
              as:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Web analytics platforms for traffic and behavior analysis.</li>
              <li>
                Cloud hosting and deployment services for infrastructure
                management.
              </li>
              <li>Error tracking and monitoring tools for quality assurance.</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information to any third party.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Data Storage &amp; Security
            </h2>
            <p>
              We implement industry-standard security measures to protect the
              information we handle. Most data is processed and stored on
              servers located within the United States. While no system can
              guarantee absolute security, we take reasonable precautions to
              safeguard your data against unauthorized access, alteration, or
              disclosure.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. Data Retention
            </h2>
            <p>
              We retain collected data only for as long as it is necessary to
              fulfill the purposes described in this policy. When data is no
              longer required, it is deleted or anonymized in accordance with
              our internal data management practices.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Your Rights
            </h2>
            <p className="mb-3">
              Depending on your jurisdiction, you may have certain rights
              regarding your personal data, including but not limited to:
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
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:admin@vauntedlabsllc.com"
                className="text-primary-600 hover:text-primary-500 transition-colors"
              >
                admin@vauntedlabsllc.com
              </a>
              .
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. Children&apos;s Privacy
            </h2>
            <p>
              Our services are not intended for individuals under the age of 13.
              We do not knowingly collect personal information from children. If
              we become aware that we have inadvertently gathered data from a
              child under 13, we will take prompt steps to delete that
              information.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              9. International Data Transfers
            </h2>
            <p>
              Your information may be processed on servers located in the United
              States or other jurisdictions. By using our services, you consent
              to the transfer and processing of your data in these locations,
              which may have data protection laws that differ from those of your
              home jurisdiction.
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
              continued use of our services following any modifications
              constitutes acceptance of the revised policy.
            </p>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              11. Contact Us
            </h2>
            <p className="mb-3">
              If you have questions or concerns regarding this Privacy Policy,
              please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-1">
              <p className="text-gray-900 font-medium">Vaunted Labs LLC</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:admin@vauntedlabsllc.com"
                  className="text-primary-600 hover:text-primary-500 transition-colors"
                >
                  admin@vauntedlabsllc.com
                </a>
              </p>
              <p>254 Chapman Rd, Ste 208 #26689</p>
              <p>Newark, Delaware 19702, United States</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
