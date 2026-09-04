import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Ocean Gate, NJ. Same-day pickups on Cape May Avenue, Asbury Avenue and near the Ocean Gate boardwalk. Ocean Gate furniture, appliance and cleanout hauling, upfront pricing. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Ocean Gate Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Ocean Gate Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/ocean-gate",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function OceanGatePage() {
  return (
    <LocationPage
      town="Ocean Gate"
      badge="Ocean Gate, NJ 08740"
      intro="Ocean Gate is barely a mile square, tucked where the Toms River meets Barnegat Bay, and we cover every street in it. Junk removal here runs from the bungalows and converted summer cottages along Cape May Avenue and Asbury Avenue to the homes lining the boardwalk on the river. Those older cottages have small doors, low ceilings and crawlspaces packed tight, which makes a single-item pull more work than it looks like from the curb &mdash; our crew handles it without complaint. We quote by volume before we start loading."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in Ocean Gate."
      localNote="Most Ocean Gate calls come from owners updating an older cottage &mdash; out goes the paneling, the shag carpet, the 1970s kitchen appliances and the shed that finally gave out. We take the whole mix in one load. Because we are already running through Beachwood and Pine Beach, an Ocean Gate stop is usually available the same day you call."
      jsonLd={localBusinessSchema({
        town: "Ocean Gate",
        slug: "ocean-gate",
        description:
          "Junk removal in Ocean Gate, NJ. Same-day furniture removal, appliance removal, cottage and shed cleanouts and renovation debris hauling on Cape May Avenue, Asbury Avenue and near the boardwalk.",
      })}
    />
  );
}
