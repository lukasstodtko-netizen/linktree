# The Cycling Madness – Linktree

Eigene Link-in-Bio-Seite für den Instagram-Account von **The Cycling Madness**.

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
| `logo` | z. B. `assets/logo.png` (leer = Initialen „TCM“) |
| `events` | Termine mit `date: "JJJJ-MM-TT"` – vergangene wandern automatisch ins Archiv |
| `sponsors` | Name, Link und optional Logo (Bild in `assets/sponsors/` ablegen) |
| `links` | beliebige weitere Buttons |

## Online stellen

Reine statische Seite ohne Build-Schritt – z. B. über **GitHub Pages**
(Settings → Pages → Branch wählen) oder **Netlify** (Ordner hochladen).
Die URL dann in der Instagram-Bio eintragen.

Lokal ansehen: `index.html` einfach im Browser öffnen.
