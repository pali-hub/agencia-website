markdown
# 🎨 Instrucciones para cambiar el color amarillo en MegaMenu.tsx

## 📍 Ubicación 1: Fondo de la casilla (línea ~108)

Busca esta línea:

```tsx
className={`group flex items-start gap-3 rounded-xl border border-neutral-200/60 bg-white/40 p-4 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-amber-300/70 hover:bg-amber-50/70 hover:shadow-lg ${
Cambia estos valores:

hover:border-amber-300/70 → Color del borde

hover:bg-amber-50/70 → Color del fondo

📍 Ubicación 2: Icono (línea ~114)
tsx
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-neutral-200/60 bg-white/80 text-neutral-500 shadow-sm transition-all group-hover:border-amber-300/70 group-hover:bg-amber-100/80 group-hover:text-amber-700">
Cambia estos valores:

group-hover:border-amber-300/70 → Borde del icono

group-hover:bg-amber-100/80 → Fondo del icono

group-hover:text-amber-700 → Color del icono

📍 Ubicación 3: Título (línea ~123)
tsx
<div className="text-sm font-semibold text-neutral-800 transition-colors group-hover:text-amber-900">
Cambia:

group-hover:text-amber-900 → Color del título en hover

📍 Ubicación 4: Ring de página activa (línea ~109)
tsx
currentPath === item.href ? 'ring-2 ring-amber-400/50' : ''
Cambia:

ring-amber-400/50 → Anillo cuando está seleccionado

🎨 Paleta de colores alternativos
🟡 Tonos de amarillo
Nombre	Clases sugeridas
Amarillo limón	yellow-50/70, yellow-100/80, yellow-300/70, yellow-700, yellow-900
Amarillo miel	amber-50/70, amber-100/80, amber-300/70, amber-700, amber-900 (actual)
Amarillo dorado	amber-100/70, amber-200/80, amber-400/70, amber-800, amber-950
🟢 Otros colores pastel modernos
Color	Clases sugeridas
Verde menta	emerald-50/70, emerald-100/80, emerald-300/70, emerald-700, emerald-900
Azul cielo	sky-50/70, sky-100/80, sky-300/70, sky-700, sky-900
Rosa suave	pink-50/70, pink-100/80, pink-300/70, pink-700, pink-900
Lavanda	purple-50/70, purple-100/80, purple-300/70, purple-700, purple-900
Melocotón	orange-50/70, orange-100/80, orange-300/70, orange-700, orange-900
📝 Ejemplos de reemplazo
✅ Cambiar a verde menta
tsx
// Línea ~108 - Casilla
hover:border-emerald-300/70 hover:bg-emerald-50/70

// Línea ~114 - Icono
group-hover:border-emerald-300/70 group-hover:bg-emerald-100/80 group-hover:text-emerald-700

// Línea ~123 - Título
group-hover:text-emerald-900

// Línea ~109 - Ring
ring-emerald-400/50
✅ Cambiar a azul cielo
tsx
// Casilla
hover:border-sky-300/70 hover:bg-sky-50/70

// Icono
group-hover:border-sky-300/70 group-hover:bg-sky-100/80 group-hover:text-sky-700

// Título
group-hover:text-sky-900

// Ring
ring-sky-400/50