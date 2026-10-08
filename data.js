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
  email: "collab@thecyclingmadness.de",

  // Social / Club Links
  instagram: "https://www.instagram.com/thecyclingmadness",
  strava: "https://www.strava.com/clubs/thecyclingmadness",

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
   * logo: Bild in assets/sponsors/ ablegen (leer = Name wird als Text angezeigt)
   */
  sponsors: [
    { name: "Sponsor 1", url: "https://example.com", logo: "" },
    { name: "Sponsor 2", url: "https://example.com", logo: "" },
    { name: "Sponsor 3", url: "https://example.com", logo: "" }
  ]
};
