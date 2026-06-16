import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy. Unbound Studios",
  description: "Privacy Policy for Unbound Studios products and services.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-24 px-14 max-md:px-5">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-sans text-[2.5rem] font-extrabold tracking-[-0.035em] text-ink mb-4">
            Privacy Policy
          </h1>
          <p className="font-mono text-[0.65rem] text-text-tertiary mb-10">
            Last Updated: March 30, 2026
          </p>

          <div className="text-text-secondary leading-[1.7] space-y-6">
            <p>
              The privacy of our users is important to us. This policy covers how we collect, use, disclose, and safeguard your information across all Unbound Studios products and services, including this website.
            </p>
            <p>
              For privacy-related inquiries, contact us at{" "}
              <a href="mailto:privacy@unboundapps.com" className="text-green font-medium hover:text-green-dim transition-colors">
                privacy@unboundapps.com
              </a>{" "}
              or{" "}
              <a href="mailto:hello@unboundapps.com" className="text-green font-medium hover:text-green-dim transition-colors">
                hello@unboundapps.com
              </a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
