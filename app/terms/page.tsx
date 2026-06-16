import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service. Unbound Studios",
  description: "Terms of Service for Unbound Studios products and services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-24 px-14 max-md:px-5">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-sans text-[2.5rem] font-extrabold tracking-[-0.035em] text-ink mb-4">
            Terms of Service
          </h1>
          <p className="font-mono text-[0.65rem] text-text-tertiary mb-10">
            Last Updated: March 30, 2026
          </p>

          <div className="text-text-secondary leading-[1.7] space-y-6">
            <p>
              Unbound Studios, LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates multiple products and services. Each product has its own specific Terms of Service governing your use.
            </p>

            <h2 className="font-sans text-xl font-bold text-ink pt-4">
              Product-Specific Terms
            </h2>
            <p>
              Product-specific terms will be published here as individual products launch. General website terms below apply to unboundapps.com.
            </p>

            <h2 className="font-sans text-xl font-bold text-ink pt-4">
              General Website Terms
            </h2>
            <p>By accessing unboundapps.com, you agree to the following:</p>
            <p>
              This website is provided &ldquo;as is&rdquo; for informational purposes. All content, design, and code on this website are the property of Unbound Studios, LLC. You may not copy, reproduce, or distribute any content without our prior written consent.
            </p>
            <p>
              We reserve the right to modify or discontinue this website at any time without notice. We are not liable for any damages arising from your use of this website.
            </p>
            <p>
              These terms are governed by the laws of the State of Kansas. For questions, contact us at{" "}
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
