import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Waretown, NJ. Same-day pickups off Route 9, near Wells Mills County Park and the Barnegat Bay lagoons. Waretown furniture, appliance and cleanout hauling with upfront pricing. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Waretown Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Waretown Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/waretown",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function WaretownPage() {
  return (
    <LocationPage
      town="Waretown"
      badge="Waretown, NJ 08758"
      intro="Waretown sits directly on our daily Route 9 run, so junk removal here rarely takes more than a day to schedule. We cover the bayside streets off Bryant Road and Bayview Drive, the wooded lots stretching west toward Wells Mills County Park and Route 532, and the 55-plus communities where downsizing cleanouts are our most common call. Ocean Township properties tend to have long gravel driveways and detached sheds packed to the rafters, and we come equipped for both. The quote you get on the phone is the price on the invoice."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in Waretown and Ocean Township."
      localNote="A lot of our Waretown work comes from the bay-adjacent neighborhoods where garages fill with old crab traps, kayaks, deck boards and outboard parts nobody wants to load into a pickup. We haul it all in one trip. Homeowners backing up to the Wells Mills tract also call us seasonally for brush, downed limbs and fencing after storms roll through off the bay."
      jsonLd={localBusinessSchema({
        town: "Waretown",
        slug: "waretown",
        description:
          "Junk removal in Waretown, NJ. Same-day furniture removal, appliance removal, estate cleanouts and yard debris hauling off Route 9, near Wells Mills County Park and the Barnegat Bay lagoons.",
      })}
    />
  );
}
