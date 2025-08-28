# StatusBuddy DIY Website

Eine moderne, responsive Website für das StatusBuddy IoT High Five System - Ein Uni-Projekt.

## 🚀 Features

- **Responsive Design** - Funktioniert auf allen Geräten
- **Moderne UI** - Sauberes, professionelles Design
- **Interaktive Elemente** - Animationen und Hover-Effekte  
- **Mobile Navigation** - Hamburger Menu für mobile Geräte
- **StatusBuddy Farben** - Rot, Blau, Grün Theme basierend auf dem Projekt

## 📁 Dateistruktur

```
DIY-Website/
├── index.html          # Haupt HTML-Datei
├── styles.css          # CSS Styling
├── script.js           # JavaScript Funktionalität
├── assets/             # Bilder und 3D-Modelle (optional)
└── WEBSITE_README.md   # Diese Datei
```

## 🛠️ Verwendung

1. **Lokal testen:**
   ```bash
   # Einfach index.html in einem Browser öffnen
   open index.html
   
   # Oder mit Live Server (wenn installiert)
   npx live-server
   ```

2. **Online hosten:**
   - GitHub Pages
   - Netlify (Drag & Drop)
   - Vercel
   - Oder jeder andere Static Hosting Service

## 🎨 Design-Elemente

### Farbschema (StatusBuddy Theme)
- **Rot (#e53e3e)** - Keine Aktivität
- **Blau (#3182ce)** - Ein Gerät berührt
- **Grün (#38a169)** - High Five erfolgreich
- **Dunkelgrau (#1a202c)** - Haupttext
- **Hellgrau (#f7fafc)** - Hintergrund

### Sections
- **Hero** - Projekt-Übersicht mit animierten Geräten
- **Features** - Wie das System funktioniert
- **Hardware** - Komponenten-Liste mit Preisen
- **Bauanleitung** - 4-Phasen Aufbau
- **3D-Modelle** - Download-Bereiche für STL-Dateien
- **Tech Specs** - Technische Spezifikationen

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 480px  
- **Mobile**: < 480px

## 🔧 Anpassungen

### Farben ändern
Bearbeite die CSS Custom Properties in `styles.css`:
```css
:root {
    --primary-red: #e53e3e;
    --primary-blue: #3182ce;
    --primary-green: #38a169;
    /* ... */
}
```

### Inhalte bearbeiten
Alle Texte befinden sich in `index.html` und können direkt bearbeitet werden.

### Neue Sections hinzufügen
1. HTML in `index.html` ergänzen
2. CSS Styling in `styles.css` hinzufügen
3. Navigation in der Navbar aktualisieren

## 🚀 Deployment

### GitHub Pages
1. Repository erstellen und Dateien hochladen
2. Settings → Pages → Source: "Deploy from a branch"
3. Branch: main, Folder: / (root)

### Netlify
1. Drag & Drop aller Dateien auf netlify.com/drop
2. Automatische URL wird generiert

## 📧 Support

Bei Fragen oder Problemen:
- Dokumentation in der Haupt-README.md
- GitHub Issues für Bug Reports
- Community Support im Discord

---

**StatusBuddy Website** | Ein Projekt des StatusBuddy DIY Systems | 2025
