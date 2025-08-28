# StatusBuddy 3D-Modelle

Hier werden die 3D-Druckdateien für die StatusBuddy Gehäuse gespeichert.

## 📥 Verfügbare Modelle

### 1. Hauptgehäuse (main.stl)
- **Datei:** `main.stl`
- **Druckzeit:** ~4-5 Stunden
- **Material:** PLA/PETG
- **Besonderheiten:** Hauptkörper für ESP32, Display und alle Komponenten

### 2. Deckel (lid.stl)
- **Datei:** `lid.stl`
- **Druckzeit:** ~1-2 Stunden
- **Material:** PLA/PETG
- **Besonderheiten:** Abnehmbarer Deckel für einfachen Zugang zur Hardware

## 🖨️ Druck-Einstellungen

```
Layer Height:     0.2mm
Infill:          20%
Supports:        Ja (nur für Overhangs >45°)
Print Speed:     50mm/s
Nozzle Temp:     210°C (PLA) / 240°C (PETG)
Bed Temp:        60°C (PLA) / 80°C (PETG)
```

## 📄 Dateien

✅ `main.stl` - Hauptgehäuse (vorhanden)
✅ `lid.stl` - Deckel (vorhanden)

## 🔗 Download-Funktionalität

Die Website enthält bereits JavaScript für Download-Links. Die Download-Buttons sind funktional und verweisen auf:
- `assets/3d-models/main.stl`
- `assets/3d-models/lid.stl`

## 💡 Aufbau-Hinweise

1. **Hauptgehäuse zuerst drucken** - Enthält alle wichtigen Befestigungspunkte
2. **Deckel separat drucken** - Ermöglicht einfachen Zugang zum ESP32 Board
3. **Separate Teile** ermöglichen einfachen Zusammenbau und Wartung

---

**StatusBuddy 3D-Modelle** | Druckfertige STL-Dateien | 2025
