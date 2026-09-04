import type { Metadata } from "next";
import LocationPage, { localBusinessSchema } from "@/components/site/LocationPage";

const DESCRIPTION =
  "Junk removal in Seaside Park, NJ. Same-day pickups along Central Avenue, Bayview Avenue and near Island Beach State Park. Seaside Park furniture and cleanout hauling with upfront pricing. Call (609) 384-5223.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Seaside Park Junk Removal | Fast, Affordable | Ocean County Junk Removal",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Seaside Park Junk Removal | Fast, Affordable",
    description: DESCRIPTION,
    url: "https://www.oceancountyjunkremoval.com/seaside-park",
    siteName: "Ocean County Junk Removal",
    locale: "en_US",
    type: "website",
  },
};

export default function SeasideParkPage() {
  return (
    <LocationPage
      town="Seaside Park"
      badge="Seaside Park, NJ 08752"
      intro="Seaside Park is quieter than its neighbor to the north, and junk removal here is mostly single-family and second-home work rather than share-house turnover. We cover the residential blocks off Central Avenue and Bayview Avenue, the bayside streets near the yacht club, and the southern end of the borough leading down to the Island Beach State Park gate. The lots are narrow and many homes are raised on pilings, so our crew is used to hauling down long exterior stairways without scuffing a thing. Every job is quoted upfront by volume."
      servicesHeading="Every Job, One Crew"
      servicesLede="One call, one crew, one upfront price anywhere in Seaside Park."
      localNote="Second-home owners in Seaside Park usually call us at the open or close of the season &mdash; clearing out water-damaged furniture, old beach gear and appliances that quit over the winter. Because we are already running Route 35 down the island, we can often add a Seaside Park stop the same day. We also handle renovation debris for the homes being raised and rebuilt along the bayfront, and we sweep the driveway before we pull out."
      jsonLd={localBusinessSchema({
        town: "Seaside Park",
        slug: "seaside-park",
        description:
          "Junk removal in Seaside Park, NJ. Same-day furniture removal, appliance removal, second-home cleanouts and renovation debris hauling along Central Avenue, Bayview Avenue and near Island Beach State Park.",
      })}
    />
  );
}
