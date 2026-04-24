import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import WhyUs from "@/components/site/WhyUs";
import ServiceArea from "@/components/site/ServiceArea";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://oceancountyjunkremoval.com/#business",
  name: "Ocean County Junk Removal",
  description:
    "Full-service junk removal company serving all of Ocean County, NJ — including Toms River, Manahawkin, Brick, Lacey, Stafford, Barnegat and Long Beach Island. Same-day junk hauling, furniture removal, appliance removal, estate cleanouts and construction debris.",
  url: "https://oceancountyjunkremoval.com",
  telephone: "+1-732-555-0199",
  image: "https://oceancountyjunkremoval.com/og.jpg",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toms River",
    addressRegion: "NJ",
    postalCode: "08753",
    addressCountry: "US",
  },
  areaServed: [
    "Toms River, NJ",
    "Manahawkin, NJ",
    "Brick Township, NJ",
    "Lacey Township, NJ",
    "Stafford Township, NJ",
    "Barnegat, NJ",
    "Long Beach Island, NJ",
    "Beach Haven, NJ",
    "Point Pleasant, NJ",
    "Jackson, NJ",
    "Lakewood, NJ",
    "Forked River, NJ",
    "Waretown, NJ",
    "Tuckerton, NJ",
    "Little Egg Harbor, NJ",
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.9537,
    longitude: -74.1979,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/oceancountyjunkremoval",
    "https://www.instagram.com/oceancountyjunkremoval",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Residential Junk Removal" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Furniture Removal" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Appliance Removal" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Estate & Home Cleanouts" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Construction Debris Removal" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Yard Waste Removal" },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "212",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <ServiceArea />
      <Contact />
      <Footer />
    </>
  );
}
