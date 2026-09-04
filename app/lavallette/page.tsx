import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Lavallette, NJ. Same-day pickups on Grand Central Avenue and the bayfront streets near the gazebo. Lavallette furniture, appliance and cleanout hauling, upfront pricing. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Lavallette Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Lavallette Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/lavallette",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function LavallettePage() {
  return (
    <LocationPage
      town="Lavallette"
      badge="Lavallette, NJ 08735"
      intro="Lavallette is a small borough with tight numbered streets running bay to ocean, and we handle junk removal on every one of them. Most of our work sits a block or two off Grand Central Avenue, in the family homes and long-held summer places that pass down through generations. The bayfront blocks near the gazebo and the borough beach give us plenty of dock boards, old kayaks and rusted patio sets to haul, while the ocean side sends us mattresses and worn bedroom sets. We price the job before we load and the crew carries everything out."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in Lavallette."
      localNote="Because so many Lavallette homes have stayed in the same family for decades, attic and garage cleanouts here turn up forty years of accumulation &mdash; beach chairs, crib furniture, old carpet and boxes nobody has opened since the eighties. We sort it as we go, pulling out anything worth donating. Lavallette's strict summer parking rules mean we book island stops early in the morning so we are loaded and gone before the beach traffic starts."
      jsonLd={localBusinessSchema({
        town: "Lavallette",
        slug: "lavallette",
        description:
          "Junk removal in Lavallette, NJ. Same-day furniture removal, appliance removal, attic and garage cleanouts and dock debris hauling on Grand Central Avenue and the bayfront streets.",
      })}
    />
  );
}
