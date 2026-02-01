export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
      <div className="prose prose-gray space-y-6">
        <section>
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>Welcome to TopDeal. By accessing our website, you agree to these terms and conditions.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">2. Use of Service</h2>
          <p>You must use this service in compliance with applicable laws and regulations.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">3. Account Responsibility</h2>
          <p>You are responsible for maintaining the confidentiality of your account credentials.</p>
        </section>
      </div>
    </div>
  );
}
