import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in South Toms River, NJ. Same-day pickups off Dover Road and the Route 166 corridor. South Toms River furniture, appliance and rental cleanouts with upfront pricing. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "South Toms River Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "South Toms River Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/south-toms-river",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function SouthTomsRiverPage() {
  return (
    <LocationPage
      town="South Toms River"
      badge="South Toms River, NJ 08757"
      intro="South Toms River is a small borough just across the river from downtown, and it is one of the easiest stops on our route. We handle junk removal on the residential streets off Dover Road, the blocks running toward Attleboro Boulevard, and the properties along the Route 166 corridor where older homes and small commercial buildings sit side by side. A lot of these houses are compact with detached garages and no basement, so garages and back yards are usually where the real load is. We give you one upfront price and do every bit of the lifting."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in South Toms River."
      localNote="Landlords and property managers make up a good share of our South Toms River work, calling us between tenants to clear left-behind furniture, mattresses and appliances so a unit can turn over fast. We also do plenty of yard and garage clearing along the Dover Road side of the borough. Since our trucks are in Toms River nearly every day, most South Toms River jobs get picked up within 24 hours."
      jsonLd={localBusinessSchema({
        town: "South Toms River",
        slug: "south-toms-river",
        description:
          "Junk removal in South Toms River, NJ. Same-day furniture removal, appliance removal, rental turnover cleanouts and yard debris hauling off Dover Road and the Route 166 corridor.",
      })}
    />
  );
}
