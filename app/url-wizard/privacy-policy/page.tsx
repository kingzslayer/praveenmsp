import React from "react"

export default function UrlWizardPrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl rounded-lg p-6 shadow-md">
      <h1 className="mb-4 text-3xl font-bold">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Introduction</h2>
        <p className="text-sm">
          Thank you for using our Chrome extension ("URL Wizard"). Your privacy is important to us.
          This Privacy Policy explains how we handle your information when you use our Extension.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Data Collection and Use</h2>
        <h3 className="mb-1 text-xl font-semibold">No Data Collection:</h3>
        <p className="text-sm">
          Our Extension does not collect, store, or transmit any personal data or information from
          users. The primary function of the Extension is to encode and decode website URLs. All
          processing occurs locally on your device.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Permissions</h2>
        <p className="text-sm">
          The Extension requires access to your browser tabs to perform its URL encoding and
          decoding functions. This access is strictly used for the Extension's core functionality
          and is not used to collect or transmit data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Third-Party Services</h2>
        <p className="text-sm">
          Our Extension does not use any third-party services that could collect data about your
          browsing activities.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Security</h2>
        <p className="text-sm">
          We are committed to ensuring that your information is secure. Since we do not collect any
          data, there are no security concerns related to data storage or transmission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Changes to This Policy</h2>
        <p className="text-sm">
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with an updated revision date.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Contact Us</h2>
        <p className="text-sm">
          If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
          <span className="font-semibold hover:underline">praveenmsp23@gmail.com</span>.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">Effective Date</h2>
        <p className="text-sm">This policy is effective as of 05/07/2024.</p>
      </section>
    </div>
  )
}
