/*
 * ============================================================
 *  mdnss · The Cycling Madness – Inhalte der Linktree-Seite
 *  Nur diese Datei muss bearbeitet werden, um Links,
 *  Veranstaltungen und Sponsoren zu ändern.
 *  Sprache laut Brand Book: Spanisch, cercano y con energía.
 *  Nie „TCM“ als Abkürzung verwenden – kurz heißt es „mdnss“.
 * ============================================================
 */
window.SITE = {
  name: "The Cycling Madness",
  short: "mdnss",

  // Logo und Foto aus dem Brand Book (Logo nicht verändern oder nachbauen)
  logo: "assets/logo-navy.png",
  hero: "assets/hero.webp",

  // E-Mail-Adresse für Collab-Anfragen
  email: "thecyclingmdnss@gmail.com",

  // Social / Club Links
  instagram: "https://www.instagram.com/thecyclingmadness/",
  strava: "https://www.strava.com/clubs/mdnss",
  // Veranstaltungen des Strava Clubs (Club-ID 1192662)
  stravaEvents: "https://www.strava.com/clubs/1192662/group_events",

  // Zahlen-Leiste unter dem Kopf (kurz halten, Spanisch)
  stats: [
    { value: "3", label: "años rodando" },
    { value: "999", label: "ciclistas en Strava" },
    { value: "4", label: "grandes eventos en 2027" }
  ],

  // Weitere Links (optional). Beispiel:
  // { title: "Tienda", sub: "Maillots y más", url: "https://...", icon: "shop" }
  // Verfügbare Icons: link, shop, youtube, route, heart
  links: [],

  /*
   * Veranstaltungen
   * date:    "JJJJ-MM-TT" – vergangene Termine wandern automatisch ins Archiv.
   * type:    "salida" | "evento" | "reto" | "carrera"
   *          (die vier Formen aus dem Brand Book; Akzent Weiß, Light Blue oder Salmon)
   * edition: optional, römische Zahl, z. B. "IV"
   * route:   optional, SVG der Strecke als Linie (assets/routes/…)
   * Leer lassen = der Button „Próximas experiencias“ führt direkt zu den
   * Veranstaltungen im Strava Club (stravaEvents). Termine hier nur eintragen,
   * wenn sie zusätzlich auf einer eigenen Seite erscheinen sollen.
   */
  events: [
    {
      type: "salida",
      title: "Capsule Ride BCN\u2060–\u2060GIR\u2060–\u2060BCN",
      edition: "",
      date: "2026-12-19",
      time: "07:30",
      location: "Salida desde MØDE Coffee",
      distance: "185 km · 1.300 m de desnivel",
      description: "Barcelona – Girona – Barcelona. 10 € + un alimento no perecedero para el Banc dels Aliments. Coffee + cookie antes de salir y avituallamientos en ruta.",
      link: "https://www.grouprides.cc/rides/capsule-ride-barcelona-girona-barcelona-2026-12-19"
    },
    {
      type: "reto",
      title: "Mallorca Survival",
      edition: "",
      date: "2027-04-10",
      time: "06:30",
      location: "Palma → Palma · ferry desde Barcelona el viernes 9",
      distance: "301,6 km · 3.832 m de desnivel",
      description: "Vuelta a la isla en un día. Plazas para 20 a 30 ciclistas. Incluye ferry de ida, desayuno, avituallamientos, furgoneta de apoyo y maillot del evento de Gobik.",
      link: "https://mallorcasurvival.netlify.app",
      route: "assets/routes/mallorca-survival.svg"
    }
  ],

  /*
   * Partner 2027
   * main: true  = Hauptsponsor, wird größer und zuerst angezeigt
   * role:       was der Partner beisteuert (Spanisch, kurz)
   * logo:       Bild in assets/sponsors/ ablegen, z. B. "assets/sponsors/julbo.svg"
   *             (einfarbig navy auf transparent; leer = Name wird als Text angezeigt)
   * url:        Website oder Instagram (leer = nicht klickbar)
   */
  sponsors: [
    { name: "La Lonja", role: "Patrocinador principal", main: true, url: "", logo: "assets/sponsors/lalonja.svg" },
    { name: "Gobik", role: "Equipación y eventos", url: "https://gobik.com", logo: "assets/sponsors/gobik.svg" },
    { name: "Julbo", role: "Cascos, gafas y eventos", url: "https://www.julbo.com", logo: "assets/sponsors/julbo.png" },
    { name: "MØDE Coffee", role: "Café", url: "https://www.instagram.com/the.mode.coffee/", logo: "assets/sponsors/mode.png" }
  ]
};
