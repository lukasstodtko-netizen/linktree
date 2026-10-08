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
  logo: "assets/logo-white.png",
  hero: "assets/hero.jpg",

  // E-Mail-Adresse für Collab-Anfragen
  email: "thecyclingmdnss@gmail.com",

  // Social / Club Links
  instagram: "https://www.instagram.com/thecyclingmadness/",
  strava: "https://www.strava.com/clubs/mdnss",

  // Weitere Links (optional). Beispiel:
  // { title: "Tienda", sub: "Maillots y más", url: "https://...", icon: "shop" }
  // Verfügbare Icons: link, shop, youtube, route, heart
  links: [],

  /*
   * Veranstaltungen
   * date:    "JJJJ-MM-TT" – vergangene Termine wandern automatisch ins Archiv.
   * type:    "salida" | "evento" | "reto" | "carrera"
   *          (die vier Formen aus dem Brand Book, jede mit eigener Akzentfarbe)
   * edition: optional, römische Zahl, z. B. "IV"
   * Gibt es keine kommenden Termine, wird der Button auf der Startseite ausgeblendet.
   */
  events: [
    {
      type: "salida",
      title: "Café & ruta",
      edition: "",
      date: "2026-11-14",
      time: "09:00",
      location: "[Punto de salida]",
      distance: "[80] km · ritmo social",
      description: "Salida en grupeta, a tu ritmo, y café al final. Trae a quien quieras.",
      link: "" // optional: inscripción, evento de Strava, ruta de Komoot …
    }
  ],

  /*
   * Sponsoren
   * logo: Bild in assets/sponsors/ ablegen, z. B. "assets/sponsors/julbo.png"
   *       (leer = Name wird als Text angezeigt)
   * url:  Website des Sponsors (leer = Kachel ist nicht klickbar)
   */
  sponsors: [
    { name: "Congelats del Nord", url: "https://congelatsdelnord.com", logo: "" },
    { name: "Julbo", url: "https://www.julbo.com", logo: "" },
    { name: "Jordan Workshop", url: "https://www.instagram.com/jordan.workshop/", logo: "" },
    { name: "MØDE Coffee", url: "https://www.instagram.com/the.mode.coffee/", logo: "" }
  ]
};
