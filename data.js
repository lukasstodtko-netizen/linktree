/*
 * ============================================================
 *  THE CYCLING MADNESS – Inhalte der Linktree-Seite
 *  Nur diese Datei muss bearbeitet werden, um Links,
 *  Veranstaltungen und Sponsoren zu ändern.
 * ============================================================
 */
window.SITE = {
  name: "The Cycling Madness",
  tagline: "Bikes. Kilometer. Wahnsinn.",
  // Pfad zu eurem Logo (z. B. "assets/logo.png"). Leer lassen = Initialen "TCM".
  logo: "",

  // E-Mail-Adresse für Collab-Anfragen
  email: "thecyclingmdnss@gmail.com",

  // Social / Club Links
  instagram: "https://www.instagram.com/thecyclingmadness/",
  strava: "https://www.strava.com/clubs/mdnss",

  // Weitere Links (optional). Beispiel:
  // { title: "Unser Shop", url: "https://...", icon: "shop" }
  // Verfügbare Icons: link, shop, youtube, route, heart
  links: [],

  /*
   * Veranstaltungen
   * date: "JJJJ-MM-TT" – vergangene Termine wandern automatisch ins Archiv.
   * Gibt es keine kommenden Termine, wird der Button auf der Startseite ausgeblendet.
   */
  events: [
    {
      title: "Season Opener Ride",
      date: "2026-11-14",
      time: "09:00 Uhr",
      location: "Treffpunkt: Marktplatz",
      distance: "80 km · 600 hm",
      description: "Gemeinsame Ausfahrt im Gruppentempo, anschließend Kaffee & Kuchen.",
      link: "" // optional: Anmeldung, Strava-Event, Komoot-Route …
    }
  ],

  /*
   * Sponsoren
   * logo: Bild in assets/sponsors/ ablegen, z. B. "assets/sponsors/julbo.png"
   *       (leer = Name wird als Text angezeigt)
   * url:  Website des Sponsors (leer = Kachel ist nicht klickbar)
   */
  sponsors: [
    { name: "Congelats", url: "", logo: "" },
    { name: "Julbo", url: "https://www.julbo.com", logo: "" },
    { name: "Jordan", url: "", logo: "" },
    { name: "Mode", url: "", logo: "" }
  ]
};
