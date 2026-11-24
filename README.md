# mdnss · The Cycling Madness – Linktree

Eigene Link-in-Bio-Seite für den Instagram-Account von **The Cycling Madness**.
Gestaltet nach den **mdnss Markenregeln**: weiße, ruhige Seite mit dem M-Muster aus dem neuen Trikot-Design
(nur Navy / Light Blue / Salmon / Weiß, keine Verläufe,
Schrift Glacial Indifference, keine runden Ecken,
Original-Logo, Seitentexte auf Spanisch, nie „TCM“).

- **Collab anfragen** – kleines Formular, das eine fertig ausgefüllte E-Mail öffnet
- **Strava Club** – direkter Link zum Club
- **Veranstaltungen** – eigene Seite (`events.html`); der Button erscheint nur, wenn kommende Termine eingetragen sind
- **Sponsoren** – Logo-Raster mit Links

## Inhalte bearbeiten

Alles steht in **`data.js`**:

| Feld | Bedeutung |
|------|-----------|
| `email` | Adresse für Collab-Anfragen |
| `strava` / `instagram` | Links zu Strava-Club und Instagram |
| `logo` / `hero` | Original-Logo und Titelfoto aus dem Brand Book |
| `events` | Termine mit `date: "JJJJ-MM-TT"` und `type` (`salida`, `evento`, `reto`, `carrera`) – vergangene wandern automatisch ins Archiv |
| `sponsors` | Partner 2027: Name, Rolle, `main: true` für den Hauptsponsor, Link und optional Logo (in `assets/sponsors/`) |
| `links` | beliebige weitere Buttons |

## Online stellen

Reine statische Seite ohne Build-Schritt – z. B. über **GitHub Pages**
(Settings → Pages → Branch wählen) oder **Netlify** (Ordner hochladen).
Die URL dann in der Instagram-Bio eintragen.

Lokal ansehen: `index.html` einfach im Browser öffnen.
