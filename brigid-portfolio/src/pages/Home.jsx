import Masterhead from "../components/Masterhead";
import Intro from "../components/Intro";
import LeadShowcase from "../components/LeadShowcase";
import ContactDispatch from "../components/ContactDispatch";
import Footer from "../components/Footer";
import VisualDesk from "../components/PhotoEssay";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-flag selection:text-ink">
      <Masterhead status="Available for roles" />
      <main>
        <Intro />
        <LeadShowcase />
        <VisualDesk />
        <ContactDispatch />
      </main>
      <Footer />
    </div>
  );
}