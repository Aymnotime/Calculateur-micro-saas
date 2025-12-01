import ContactForm from "../(components)/shared/ContactForm";

export const metadata = {
  title: 'Contact — ProfitEngine',
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Contactez-nous</h1>
      <p className="text-gray-600 mt-2">Une question, une idée, un partenariat ? Écrivez-nous.</p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </main>
  );
}
