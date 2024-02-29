import Home from "~/pages/Home";
import Destination from "~/pages/Destination";
import Search from "~/pages/Search";
import Listing from "~/pages/Listing";
import ListingDetails from "~/pages/ListingDetails";
const routes = [
  {
    path: "/",
    component: Home,
    layout: null,
  },
  {
    path: "/destinations",
    component: Destination,
    layout: null,
  },
  {
    path: "/search",
    component: Search,
    layout: null,
  },
  {
    path: "/listing",
    component: Listing,
    layout: null,
  },
  {
    path: "/listingdetails",
    component: ListingDetails,
    layout: null,
  },
];

export default routes;
