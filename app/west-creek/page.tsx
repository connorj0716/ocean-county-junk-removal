import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in West Creek, NJ. Same-day pickups on Main Street, Dock Road and the Eagleswood back roads. West Creek cleanouts, furniture and appliance hauling with upfront pricing. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "West Creek Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "West Creek Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/west-creek",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function WestCreekPage() {
  return (
    <LocationPage
      town="West Creek"
      badge="West Creek, NJ 08092"
      intro="West Creek is a short run down Route 9 for us, so junk removal here fits easily into the same day we are already working Manahawkin and Tuckerton. We cover Main Street, the properties out along Dock Road toward Westecunk Creek, and the wooded Eagleswood lots where old outbuildings, boat trailers and decades of stored equipment tend to pile up. These are largely older homes with detached garages and no HOA to answer to, which usually means bigger loads and easier access. We quote the whole job upfront and do all the carrying."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in West Creek and Eagleswood."
      localNote="Barn, shed and garage cleanouts are the West Creek job we run most. A lot of these properties have been in the same family for generations, and clearing one out means sorting scrap metal, lumber and appliances rather than just hauling furniture. We separate metal for recycling instead of dumping everything, and we can work a large property over multiple trips if one truckload will not cover it."
      jsonLd={localBusinessSchema({
        town: "West Creek",
        slug: "west-creek",
        description:
          "Junk removal in West Creek, NJ. Same-day furniture removal, appliance removal, garage and barn cleanouts and scrap hauling on Main Street, Dock Road and throughout Eagleswood Township.",
      })}
    />
  );
}
