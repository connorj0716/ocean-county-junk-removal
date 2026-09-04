import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Lakewood, NJ. Same-day pickups on Clifton Avenue, near Lake Carasaljo and the Cedarbridge Avenue corridor. Lakewood cleanouts, furniture and appliance hauling, upfront pricing. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Lakewood Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Lakewood Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/lakewood",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function LakewoodPage() {
  return (
    <LocationPage
      town="Lakewood"
      badge="Lakewood, NJ 08701"
      intro="Lakewood is dense, fast-moving and constantly turning over, and our junk removal schedule here reflects that. We work the older streets around Clifton Avenue and Lake Carasaljo, the apartment and multi-family blocks where move-outs happen year-round, and the office and warehouse space along Cedarbridge Avenue and the industrial park. Parking is tight in a lot of Lakewood, so we bring the right size truck and get in and out without blocking a whole street. Pricing is set upfront by how much room your load takes, not by the hour."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in Lakewood."
      localNote="Multi-family and rental turnover is the backbone of our Lakewood work. Landlords call us between tenants to clear left-behind furniture, mattresses and appliances so a unit can be shown the next day, and we can usually get there within 24 hours. We also do commercial cleanouts for the offices and warehouses near the Lakewood Industrial Park, including desks, cubicle panels, shelving and pallets of dead inventory."
      jsonLd={localBusinessSchema({
        town: "Lakewood",
        slug: "lakewood",
        description:
          "Junk removal in Lakewood, NJ. Same-day furniture removal, appliance removal, apartment and commercial cleanouts on Clifton Avenue, near Lake Carasaljo and along Cedarbridge Avenue.",
      })}
    />
  );
}
