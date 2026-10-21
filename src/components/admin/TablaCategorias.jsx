import { Interruptor } from './Interruptor'
import { IconoCategoria } from '../inicio/IconoCategoria'
import { claveIcono } from '../../lib/categoriasInicio'

// Dónde se muestra la categoría, en palabras cortas para la línea de detalle de la tarjeta.
function textoVisibilidad(categoria) {
  if (categoria.visible_domicilios && categoria.visible_carta_fisica) return 'Domicilios y carta física'
  if (categoria.visible_domicilios) return 'Solo domicilios'
  if (categoria.visible_carta_fisica) return 'Solo carta física'
  return 'Oculta en las cartas'
}

// Tarjetas de categorías: tocar la tarjeta abre el formulario (editar, productos, eliminar);
// el interruptor activa o desactiva sin abrirla. Eliminar vive solo dentro del formulario
// para que no se borre una categoría por un toque accidental en la lista.
export function TablaCategorias({ categorias, cantidadProductos, onEditar, onToggleActivo }) {
  if (categorias.length === 0) {
    return <p className="texto-suave">Todavía no hay categorías. Crea la primera.</p>
  }

  return (
    <ul className="lista-categorias-admin">
      {categorias.map((categoria) => {
        const cantidad = cantidadProductos(categoria.id)
        const icono = claveIcono(categoria.emoji_inicio)
        return (
          <li
            key={categoria.id}
            className={`tarjeta categoria-ficha${categoria.activo ? '' : ' categoria-ficha--inactiva'}`}
          >
            <button
              type="button"
              className="categoria-ficha__abrir"
              onClick={() => onEditar(categoria)}
              aria-label={`Editar ${categoria.nombre}`}
            >
              <span className="categoria-ficha__icono" aria-hidden="true">
                {icono ? (
                  <IconoCategoria clave={icono} tamano={22} />
                ) : (
                  categoria.nombre.trim().charAt(0).toUpperCase()
                )}
              </span>
              <span className="categoria-ficha__texto">
                <span className="categoria-ficha__nombre">
                  {categoria.nombre}
                  {categoria.en_inicio && <span className="categoria-ficha__insignia">Inicio</span>}
                </span>
                <span className="categoria-ficha__detalle">
                  {cantidad} producto{cantidad === 1 ? '' : 's'} · {textoVisibilidad(categoria)}
                </span>
              </span>
            </button>
            <div className="categoria-ficha__estado">
              <Interruptor
                activo={categoria.activo}
                etiqueta={categoria.activo ? 'Activa' : 'Inactiva'}
                onCambiar={(valor) => onToggleActivo(categoria.id, valor)}
              />
            </div>
          </li>
        )
      })}
    </ul>
  )
}
