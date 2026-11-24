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
  hero: "assets/hero.webp",

  // E-Mail-Adresse für Collab-Anfragen
  email: "thecyclingmdnss@gmail.com",

  // Social / Club Links
  instagram: "https://www.instagram.com/thecyclingmadness/",
  strava: "https://www.strava.com/clubs/mdnss",
  // Veranstaltungen des Strava Clubs (Club-ID 1192662)
  stravaEvents: "https://www.strava.com/clubs/1192662/group_events",

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
   * Leer lassen = der Button „Próximas experiencias“ führt direkt zu den
   * Veranstaltungen im Strava Club (stravaEvents). Termine hier nur eintragen,
   * wenn sie zusätzlich auf einer eigenen Seite erscheinen sollen.
   */
  events: [
    // Beispiel:
    // { type: "salida", title: "Café & ruta", edition: "", date: "2026-11-14", time: "09:00",
    //   location: "Punto de salida", distance: "80 km · ritmo social",
    //   description: "Salida en grupeta …", link: "https://www.strava.com/clubs/1192662/group_events/…" }
  ],

  /*
   * Partner 2027
   * main: true  = Hauptsponsor, wird größer und zuerst angezeigt
   * role:       was der Partner beisteuert (Spanisch, kurz)
   * logo:       Bild in assets/sponsors/ ablegen, z. B. "assets/sponsors/julbo.svg"
   *             (einfarbig weiß oder navy; leer = Name wird als Text angezeigt)
   * url:        Website oder Instagram (leer = nicht klickbar)
   */
  sponsors: [
    { name: "La Lonja", role: "Patrocinador principal", main: true, url: "", logo: "" },
    { name: "Gobik", role: "Equipación y eventos", url: "https://gobik.com", logo: "" },
    { name: "Julbo", role: "Cascos, gafas y eventos", url: "https://www.julbo.com", logo: "" },
    { name: "MØDE Coffee", role: "Café", url: "https://www.instagram.com/the.mode.coffee/", logo: "" }
  ]
};
