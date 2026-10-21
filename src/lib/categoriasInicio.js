// Categorías ancladas al Inicio de la carta de domicilios (columnas categorias.en_inicio y
// categorias.emoji_inicio, ver explicacion-script-bd.txt sección 4). El diseño de la
// cuadrícula de Inicio es de 2 columnas: solo se muestra con 2 o 4 categorías ancladas, para
// que nunca quede una casilla suelta. La base de datos impide anclar más de 4.

export const MAX_CATEGORIAS_INICIO = 4
const CANTIDADES_VALIDAS = [2, 4]

// Sugerencias del selector del admin; también se puede pegar cualquier otro emoji.
export const EMOJIS_SUGERIDOS = [
  '🍧', '🥤', '🧊', '🍹', '🍸', '🍺', '🍻', '🍾', '🥃', '🍷',
  '🍓', '🍋', '🥭', '🍍', '🍉', '🍒', '🥥', '🍑', '🫐', '🍫',
  '🍬', '🍿', '🍟', '🌭', '🎁', '🔥', '⭐', '💥', '🎉', '❤️',
]

// Un emoji (incluye los compuestos: tonos de piel, banderas, secuencias con ZWJ), sin texto.
export function esEmojiValido(texto) {
  const limpio = texto.trim()
  return limpio.length > 0 && limpio.length <= 16 && /^(?=.*(?:\p{Extended_Pictographic}|\p{Regional_Indicator}|\u20E3))(?:\p{Extended_Pictographic}|\p{Regional_Indicator}|\p{Emoji_Modifier}|\uFE0F|\u200D|\u20E3|[#*0-9])+$/u.test(limpio)
}

// De las categorías que ya se ven en la carta (activas, visibles en domicilios y con
// productos), las ancladas con emoji. Si no son exactamente 2 o 4, Inicio no muestra la sección.
export function categoriasDeInicio(categoriasVisibles) {
  const ancladas = categoriasVisibles.filter((categoria) => categoria.en_inicio && categoria.emoji_inicio)
  return CANTIDADES_VALIDAS.includes(ancladas.length) ? ancladas : []
}

// Texto de estado para el panel, según cuántas hay ancladas.
export function estadoAncladas(cantidad) {
  if (cantidad === 0) return 'Ninguna anclada: la sección de categorías no aparece en el inicio de la carta.'
  if (CANTIDADES_VALIDAS.includes(cantidad)) return `${cantidad} ancladas: se muestran en el inicio de la carta.`
  return `${cantidad} anclada${cantidad === 1 ? '' : 's'}: deben ser 2 o 4 para que la sección aparezca en el inicio.`
}

export const cantidadValida = (cantidad) => CANTIDADES_VALIDAS.includes(cantidad)
