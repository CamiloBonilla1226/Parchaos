import { Interruptor } from './Interruptor'
import { IconoCategoria } from '../inicio/IconoCategoria'

export function TablaCategorias({ categorias, cantidadProductos, onEditar, onEliminar, onToggleActivo }) {
  if (categorias.length === 0) {
    return <p className="texto-suave">Todavía no hay categorías. Crea la primera.</p>
  }

  return (
    <ul className="lista-categorias-admin">
      {categorias.map((categoria) => (
        <li
          key={categoria.id}
          className="tarjeta categoria-admin-item categoria-admin-item--clicable"
          onClick={() => onEditar(categoria)}
        >
          <span className="categoria-admin-item__nombre">
            {categoria.nombre}
            <span className="categoria-admin-item__cantidad">
              {cantidadProductos(categoria.id)} producto{cantidadProductos(categoria.id) === 1 ? '' : 's'}
            </span>
            {categoria.en_inicio && (
              <span className="categoria-admin-item__inicio" title="Anclada al inicio de la carta">
                <IconoCategoria clave={categoria.emoji_inicio} tamano={14} /> Inicio
              </span>
            )}
          </span>
          <div className="categoria-admin-item__acciones" onClick={(evento) => evento.stopPropagation()}>
            <Interruptor
              activo={categoria.activo}
              etiqueta=""
              onCambiar={(valor) => onToggleActivo(categoria.id, valor)}
            />
            <button type="button" className="carrito__quitar" onClick={() => onEliminar(categoria.id)}>
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
