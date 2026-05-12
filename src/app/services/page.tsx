"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function ServicesPage() {
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
        <NavbarLayoutFloatingOverlay
            navItems={[
                { name: "Home", id: "/" },
                { name: "Core Services", id: "/services" },
                { name: "Recent Work", id: "/#gallery" },
                { name: "Reviews", id: "/#testimonials" },
                { name: "Contact", id: "/#contact" },
            ]}
            brandName="AJ NOVA CONSTRUCTION"
        />

        <div id="services" className="pt-32 pb-20">
            <FeatureCardNineteen
                textboxLayout="default"
                useInvertedBackground={false}
                title="Core Services"
                description="Professional home improvement solutions tailored to your property needs."
                features={[
                    { tag: "Roofing", title: "Roofing", subtitle: "Roof Repair, Roof Replacement, Leak Repair, Flashing Repair", description: "Complete roofing solutions for longevity and safety.", buttons: [] },
                    { tag: "Concrete", title: "Concrete & Sidewalks", subtitle: "Concrete Driveways, Sidewalk Installation, Concrete Repair, Walkways", description: "High-quality concrete work meeting NYC standards.", buttons: [] },
                    { tag: "Patios", title: "Patios & Paving", subtitle: "Paver Patios, Backyard Paving, Walkways, Outdoor Living Spaces", description: "Transform your outdoor space into a functional retreat.", buttons: [] },
                    { tag: "Masonry", title: "Masonry & Brickwork", subtitle: "Brick Pointing, Retaining Walls, Stone Veneer, Masonry Repair", description: "Precision brickwork and stonework craftsmanship.", buttons: [] },
                    { tag: "Stairs", title: "Stairs & Railings", subtitle: "Concrete Steps, Brick Steps, Front Entrance Stairs, Railings", description: "Safe, aesthetic, and durable step installations.", buttons: [] },
                    { tag: "Fencing", title: "Fencing", subtitle: "Vinyl Fencing, Privacy Fences, Fence Installation, Fence Replacement", description: "Secure and private fencing solutions for your home.", buttons: [] }
                ]}
            />
        </div>

        <FooterBaseReveal
            logoText="AJ NOVA CONSTRUCTION"
            columns={[]}
            copyrightText="© 2026 AJ NOVA CONSTRUCTION. All rights reserved."
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
