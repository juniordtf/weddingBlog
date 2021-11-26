// @flow

// Used to build the ReactRouter routes, main menu and home view
// "name" field should correspond to view directory name and key in translations

export type RouteDefinition = {
  path: string,
  name: string,
};

const routes: Array<RouteDefinition> = [
  {
    path: "/",
    name: "home",
    activeClassName: "active",
  },
  {
    path: "/nossaHistoria",
    name: "ourHistory",
    activeClassName: "active",
  },
  {
    path: "/local",
    name: "partySpot",
    activeClassName: "active",
  },
  {
    path: "/ondeFicar",
    name: "nearbyPlaces",
    activeClassName: "active",
  },
  {
    path: "/listaDePresentes",
    name: "giftList",
    activeClassName: "active",
  },
  {
    path: "/mensagens",
    name: "messages",
    activeClassName: "active",
  },
  {
    path: "/rsvp",
    name: "rsvp",
    activeClassName: "active",
  },
];

export const getRouteByName = (name: string): RouteDefinition => {
  const result = routes.find((route) => route.name === name);

  if (!result) {
    throw new Error(`Could not get route by name "${name}": does not exist!`);
  }

  return result;
};

export default routes;
