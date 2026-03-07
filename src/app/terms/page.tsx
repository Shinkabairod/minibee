import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Vaunted Labs LLC — the rules and conditions governing your use of our services.",
};

export default function Terms() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Effective Date: January 28, 2026
        </p>

        <div className="space-y-10 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the website, applications, or any other
              services provided by Vaunted Labs LLC (&quot;Company,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to
              be bound by these Terms of Service and our Privacy Policy. If you
              do not agree with any part of these terms, you must discontinue
              use of our services immediately.
            </p>
          </section>

          <hr className="border-white/5" />

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Scope of Services
            </h2>
            <p>
              These terms govern your use of all digital products, services, and
              content made available through vauntedlabsllc.com, as well as any
              software applications published and maintained by Vaunted Labs
              LLC.
            </p>
          </section>

          <hr className="border-white/5" />

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. License to Use
            </h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable, and
              revocable license to access and use our services for personal and
              lawful purposes. You may not copy, modify, distribute,
              reverse-engineer, decompile, or create derivative works based on
              our software or content without prior written authorization.
            </p>
          </section>

          <hr className="border-white/5" />

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Intellectual Property
            </h2>
            <p>
              All content, trademarks, logos, code, designs, and materials
              available through our services are the exclusive property of
              Vaunted Labs LLC or its licensors. You retain ownership of any
              content you voluntarily submit to us, but by doing so you grant us
              a non-exclusive, royalty-free license to use, process, and display
              such content as necessary to provide our services.
            </p>
          </section>

          <hr className="border-white/5" />

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Payments &amp; Transactions
            </h2>
            <p>
              Where applicable, all financial transactions are handled through
              authorized third-party payment processors. We do not directly
              collect or store payment card information. Refund policies are
              governed by the respective payment platform or application
              marketplace through which a purchase was made.
            </p>
          </section>

          <hr className="border-white/5" />

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Prohibited Conduct
            </h2>
            <p className="mb-3">
              When using our services, you agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                Use our services for any unlawful or unauthorized purpose.
              </li>
              <li>
                Attempt to gain unauthorized access to our systems,
                infrastructure, or user data.
              </li>
              <li>
                Employ automated tools, bots, or scrapers to extract data from
                our services without written consent.
              </li>
              <li>
                Distribute malicious software, viruses, or any code designed to
                disrupt or harm our services.
              </li>
            </ul>
          </section>

          <hr className="border-white/5" />

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Disclaimer of Warranties
            </h2>
            <p>
              Our services are provided on an &quot;as is&quot; and &quot;as
              available&quot; basis without warranties of any kind, either
              express or implied. We do not guarantee uninterrupted access,
              error-free operation, or that our services will meet your specific
              requirements.
            </p>
          </section>

          <hr className="border-white/5" />

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Vaunted Labs LLC shall not
              be held liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to
              loss of data, profits, goodwill, or business interruption arising
              from your use of or inability to use our services.
            </p>
          </section>

          <hr className="border-white/5" />

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your access to our
              services at our sole discretion, without prior notice, for conduct
              that we determine violates these terms, is harmful to other users,
              or is otherwise objectionable.
            </p>
          </section>

          <hr className="border-white/5" />

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with
              the laws of the State of Delaware, without regard to conflict of
              law principles. Any disputes arising from or related to these
              terms shall be resolved through binding arbitration conducted in
              Delaware. You agree to waive any right to participate in
              class-action lawsuits or class-wide arbitration.
            </p>
          </section>

          <hr className="border-white/5" />

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              11. Modifications
            </h2>
            <p>
              We may revise these Terms of Service at any time. Updated terms
              will be posted on this page with a revised effective date. Your
              continued use of our services after changes are published
              constitutes your acceptance of the updated terms.
            </p>
          </section>

          <hr className="border-white/5" />

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              12. Contact
            </h2>
            <p className="mb-3">
              For questions about these Terms of Service, please reach out to
              us:
            </p>
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 space-y-1">
              <p className="text-white font-medium">Vaunted Labs LLC</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:admin@vauntedlabsllc.com"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
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
