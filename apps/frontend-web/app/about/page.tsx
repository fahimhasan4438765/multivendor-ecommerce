import { PlaceholderImage } from "@/components/layout/placeholder";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About TopDeal</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <PlaceholderImage width={500} height={350} text="Our Team" className="rounded-lg" />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              TopDeal is a multi-vendor e-commerce platform connecting buyers with trusted sellers
              across the globe. We believe in making online shopping simple, secure, and rewarding.
            </p>
            <p className="text-gray-600 mb-4">
              Founded with a mission to support small businesses and vendors, TopDeal provides a
              marketplace where everyone can thrive. Our platform ensures quality, transparency,
              and excellent customer service at every step.
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            To create a seamless shopping experience that benefits both customers and vendors,
            offering a diverse range of products at competitive prices with reliable delivery
            and support.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-primary-50 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Trust</h3>
              <p className="text-gray-600 text-sm">We prioritize transparency and honest business practices.</p>
            </div>
            <div className="p-6 bg-emerald-50 rounded-lg">
              <h3 className="font-semibold text-emerald-600 mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">Every product and vendor is vetted for quality.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-600 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">We constantly improve our platform for better experiences.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            Have questions? Reach out to our team. We&apos;re here to help.
          </p>
          <p><strong>Email:</strong> support@topdeal.com</p>
          <p><strong>Phone:</strong> (+123) 456 7890</p>
          <p><strong>Address:</strong> 100 S Manhattan St, Amarillo, TX 79104</p>
        </section>
      </div>
    </div>
  );
}
