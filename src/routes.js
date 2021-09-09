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
  },
  {
    path: "/nossaHistoria",
    name: "ourHistory",
  },
  {
    path: "/local",
    name: "partySpot",
  },
  {
    path: "/ondeFicar",
    name: "nearbyPlaces",
  },
  {
    path: "/listaDePresentes",
    name: "giftList",
  },
  {
    path: "/mensagens",
    name: "messages",
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
