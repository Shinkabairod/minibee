import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with MINIBEE LLC products and services — contact support, FAQs, and account assistance.",
};

export default function Support() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Support
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          We&apos;re here to help. Reach out to our team for any questions,
          issues, or feedback about our products and services.
        </p>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Contact Support
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-2">
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@minibee.pro"
                  className="text-primary-600 hover:text-primary-500 transition-colors font-medium"
                >
                  contact@minibee.pro
                </a>
              </p>
              <p>
                Response time:{" "}
                <strong className="text-gray-700">
                  within 48 business hours
                </strong>
              </p>
            </div>
            <p className="mt-4">
              For faster assistance, please include in your email:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
              <li>The app name and version number</li>
              <li>Your device model and OS version</li>
              <li>A description of the issue</li>
              <li>Screenshots or recordings if applicable</li>
            </ul>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  How do I cancel my subscription?
                </h3>
                <p>
                  Subscriptions can be managed directly on your device:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                  <li>
                    <strong className="text-gray-700">iOS:</strong> Settings
                    &gt; Apple ID &gt; Subscriptions
                  </li>
                  <li>
                    <strong className="text-gray-700">Android:</strong> Google
                    Play &gt; Subscriptions
                  </li>
                </ul>
                <p className="mt-2">
                  You can cancel at any time. Access continues until the end of
                  the current billing period.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  How do I request a refund?
                </h3>
                <p>
                  All purchases are processed by Apple or Google:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                  <li>
                    <strong className="text-gray-700">Apple refunds:</strong>{" "}
                    visit{" "}
                    <a
                      href="https://reportaproblem.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-500 transition-colors"
                    >
                      reportaproblem.apple.com
                    </a>
                  </li>
                  <li>
                    <strong className="text-gray-700">Google refunds:</strong>{" "}
                    contact Google Play Support
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  How do I delete my account or data?
                </h3>
                <p>
                  Send an email to{" "}
                  <a
                    href="mailto:contact@minibee.pro"
                    className="text-primary-600 hover:text-primary-500 transition-colors"
                  >
                    contact@minibee.pro
                  </a>{" "}
                  with the subject &quot;Data Deletion Request&quot;. We will
                  process your request within 30 days.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  How do I exercise my privacy rights (GDPR/CCPA)?
                </h3>
                <p>
                  Email{" "}
                  <a
                    href="mailto:contact@minibee.pro"
                    className="text-primary-600 hover:text-primary-500 transition-colors"
                  >
                    contact@minibee.pro
                  </a>{" "}
                  with the subject &quot;Privacy Request&quot; specifying your
                  right (access, deletion, portability, etc.). We will respond
                  within 30 days.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  I found a bug. How do I report it?
                </h3>
                <p>
                  Email{" "}
                  <a
                    href="mailto:contact@minibee.pro"
                    className="text-primary-600 hover:text-primary-500 transition-colors"
                  >
                    contact@minibee.pro
                  </a>{" "}
                  with the app name, device info, and a description of the
                  issue. Screenshots welcome.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Company Information
            </h2>
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
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
