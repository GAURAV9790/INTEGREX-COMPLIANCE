import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage="contact" />
      <main className="pt-[88px]">
        <ContactUs />
      </main>
    </div>
  );
}
