import List from "../components/List/List";
import { LISTINGS } from "../data/dummy_data";

export default function HouseListingsScreen() {
  const type = "Trailer";
  const displayedListings = LISTINGS.filer((listingItem) => {
    return listingItem.type === type;
  })

  return <List items={displayedListings} />
}
