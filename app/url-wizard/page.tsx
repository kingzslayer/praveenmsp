import Link from "next/link"

export default function UrlWizardPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="mx-auto w-full rounded-lg p-2 shadow-md md:max-w-4xl md:p-6">
        <p className="mb-4 text-lg">
          Welcome to the URL Wizard! This powerful tool allows you to easily encode and decode
          website URLs.
        </p>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold">Usage</h2>
          <p className="mb-4">Using the URL Wizard extension is simple:</p>
          <ol className="mb-4 list-inside list-decimal">
            <li>Install the extension from the Chrome Web Store.</li>
            <li>Click on the URL Wizard icon in your browser toolbar.</li>
            <li>Paste the URL you want to encode or decode.</li>
            <li>Select the appropriate action (encode or decode) and get your result instantly!</li>
          </ol>
          <p>
            You can view and install the extension from the Chrome Web Store by clicking{" "}
            <a
              href="https://chromewebstore.google.com/detail/url-wizard/plonmkkgplmilppnikljmpplnlgjhohk"
              target="_blank"
              className="text-blue-500 underline"
            >
              here
            </a>
            .
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold">Privacy Policy</h2>
          <p className="mb-4">
            Your privacy is important to us. Our extension does not collect, store, or transmit any
            personal data. Read our full privacy policy by clicking{" "}
            <Link href="/url-wizard/privacy-policy" className="text-blue-500 underline">
              here
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
