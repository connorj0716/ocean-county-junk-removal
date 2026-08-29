import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Ocean Acres and Stafford Township, NJ. Same-day furniture, appliance and garage cleanouts off the Route 72 corridor. Upfront pricing, fully insured. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Ocean Acres NJ Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Ocean Acres NJ Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/ocean-acres",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function OceanAcresPage() {
  return (
    <LocationPage
      town="Ocean Acres"
      badge="Ocean Acres &middot; Stafford Township, NJ 08050"
      intro="Junk removal in Ocean Acres is a weekly run for us. It is one of the largest developments in Ocean County, and after twenty-plus years most of those homes are on their second round of furniture, appliances and garage clutter. We work the neighborhood constantly, from the streets off Nautilus Drive and Weymouth Drive to the newer sections backing up toward Barnegat. Our trucks run the Route 72 corridor between Manahawkin and the Parkway every day, so an Ocean Acres pickup usually fits into the same-day or next-morning schedule. You point at what goes, our crew carries it out and sweeps up behind it."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in Ocean Acres and Stafford Township."
      localNote="Because Ocean Acres sits minutes from our Manahawkin base, we are the junk removal service homeowners here call for the awkward jobs other haulers turn down &mdash; a single sleeper sofa out of a finished basement, a hot tub off a back deck, or a full garage clear-out before a move. We also cover the rest of Stafford Township including Manahawkin proper, Beach Haven West and the Bay Avenue business district."
      jsonLd={localBusinessSchema({
        town: "Ocean Acres",
        slug: "ocean-acres",
        description:
          "Junk removal in Ocean Acres and Stafford Township, NJ. Same-day furniture removal, appliance removal, estate cleanouts and construction debris hauling along the Route 72 corridor.",
      })}
    />
  );
}
