// Íconos de línea de la sección Inicio (trazo `currentColor`, sin relleno).

const trazo = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }

function Svg({ tamano = 24, children }) {
  return (
    <svg viewBox="0 0 24 24" width={tamano} height={tamano} aria-hidden="true" {...trazo}>
      {children}
    </svg>
  )
}

// Vaso de granizado con pitillo: imagen de respaldo y categoría por defecto.
export const IconoVaso = ({ tamano }) => (
  <Svg tamano={tamano}>
    <path d="M6 8h12l-1.6 12.2a1 1 0 0 1-1 .8H8.6a1 1 0 0 1-1-.8L6 8Z" />
    <path d="M5 8h14M13 8l2.5-5H18" />
    <path d="M7 13h10" />
  </Svg>
)

export const IconoBotella = ({ tamano }) => (
  <Svg tamano={tamano}>
    <path d="M10 2h4M10.5 2v4.5L8 10v11h8V10l-2.5-3.5V2" />
    <path d="M8 14h8" />
  </Svg>
)

export const IconoJarra = ({ tamano }) => (
  <Svg tamano={tamano}>
    <path d="M5 7h10v13H5zM15 10h2.5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5H15" />
    <path d="M5 7c0-2 1.5-3 3-3 .8-1 2.2-1 3 0 1.5 0 3 1 4 3" />
    <path d="M8.5 11v6M11.5 11v6" />
  </Svg>
)

export const IconoCopa = ({ tamano }) => (
  <Svg tamano={tamano}>
    <path d="M6 3h12l-6 8-6-8ZM12 11v9M8 21h8" />
  </Svg>
)

export const IconoCombo = ({ tamano }) => (
  <Svg tamano={tamano}>
    <path d="M3 9h18v4H3zM5 13v8h14v-8M12 9v12" />
    <path d="M12 9c-2-4-6.5-4-6.5-1.5S9 9 12 9Zm0 0c2-4 6.5-4 6.5-1.5S15 9 12 9Z" />
  </Svg>
)

export const IconoHielo = ({ tamano }) => (
  <Svg tamano={tamano}>
    <path d="M12 2v20M3.5 7l17 10M20.5 7l-17 10" />
    <path d="M9.5 3.5 12 6l2.5-2.5M9.5 20.5 12 18l2.5 2.5" />
  </Svg>
)

export const IconoSnack = ({ tamano }) => (
  <Svg tamano={tamano}>
    <path d="M6 4h12l-1 4 1 12H6l1-12-1-4Z" />
    <path d="M7 8h10M10 12.5l1 1.5M14 12l-1 2.5" />
  </Svg>
)

export const IconoReloj = ({ tamano }) => (
  <Svg tamano={tamano}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
)

export const IconoUbicacion = ({ tamano }) => (
  <Svg tamano={tamano}>
    <path d="M12 21s7-6.2 7-11.5a7 7 0 1 0-14 0C5 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Svg>
)

export const IconoRedes = ({ tamano }) => (
  <Svg tamano={tamano}>
    <rect x="3.5" y="3.5" width="17" height="17" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17 7h.01" />
  </Svg>
)

export const IconoWhatsapp = ({ tamano }) => (
  <Svg tamano={tamano}>
    <path d="M4 20l1.3-4A8 8 0 1 1 8.4 19L4 20Z" />
    <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8a5 5 0 0 1-2.7-2.7l.8-1-1-2L9 8.5Z" />
  </Svg>
)
