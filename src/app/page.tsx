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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Recent Work",
          id: "gallery",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="AJ NOVA CONSTRUCTION"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="Reliable Construction & Home Improvement Services in NYC"
      description="AJ NOVA CONSTRUCTION helps homeowners and property owners with quality repairs, renovations, concrete work, roofing, fencing, stairs, masonry, and more across NYC, Westchester & Long Island."
      testimonials={[
        {
          name: "Alex R.",
          handle: "Bronx Homeowner",
          testimonial: "Incredible masonry work on our front steps. Highly recommended!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/engineers-throwing-papers-air_23-2147704212.jpg?_wi=1",
        },
        {
          name: "Sarah L.",
          handle: "Brooklyn Resident",
          testimonial: "Fast, professional, and reliable roof repair service.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-workers-high-five_23-2149366624.jpg",
        },
        {
          name: "Mike T.",
          handle: "Queens Property Owner",
          testimonial: "The concrete work they did for our driveway is perfect.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-builder-uniform-yellow-background_140725-112486.jpg",
        },
        {
          name: "Jessica M.",
          handle: "Staten Island",
          testimonial: "AJ Nova built our new backyard fence quickly and affordably.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/carefree-female-with-afro-hairstyle-holds-paint-tools-refurbishes-walls-house_273609-38577.jpg",
        },
        {
          name: "David W.",
          handle: "Manhattan Business",
          testimonial: "Solid craftsmanship and clear communication throughout.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/annoyed-woman-with-curly-afro-hairstyle-raises-palm-holds-paint-roller-refurbishes-walls-dressed-casually-stands-against-house-design-project_273609-38581.jpg",
        },
      ]}
      buttons={[
        {
          text: "Call Now: (929) 979-1915",
          href: "tel:9299791915",
        },
        {
          text: "Request a Free Estimate",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/facades-building-with-fire-escapes_23-2148184317.jpg?_wi=1"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-mother-with-little-son_1157-16830.jpg",
          alt: "Satisfied customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-with-eco-bag-with-fruit-country-side_1303-15249.jpg",
          alt: "Happy homeowner",
        },
        {
          src: "http://img.b2bpic.net/free-photo/work-life-joyful-middle-aged-man-comfortable-casual-clothes-talking-smartphone-gesturing-while-sitting-open-terrace-country-house-sunny-day_259150-59318.jpg",
          alt: "Local client",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-pouring-drink-his-girlfriend-sitting-rooftop_23-2147891094.jpg",
          alt: "Client portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-couple-standing-embraced-while-drinking-wine-kitchen_637285-3748.jpg",
          alt: "Construction success",
        },
      ]}
      avatarText="Trusted by 1000+ NYC homeowners"
      marqueeItems={[
        {
          type: "text",
          text: "Licensed & Insured",
        },
        {
          type: "text",
          text: "5-Star Service",
        },
        {
          type: "text",
          text: "NYC Code Compliant",
        },
        {
          type: "text",
          text: "Free Estimates",
        },
        {
          type: "text",
          text: "Quality Guaranteed",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          tag: "Concrete",
          title: "Driveways & Sidewalks",
          subtitle: "Solid and smooth results",
          description: "Expert concrete pouring for driveways, walkways, and NYC code-compliant sidewalk repairs.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DSqqDxxYbDAaWWPTM63eKDIKxT/uploaded-1778286417153-fu9qisg5.jpg",
          imageAlt: "Japan landmark urban landscape",
        },
        {
          tag: "Exterior",
          title: "Patio & Paving",
          subtitle: "Outdoor spaces done right",
          description: "From modern stone patios to custom walkways and backyard upgrades, we create functional outdoor spaces built to last.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DSqqDxxYbDAaWWPTM63eKDIKxT/uploaded-1778621589760-cho81ef2.jpg",
          imageAlt: "Japan landmark urban landscape",
        },
        {
          tag: "Repair",
          title: "Roofing",
          subtitle: "Strong roofs. Honest work.",
          description: "We provide quality roofing services using durable materials and attention to detail for long-lasting performance.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DSqqDxxYbDAaWWPTM63eKDIKxT/uploaded-1778286484824-e81k8i2z.jpg",
          imageAlt: "Japan landmark urban landscape",
        },
        {
          tag: "Exterior",
          title: "Fencing",
          subtitle: "Privacy. Security. Style.",
          description: "Custom vinyl and exterior fencing installations designed to improve privacy, security, and curb appeal with clean professional finishes.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DSqqDxxYbDAaWWPTM63eKDIKxT/uploaded-1778621548383-os3dxs9v.jpg",
          imageAlt: "Japan landmark urban landscape",
        },
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
          type: "text",
          content: "A Local Contractor You Can Actually Reach",
        },
      ]}
      buttons={[
        {
          text: "Get In Touch",
          href: "#contact",
        },
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
          id: "1",
          name: "Sarah J.",
          role: "Homeowner",
          company: "Bronx",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/excellent-idea-nice-job-portrait-supportive-delighted-happy-charming-female-friend-showing-th_1258-143019.jpg",
        },
        {
          id: "2",
          name: "Michael C.",
          role: "Homeowner",
          company: "Queens",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-carrying-woman-with-wheelbarrow_23-2149382171.jpg?_wi=2",
        },
        {
          id: "3",
          name: "Elena R.",
          role: "Homeowner",
          company: "Brooklyn",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/never-ending-happiness-our-new-home_329181-9763.jpg",
        },
        {
          id: "4",
          name: "David K.",
          role: "Homeowner",
          company: "Manhattan",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-house-exterior-with-front-porch-landscaping_23-2151974392.jpg",
        },
        {
          id: "5",
          name: "Anna P.",
          role: "Homeowner",
          company: "Yonkers",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-couple-making-plans-remodel-home-together_23-2148814635.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "4.9",
          label: "Google Rating",
        },
        {
          value: "9",
          label: "Verified Reviews",
        },
        {
          value: "100%",
          label: "Service Commitment",
        },
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
          id: "1",
          name: "Concrete Driveways",
          price: "View Project",
          variant: "Driveways",
          imageSrc: "http://img.b2bpic.net/free-photo/builder-with-construction-tools-construction-site-looking-blueprint_169016-5269.jpg",
        },
        {
          id: "2",
          name: "Secure Fencing",
          price: "View Project",
          variant: "Fencing",
          imageSrc: "http://img.b2bpic.net/free-photo/exterior-modern-residential-building_637285-1921.jpg",
        },
        {
          id: "3",
          name: "Roofing Repairs",
          price: "View Project",
          variant: "Roofing",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-spanner-back-pocket-jeans-overall_23-2148085305.jpg",
        },
        {
          id: "4",
          name: "Masonry Stairs",
          price: "View Project",
          variant: "Stairs",
          imageSrc: "http://img.b2bpic.net/free-photo/old-construction-made-bricks_1137-229.jpg",
        },
        {
          id: "5",
          name: "Brickwork",
          price: "View Project",
          variant: "Masonry",
          imageSrc: "http://img.b2bpic.net/free-photo/man-painting-car-door-side-view_23-2149714298.jpg",
        },
        {
          id: "6",
          name: "Full Renovation",
          price: "View Project",
          variant: "Renovations",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-mother-with-her-little-daughter-is-cooking-kitchen-home_1157-13735.jpg",
        },
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
          id: "1",
          title: "Local NYC Service",
          content: "We know NYC construction codes and requirements.",
        },
        {
          id: "2",
          title: "Clear Communication",
          content: "We keep you updated on progress, timeline, and costs.",
        },
        {
          id: "3",
          title: "Clean Finish",
          content: "We leave your property clean and organized after every project.",
        },
        {
          id: "4",
          title: "Free Estimates",
          content: "Transparent, no-obligation pricing for all projects.",
        },
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
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Phone Number",
          required: true,
        },
        {
          name: "address",
          type: "text",
          placeholder: "Property Address",
          required: true,
        },
      ]}
      textarea={{
        name: "details",
        placeholder: "Project details or service needed",
        rows: 4,
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
          title: "AJ NOVA",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Driveways",
              href: "#services",
            },
            {
              label: "Roofing",
              href: "#services",
            },
            {
              label: "Masonry",
              href: "#services",
            },
          ],
        },
        {
          title: "Info",
          items: [
            {
              label: "Reviews",
              href: "#testimonials",
            },
            {
              label: "Recent Work",
              href: "#gallery",
            },
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
