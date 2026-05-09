"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
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
        {
          name: "Home",          id: "hero"},
        {
          name: "Services",          id: "services"},
        {
          name: "Recent Work",          id: "gallery"},
        {
          name: "Reviews",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="AJ NOVA CONSTRUCTION"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "gradient-bars"}}
      title="Reliable Construction & Home Improvement Services in NYC"
      description="AJ NOVA CONSTRUCTION helps homeowners and property owners with quality repairs, renovations, concrete work, roofing, fencing, stairs, masonry, and more across the Bronx, Brooklyn, Queens, Manhattan, and nearby areas."
      buttons={[
        {
          text: "Call Now: (929) 979-1915",          href: "tel:9299791915"},
        {
          text: "Request a Free Estimate",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/facades-building-with-fire-escapes_23-2148184317.jpg?_wi=1"
      imagePosition="right"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          tag: "Concrete",          title: "Driveways & Sidewalks",          subtitle: "Solid and smooth results",          description: "Expert concrete pouring for driveways, walkways, and NYC code-compliant sidewalk repairs.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DSqqDxxYbDAaWWPTM63eKDIKxT/uploaded-1778286417153-fu9qisg5.jpg",          imageAlt: "Japan landmark urban landscape"},
        {
          tag: "Exterior",          title: "Stairs & Masonry",          subtitle: "Built to last",          description: "Custom steps, retaining walls, and expert brickwork for city properties.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DSqqDxxYbDAaWWPTM63eKDIKxT/uploaded-1778286440502-e15pn1e4.jpg",          imageAlt: "Japan landmark urban landscape"},
        {
          tag: "Repair",          title: "Roofing & Fencing",          subtitle: "Quality protection",          description: "Professional roof patching, replacements, and secure fencing installations.",          imageSrc: "http://img.b2bpic.net/free-photo/engineers-throwing-papers-air_23-2147704212.jpg?_wi=2",          imageAlt: "Japan landmark urban landscape"},
        {
          tag: "Improvement",          title: "Home Renovation",          subtitle: "Your vision, realized",          description: "Comprehensive interior and exterior renovations tailored to your home needs.",          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-carrying-woman-with-wheelbarrow_23-2149382171.jpg?_wi=1",          imageAlt: "Japan landmark urban landscape"},
      ]}
      title="Our Professional Services"
      description="We specialize in residential and commercial property improvements across NYC."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "A Local Contractor You Can Actually Reach"},
      ]}
      buttons={[
        {
          text: "Get In Touch",          href: "#contact"},
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          role: "Homeowner",          company: "Bronx",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/excellent-idea-nice-job-portrait-supportive-delighted-happy-charming-female-friend-showing-th_1258-143019.jpg"},
        {
          id: "2",          name: "Michael C.",          role: "Homeowner",          company: "Queens",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-carrying-woman-with-wheelbarrow_23-2149382171.jpg?_wi=2"},
        {
          id: "3",          name: "Elena R.",          role: "Homeowner",          company: "Brooklyn",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/never-ending-happiness-our-new-home_329181-9763.jpg"},
        {
          id: "4",          name: "David K.",          role: "Homeowner",          company: "Manhattan",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-house-exterior-with-front-porch-landscaping_23-2151974392.jpg"},
        {
          id: "5",          name: "Anna P.",          role: "Homeowner",          company: "Yonkers",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-couple-making-plans-remodel-home-together_23-2148814635.jpg"},
      ]}
      kpiItems={[
        {
          value: "4.9",          label: "Google Rating"},
        {
          value: "9",          label: "Verified Reviews"},
        {
          value: "100%",          label: "Service Commitment"},
      ]}
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
      products={[
        {
          id: "1",          name: "Concrete Driveways",          price: "View Project",          variant: "Driveways",          imageSrc: "http://img.b2bpic.net/free-photo/builder-with-construction-tools-construction-site-looking-blueprint_169016-5269.jpg"},
        {
          id: "2",          name: "Secure Fencing",          price: "View Project",          variant: "Fencing",          imageSrc: "http://img.b2bpic.net/free-photo/exterior-modern-residential-building_637285-1921.jpg"},
        {
          id: "3",          name: "Roofing Repairs",          price: "View Project",          variant: "Roofing",          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-spanner-back-pocket-jeans-overall_23-2148085305.jpg"},
        {
          id: "4",          name: "Masonry Stairs",          price: "View Project",          variant: "Stairs",          imageSrc: "http://img.b2bpic.net/free-photo/old-construction-made-bricks_1137-229.jpg"},
        {
          id: "5",          name: "Brickwork",          price: "View Project",          variant: "Masonry",          imageSrc: "http://img.b2bpic.net/free-photo/man-painting-car-door-side-view_23-2149714298.jpg"},
        {
          id: "6",          name: "Full Renovation",          price: "View Project",          variant: "Renovations",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-mother-with-her-little-daughter-is-cooking-kitchen-home_1157-13735.jpg"},
      ]}
      title="Our Recent Work"
      description="Take a look at some of our completed projects around NYC."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",          title: "Local NYC Service",          content: "We know NYC construction codes and requirements."},
        {
          id: "2",          title: "Clear Communication",          content: "We keep you updated on progress, timeline, and costs."},
        {
          id: "3",          title: "Clean Finish",          content: "We leave your property clean and organized after every project."},
        {
          id: "4",          title: "Free Estimates",          content: "Transparent, no-obligation pricing for all projects."},
      ]}
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
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "Phone Number",          required: true,
        },
        {
          name: "address",          type: "text",          placeholder: "Property Address",          required: true,
        },
      ]}
      textarea={{
        name: "details",        placeholder: "Project details or service needed",        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/standard-quality-control-concept-m_23-2150041850.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="AJ NOVA CONSTRUCTION"
      columns={[
        {
          title: "AJ NOVA",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Services",              href: "#services"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Services",          items: [
            {
              label: "Driveways",              href: "#services"},
            {
              label: "Roofing",              href: "#services"},
            {
              label: "Masonry",              href: "#services"},
          ],
        },
        {
          title: "Info",          items: [
            {
              label: "Reviews",              href: "#testimonials"},
            {
              label: "Recent Work",              href: "#gallery"},
          ],
        },
      ]}
      copyrightText="© 2026 AJ NOVA CONSTRUCTION. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}