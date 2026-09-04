import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Lacey Township, NJ. Same-day pickups in Forked River, along Lacey Road and the Barnegat Bay lagoons. Lacey Township furniture, appliance and estate cleanouts, upfront pricing. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Lacey Township Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Lacey Township Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/lacey-township",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function LaceyTownshipPage() {
  return (
    <LocationPage
      town="Lacey Township"
      badge="Lacey Township & Forked River, NJ 08731"
      intro="Lacey Township and Forked River sit right on our Route 9 corridor, which makes junk removal here fast to schedule and easy to price. We work the whole township &mdash; the lagoon streets off Beach Boulevard and the Forked River marinas, the established neighborhoods along Lacey Road, and the wooded western lots running out toward Forked River Mountain and the Parkway. Waterfront homes here throw off a specific kind of junk: rotted dock boards, old bulkhead lumber, dead outboards and boat covers, and we take all of it. One crew, one truck, one price agreed to before we lift anything."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in Lacey Township and Forked River."
      localNote="Downsizing and estate cleanouts are our most frequent Lacey Township jobs, particularly in the older Forked River neighborhoods where longtime owners are selling. We can empty a full house, garage and attic in a day and route usable furniture to local donation instead of the landfill. Contractors renovating the lagoon-front properties near the Oyster Creek channel also use us for scheduled debris hauls so they never have to chase a dumpster permit."
      jsonLd={localBusinessSchema({
        town: "Lacey Township",
        slug: "lacey-township",
        description:
          "Junk removal in Lacey Township and Forked River, NJ. Same-day furniture removal, appliance removal, estate cleanouts and dock debris hauling along Lacey Road and the Barnegat Bay lagoons.",
      })}
    />
  );
}
