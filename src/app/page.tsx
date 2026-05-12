"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumLargeSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Core Services", id: "/services" },
        { name: "Recent Work", id: "gallery" },
        { name: "Reviews", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="AJ NOVA CONSTRUCTION"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      title="Reliable Construction & Home Improvement Services in NYC"
      description="AJ NOVA CONSTRUCTION helps homeowners and property owners with quality repairs, renovations, concrete work, roofing, fencing, stairs, masonry, and more across NYC, Westchester & Long Island."
      testimonials={[]}
      buttons={[
        { text: "Call Now: (929) 979-1915", href: "tel:9299791915" },
        { text: "Request a Free Estimate", href: "#contact" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/facades-building-with-fire-escapes_23-2148184317.jpg?_wi=1"
      avatarText="Trusted by 1000+ NYC homeowners"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={true}
      features={[]}
      title="Our Core Services"
      description="We specialize in residential and commercial property improvements across NYC."
      buttons={[{ text: "View Core Services", href: "/services" }]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[{ type: "text", content: "A Local Contractor You Can Actually Reach" }]}
      buttons={[{ text: "Get In Touch", href: "#contact" }]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[]}
      kpiItems={[{ value: "4.9", label: "Google Rating" }, { value: "9", label: "Verified Reviews" }, { value: "100%", label: "Service Commitment" }]}
      title="Trusted by Local Homeowners"
      description="With a 4.9 star rating across 9 Google reviews, we pride ourselves on transparency and quality."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[]}
      title="Our Recent Work"
      description="Take a look at some of our completed projects around NYC."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[]}
      title="Why Homeowners Choose AJ NOVA"
      description="Professional construction services built on local trust and reliability."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Request a Free Estimate"
      description="Fill out the form below and we will contact you shortly regarding your home improvement needs."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name", required: true },
        { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
        { name: "address", type: "text", placeholder: "Property Address", required: true },
      ]}
      textarea={{ name: "details", placeholder: "Project details or service needed", rows: 4, required: true }}
      imageSrc="http://img.b2bpic.net/free-photo/standard-quality-control-concept-m_23-2150041850.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="AJ NOVA CONSTRUCTION"
      columns={[]}
      copyrightText="© 2026 AJ NOVA CONSTRUCTION. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
