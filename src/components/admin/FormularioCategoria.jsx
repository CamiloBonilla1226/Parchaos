import { useState } from 'react'
import { mensajeAmigablePostgres } from '../../lib/erroresAmigables'
import { EMOJIS_SUGERIDOS, esEmojiValido, MAX_CATEGORIAS_INICIO } from '../../lib/categoriasInicio'

// `ancladasOtras`: cuántas OTRAS categorías están ancladas al inicio de la carta, para no
// dejar anclar una quinta (la base de datos también lo impide) y avisar si queda en 2 o 4.
export function FormularioCategoria({ categoriaInicial, ancladasOtras = 0, onGuardar, onCancelar }) {
  const [nombre, setNombre] = useState(categoriaInicial?.nombre ?? '')
  const [visibleDomicilios, setVisibleDomicilios] = useState(categoriaInicial?.visible_domicilios ?? true)
  const [visibleCartaFisica, setVisibleCartaFisica] = useState(categoriaInicial?.visible_carta_fisica ?? true)
  const [enInicio, setEnInicio] = useState(categoriaInicial?.en_inicio ?? false)
  const [emoji, setEmoji] = useState(categoriaInicial?.emoji_inicio ?? '')
  const [guardando, setGuardando] = useState(false)
  const [error, setError] = useState(null)

  const sinCupo = !enInicio && ancladasOtras >= MAX_CATEGORIAS_INICIO
  const totalAncladas = ancladasOtras + (enInicio ? 1 : 0)

  const enviar = async (evento) => {
    evento.preventDefault()
    if (enInicio && !esEmojiValido(emoji)) {
      setError('Elige el emoji que se mostrará en el inicio de la carta.')
      return
    }
    setGuardando(true)
    setError(null)

    const resultado = await onGuardar({
      nombre: nombre.trim(),
      visible_domicilios: visibleDomicilios,
      visible_carta_fisica: visibleCartaFisica,
      en_inicio: enInicio,
      // Al desanclar se conserva el emoji, por si se vuelve a anclar después.
      emoji_inicio: esEmojiValido(emoji) ? emoji.trim() : null,
    })

    setGuardando(false)
    if (resultado && !resultado.exito) {
      setError(mensajeAmigablePostgres(resultado.error, 'No se pudo guardar la categoría.'))
    }
  }

  return (
    <form className="checkout" onSubmit={enviar} noValidate>
      <label className="campo">
        <span>Nombre</span>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required maxLength={80} autoFocus />
      </label>

      <label className="campo campo--linea">
        <input
          type="checkbox"
          checked={visibleDomicilios}
          onChange={(e) => setVisibleDomicilios(e.target.checked)}
        />
        <span>Mostrar en carta de domicilios</span>
      </label>

      <label className="campo campo--linea">
        <input
          type="checkbox"
          checked={visibleCartaFisica}
          onChange={(e) => setVisibleCartaFisica(e.target.checked)}
        />
        <span>Mostrar en carta física</span>
      </label>

      <fieldset className="categoria-inicio">
        <legend>Inicio de la carta</legend>
        <label className="campo campo--linea">
          <input
            type="checkbox"
            checked={enInicio}
            disabled={sinCupo}
            onChange={(e) => setEnInicio(e.target.checked)}
          />
          <span>Anclar en el inicio de la carta de domicilios</span>
        </label>
        <p className="texto-suave categoria-inicio__ayuda">
          {sinCupo
            ? `Ya hay ${MAX_CATEGORIAS_INICIO} categorías ancladas. Desancla una para anclar esta.`
            : `Se muestran solo si hay 2 o 4 ancladas. Con esta quedarían ${totalAncladas}.`}
        </p>

        {enInicio && (
          <div className="categoria-inicio__emoji">
            <span className="categoria-inicio__etiqueta">
              Emoji {emoji && <span className="categoria-inicio__elegido">{emoji}</span>}
            </span>
            <div className="selector-emoji" role="group" aria-label="Elegir emoji">
              {EMOJIS_SUGERIDOS.map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  className="selector-emoji__opcion"
                  aria-pressed={emoji === opcion}
                  onClick={() => {
                    setEmoji(opcion)
                    setError(null)
                  }}
                >
                  {opcion}
                </button>
              ))}
            </div>
            <label className="campo">
              <span>¿Otro? Pégalo aquí</span>
              <input type="text" value={emoji} onChange={(e) => setEmoji(e.target.value)} maxLength={16} />
            </label>
          </div>
        )}
      </fieldset>

      {error && <p className="campo__error">{error}</p>}

      <div className="opciones-producto__acciones">
        <button type="button" className="boton boton--secundario" onClick={onCancelar}>
          Cancelar
        </button>
        <button type="submit" className="boton" disabled={guardando}>
          {guardando ? 'Guardando…' : 'Guardar'}
        </button>
      </div>
    </form>
  )
}
