import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage="about" />
      <main className="pt-[88px]">
        <AboutUs />
      </main>
    </div>
  );
}
