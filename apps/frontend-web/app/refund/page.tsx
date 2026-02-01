export default function RefundPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Refund Policy</h1>
      <div className="prose prose-gray space-y-6">
        <section>
          <h2 className="text-xl font-semibold">1. Eligibility</h2>
          <p>Refunds are available within 30 days of purchase for unused products.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">2. Process</h2>
          <p>Contact our support team to initiate a refund. Processing may take 5-10 business days.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">3. Exclusions</h2>
          <p>Digital products and perishables may not be eligible for refunds.</p>
        </section>
      </div>
    </div>
  );
}
