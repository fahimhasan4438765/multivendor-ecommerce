export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-gray space-y-6">
        <section>
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p>We collect information you provide when registering, placing orders, or contacting us.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">2. How We Use Your Data</h2>
          <p>We use your data to process orders, improve our services, and communicate with you.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">3. Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information.</p>
        </section>
      </div>
    </div>
  );
}
