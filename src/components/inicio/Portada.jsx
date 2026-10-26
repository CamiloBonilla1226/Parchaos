import { negocioConfig } from '../../config/negocio.config'
import { useAhora } from '../../hooks/useAhora'
import { detalleEstado } from '../../lib/horario'

// Primera pantalla de Inicio, armada como el letrero del local: el logo encendido, qué vende
// y si está atendiendo (con la hora de cierre o de la próxima apertura), la frase grande con
// los dos tubos de neón debajo y un solo botón para ir al Menú. Abierto dice "Pedir ahora";
// cerrado, "Ver el menú", porque igual se puede mirar la carta.
export function Portada({ lema, cargandoLema, horario, onIrAlMenu }) {
  const ahora = useAhora()
  const detalle = detalleEstado(horario, ahora)

  return (
    <section className="portada" aria-labelledby="portada-lema">
      <div className="portada__logo">
        <img src="/logo.webp" alt={negocioConfig.nombre} width="640" height="628" fetchPriority="high" />
      </div>

      <div className="portada__ficha">
        <p className="portada__rubro">{negocioConfig.rubro}</p>
        {detalle && (
          <p className={`portada__estado portada__estado--${detalle.estado}`}>
            <span className="portada__estado-letrero">{detalle.estado === 'abierto' ? 'Abierto' : 'Cerrado'}</span>
            <span>{detalle.texto}</span>
          </p>
        )}
      </div>

      <h1 id="portada-lema" className={`portada__lema${cargandoLema ? ' portada__lema--cargando' : ''}`}>
        {lema}
      </h1>

      <span className="portada__tubos" aria-hidden="true">
        <span />
        <span />
      </span>

      <button type="button" className="portada__cta" onClick={() => onIrAlMenu()}>
        {detalle?.estado === 'cerrado' ? 'Ver el menú' : 'Pedir ahora'}
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      </button>
    </section>
  )
}
