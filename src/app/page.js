
import FAQSection from "./components/Faqs";
import HeroSection from "./components/HeroSection";
import OrderNowSection from "./components/OrderNowSection";
import OurWorkSection from "./components/OurWorkSection";
import ReviewsSection from "./components/ReviewsSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div >
      <HeroSection/>
      <OrderNowSection/>
      <OurWorkSection/>
      <ReviewsSection/>
      <ServicesSection/>
      <FAQSection/>
    </div>
  );
}
