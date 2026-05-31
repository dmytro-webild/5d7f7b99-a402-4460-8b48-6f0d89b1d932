"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Clock, Gem, Sparkles, Trophy, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="largeSmallSizeMediumTitles"
      background="floatingGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Home Decor Gypsum False Ceiling"
          navItems={[
            { name: "Home", id: "#home" },
            { name: "About Us", id: "#about" },
            { name: "Services", id: "#services" },
            { name: "Gallery", id: "#gallery" },
            { name: "Reviews", id: "#reviews" },
            { name: "Contact", id: "#contact" },
          ]}
          button={{
            text: "Get a Free Quote",            href: "#contact"}}
        />
      </div>

      <div id="home" data-section="home">
        <HeroSplitDoubleCarousel
          title="Transform Your Space with Premium False Ceiling Designs"
          description="Modern. Elegant. Affordable. We specialize in Gypsum False Ceilings, Grid Ceilings, Gypsum Partitions, PVC Ceilings, and Interior Design Solutions for homes, offices, shops, and commercial spaces."
          background={{
            variant: "radial-gradient"}}
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-stone-wall-surface-used-interior-design_23-2151214746.jpg", imageAlt: "Modern gypsum false ceiling in a living room" },
            { imageSrc: "http://img.b2bpic.net/free-photo/hallway-hotel-floor_23-2149304103.jpg", imageAlt: "Minimalist bedroom false ceiling with cove lighting" },
            { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-standing-ladder_23-2149366704.jpg", imageAlt: "Professional office false ceiling with modern design" },
            { imageSrc: "http://img.b2bpic.net/free-photo/studio-arrangement-work_23-2151976826.jpg", imageAlt: "Gypsum partition dividing an office space" },
            { imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-working-outdoors_23-2149714259.jpg", imageAlt: "Waterproof PVC ceiling in a modern kitchen" },
            { imageSrc: "http://img.b2bpic.net/free-photo/art-exhibition-with-colorful-shapes_1122-1489.jpg", imageAlt: "Luxury hotel lobby with grand false ceiling" }
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/young-male-performer-dancing-subway-station_23-2149344086.jpg", imageAlt: "Elegant living room with false ceiling" },
            { imageSrc: "http://img.b2bpic.net/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int_1203-2346.jpg", imageAlt: "Luxurious bedroom with false ceiling and ambient light" },
            { imageSrc: "http://img.b2bpic.net/free-photo/abstract-glass-window-roof-architecture-exterior_74190-6353.jpg", imageAlt: "Commercial false ceiling design in a corporate office" },
            { imageSrc: "http://img.b2bpic.net/free-photo/modern-coffeehouse-with-contemporary-design_23-2149052832.jpg", imageAlt: "Modern gypsum board room partition" },
            { imageSrc: "http://img.b2bpic.net/free-photo/view-ceiling-with-small-fans_23-2148252813.jpg", imageAlt: "Stylish PVC wall panel in a bathroom" },
            { imageSrc: "http://img.b2bpic.net/free-photo/striped-walls-roof-modern-building_23-2148184235.jpg", imageAlt: "Showroom with elegant false ceiling and lighting" }
          ]}
          buttons={[
            { text: "Get Free Quotation", href: "#contact" },
            { text: "WhatsApp Us", href: "https://wa.me/919266703585" },
          ]}
          carouselPosition="right"
          ariaLabel="Hero section"
          useInvertedBackground={true}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Expertise"
          title="Why Choose Us"
          description="Luxury Designs. Professional Installation. Affordable Pricing."
          subdescription="Whether you're renovating your home, upgrading your office, or building a new commercial space, our team creates stylish ceiling solutions that enhance beauty and functionality."
          icon={Sparkles}
          imageSrc="http://img.b2bpic.net/free-photo/close-up-young-business-team-working_23-2149153848.jpg"
          imageAlt="Interior designer discussing false ceiling plans with a client"
          mediaAnimation="opacity"
          useInvertedBackground={false}
          ariaLabel="About us section"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardEight
          title="Our Services"
          description="Experience elegance and functionality with our diverse range of ceiling and partition solutions."
          features={[
            { title: "Gypsum False Ceiling", description: "Create elegant and modern interiors with customized gypsum ceiling designs featuring LED lighting, cove lighting, and decorative patterns. Perfect For: Living Rooms, Bedrooms, Offices, Showrooms, Hotels.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-wallpaper-texture_1339-953.jpg", imageAlt: "Elegant gypsum false ceiling with LED lighting" },
            { title: "Grid Ceiling Installation", description: "Professional suspended grid ceiling systems for commercial and office environments. Benefits: Easy Maintenance, Modern Appearance, Cost Effective, Acoustic Performance.", imageSrc: "http://img.b2bpic.net/free-photo/low-angle-view-building-ceiling_1359-343.jpg", imageAlt: "Modern office with grid ceiling installation" },
            { title: "Gypsum Board Partitions", description: "Smart space division solutions for offices, shops, clinics, and residential properties. Features: Durable Construction, Sound Reduction, Quick Installation, Modern Finish.", imageSrc: "http://img.b2bpic.net/free-photo/minimalist-office-interior-design_23-2151826267.jpg", imageAlt: "Gypsum board partition in a modern office" },
            { title: "PVC Ceiling & Wall Paneling", description: "Water-resistant decorative ceiling and wall solutions designed for kitchens, bathrooms, and commercial spaces. Ideal for areas requiring hygiene and durability.", imageSrc: "http://img.b2bpic.net/free-photo/creative-fengshui-practice-home-arrangement_23-2149135745.jpg", imageAlt: "Decorative PVC ceiling and wall paneling" }
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          ariaLabel="Our services section"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Achievements"
          description="We pride ourselves on delivering excellence and client satisfaction."
          metrics={[
            { id: "m1", value: "500+", title: "Completed Projects", description: "Over 500 successful ceiling and interior projects delivered.", icon: Trophy },
            { id: "m2", value: "10+", title: "Years Experience", description: "A decade of expertise in false ceiling and interior solutions.", icon: Clock },
            { id: "m3", value: "Premium", title: "Material Quality", description: "Using only the highest quality materials for lasting results.", icon: Gem },
            { id: "m4", value: "Fast", title: "Project Completion", description: "Efficient and timely execution without compromising quality.", icon: Zap }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Achievements metrics section"
        />
      </div>

      <div id="process" data-section="process">
        <FeatureCardEight
          title="Our Process"
          description="From initial consultation to final inspection, we ensure a smooth and transparent experience."
          features={[
            { title: "Free Site Visit", description: "Our experts visit your location to inspect the space and understand your specific requirements.", imageSrc: "http://img.b2bpic.net/free-photo/engineer-meeting-architectural-project_1421-29.jpg", imageAlt: "Expert performing a free site visit" },
            { title: "Design Consultation", description: "We collaborate with you to create customized ceiling concepts that fit your budget and style preferences.", imageSrc: "http://img.b2bpic.net/free-photo/neon-robot-vacuum-cleaner_23-2151349185.jpg", imageAlt: "Interior designer consulting on design concepts" },
            { title: "Professional Installation", description: "Our skilled craftsmen ensure precise and clean execution of the chosen design with minimal disruption.", imageSrc: "http://img.b2bpic.net/free-photo/female-executive-assistant-uses-rolling-trolley-transport-documents-records-assisting_482257-136466.jpg", imageAlt: "Craftsman installing a false ceiling" },
            { title: "Final Quality Check", description: "Every project undergoes a detailed inspection to guarantee the highest quality before handover.", imageSrc: "http://img.b2bpic.net/free-photo/closeup-worker-using-automated-machine-woodworking-production-facility_637285-12043.jpg", imageAlt: "Quality check being performed on a finished ceiling" }
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          ariaLabel="Our process section"
        />
      </div>

      <div id="gallery" data-section="gallery">
        <ProductCardTwo
          title="Project Gallery"
          description="Explore our portfolio of stunning false ceiling and partition installations, showcasing our quality and creativity."
          products={[
            { id: "p1", brand: "Living Room", name: "Luxury Gypsum Ceiling", price: "Varies", rating: 5, reviewCount: "25", imageSrc: "http://img.b2bpic.net/free-photo/room-abstract-decor-geometric-shapes-background_23-2148772539.jpg", imageAlt: "Luxury living room false ceiling design" },
            { id: "p2", brand: "Bedroom", name: "Modern Cove Ceiling", price: "Varies", rating: 5, reviewCount: "18", imageSrc: "http://img.b2bpic.net/free-photo/ai-generated-modern-styled-entryway_23-2150692173.jpg", imageAlt: "Modern bedroom false ceiling with cove lighting" },
            { id: "p3", brand: "Office", name: "Grid Ceiling System", price: "Varies", rating: 5, reviewCount: "30", imageSrc: "http://img.b2bpic.net/free-photo/business-meeting-working-room-office-building_105762-1793.jpg", imageAlt: "Office grid ceiling installation" },
            { id: "p4", brand: "Commercial", name: "Gypsum Board Partition", price: "Varies", rating: 5, reviewCount: "12", imageSrc: "http://img.b2bpic.net/free-photo/white-exhibition-room-with-bench_53876-145155.jpg", imageAlt: "Commercial gypsum board partition" },
            { id: "p5", brand: "Kitchen/Bathroom", name: "PVC Decorative Ceiling", price: "Varies", rating: 5, reviewCount: "22", imageSrc: "http://img.b2bpic.net/free-photo/worker-s-hands-measure-adjust-metal-profile-mounting-plasterboard-ceiling-frame-close-up-selective-focus-hands-specialist-industrial-renovation-renovation_166373-1905.jpg", imageAlt: "Decorative PVC ceiling in a kitchen" },
            { id: "p6", brand: "Residential", name: "Contemporary False Ceiling", price: "Varies", rating: 5, reviewCount: "15", imageSrc: "http://img.b2bpic.net/free-photo/closeup-vase-with-flowers-glass-candlesticks-home-interior_169016-20191.jpg", imageAlt: "Contemporary false ceiling in a modern room" }
          ]}
          gridVariant="bento-grid"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Project gallery section"
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardTwo
          title="Customer Reviews"
          description="Hear what our happy clients have to say about our quality workmanship and excellent service."
          testimonials={[
            { id: "t1", name: "Priya Sharma", role: "Homeowner, Faridabad", testimonial: "\"Reliable and affordable gypsum false ceiling services. Excellent workmanship and professionalism from start to finish. Highly recommend!\"", imageSrc: "http://img.b2bpic.net/free-photo/screaming-woman-costume_1149-1150.jpg", imageAlt: "Priya Sharma" },
            { id: "t2", name: "Amit Kumar", role: "Office Manager, Noida", testimonial: "\"Professional team, timely completion, and beautiful ceiling design for our office. The acoustic performance is also top-notch.\"", imageSrc: "http://img.b2bpic.net/free-photo/portrait-modern-couple-home_23-2148115813.jpg", imageAlt: "Amit Kumar" },
            { id: "t3", name: "Seema Gupta", role: "Shop Owner, Gurugram", testimonial: "\"Great quality work for our office partition and false ceiling project. The team was very efficient and detail-oriented.\"", imageSrc: "http://img.b2bpic.net/free-photo/front-view-happy-man-showing-approval_23-2148230800.jpg", imageAlt: "Seema Gupta" },
            { id: "t4", name: "Rahul Singh", role: "Property Developer, Delhi", testimonial: "\"Their interior design solutions are outstanding. They transformed our space exactly as we envisioned, on budget and on time.\"", imageSrc: "http://img.b2bpic.net/free-photo/customer-experience-creative-collage_23-2149346504.jpg", imageAlt: "Rahul Singh" },
            { id: "t5", name: "Ananya Desai", role: "Residential Client, Ghaziabad", testimonial: "\"Absolutely thrilled with my new false ceiling! It adds such elegance and sophistication to my living room. Fantastic service!\"", imageSrc: "http://img.b2bpic.net/free-photo/close-up-low-angle-view-engineer-architect-shaking-hands_23-2148233784.jpg", imageAlt: "Ananya Desai" }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          ariaLabel="Customer testimonials section"
        />
      </div>

      <div id="service-areas" data-section="service-areas">
        <SocialProofOne
          title="Serving Across Delhi NCR"
          description="Proudly providing expert false ceiling and interior design solutions across multiple regions."
          names={[
            "Faridabad",            "Delhi NCR",            "Noida",            "Gurugram",            "Ghaziabad",            "Greater Noida",            "Dwarka"]}
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          showCard={true}
          ariaLabel="Service areas section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Contact Us"
          description="Get in touch for a free site visit and no-obligation quotation. We're here to transform your space!"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "phone", type: "tel", placeholder: "Your Phone Number", required: true },
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your project...",            rows: 4,
            required: false,
          }}
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-photo/happy-colleagues-sitting-near-coffee-while-work-with-laptops_171337-16865.jpg"
          imageAlt="Modern interior design studio contact desk"
          mediaAnimation="opacity"
          mediaPosition="right"
          buttonText="Send Message"
          ariaLabel="Contact us form section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Home Decor Gypsum False Ceiling"
          columns={[
            { title: "Quick Links", items: [{ label: "Home", href: "#home" }, { label: "About Us", href: "#about" }, { label: "Our Services", href: "#services" }, { label: "Project Gallery", href: "#gallery" }] },
            { title: "Services", items: [{ label: "Gypsum Ceilings", href: "#services" }, { label: "Grid Ceilings", href: "#services" }, { label: "Gypsum Partitions", href: "#services" }, { label: "PVC Paneling", href: "#services" }] },
            { title: "Contact", items: [{ label: "+91 92667 03585", href: "tel:+919266703585" }, { label: "Get Free Quote", href: "#contact" }, { label: "Location", href: "https://maps.app.goo.gl/example" }] }
          ]}
          copyrightText="© 2024 Home Decor Gypsum False Ceiling. All rights reserved."
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}
