import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "Galerie", "/pages/galerie.html", "/js/galerie.js"),
  new Route("/carte", "Carte", "/pages/carte.html", "/js/carte.js"),
  new Route(
    "/reservations",
    "Reservations",
    "/pages/reservations.html",
    "/js/reservations.js"
  ),
  new Route("/compte", "Compte", "/pages/compte.html", "/js/compte.js"),
  new Route("/connect", "Connect", "/pages/connect.html", "/js/connect.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
