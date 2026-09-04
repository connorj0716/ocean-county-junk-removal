import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Jackson, NJ. Same-day pickups near Six Flags Great Adventure, Bennetts Mills and along Whitesville Road. Jackson estate cleanouts and debris hauling with upfront pricing. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Jackson Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Jackson Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/jackson",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function JacksonPage() {
  return (
    <LocationPage
      town="Jackson"
      badge="Jackson Township, NJ 08527"
      intro="Jackson Township covers a lot of ground, and junk removal out here usually means long driveways, big garages and properties with real storage space to empty. We work the neighborhoods along Jackson Mills Road and Bennetts Mills Road, the developments off Whitesville Road, and the newer construction spreading near the outlets and Six Flags Great Adventure. Larger lots mean sheds, pole barns and yard equipment come with the job more often than they do down at the shore. We give you a firm number upfront and load everything ourselves."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in Jackson Township."
      localNote="Because Jackson properties tend to be big, our most common job here is the whole-property cleanout rather than a single-item pickup. Garages, barns, above-ground pools and years of accumulated yard equipment all go out in one visit. We also handle post-construction debris for the builders working the new sections off Route 528 and Cedar Swamp Road, and we recycle metal and clean lumber rather than sending it straight to the transfer station."
      jsonLd={localBusinessSchema({
        town: "Jackson",
        slug: "jackson",
        description:
          "Junk removal in Jackson, NJ. Same-day furniture removal, appliance removal, garage and property cleanouts and construction debris hauling near Bennetts Mills, Whitesville Road and Six Flags Great Adventure.",
      })}
    />
  );
}
