import { useEffect, useState } from 'react'
import { negocioConfig } from '../../config/negocio.config'
import { useNegocioConfig } from '../../hooks/useNegocioConfig'
import { calcularEstadoAbierto } from '../../lib/horario'

// Header fijo de la carta de domicilios: nombre del negocio + estado Abierto/Cerrado.
// El estado se recalcula cada minuto para que, si alguien deja la carta abierta justo
// cuando cruza la hora de cierre, el indicador cambie solo sin necesitar un refresh. Sin
// horario configurado (o mientras carga) no se muestra el indicador.
export function HeaderNegocio() {
  const { config } = useNegocioConfig()
  const [ahora, setAhora] = useState(() => new Date())

  useEffect(() => {
    const intervalo = setInterval(() => setAhora(new Date()), 60_000)
    return () => clearInterval(intervalo)
  }, [])

  const estado = calcularEstadoAbierto(config?.horario, ahora)

  return (
    <header className="header-negocio">
      <div className="contenedor header-negocio__contenido">
        <span className="header-negocio__marca">{negocioConfig.nombre}</span>
        {estado && (
          <span className={`estado-negocio estado-negocio--${estado}`}>
            {estado === 'abierto' && <span className="estado-negocio__punto" aria-hidden="true" />}
            {estado === 'abierto' ? 'Abierto' : 'Cerrado'}
          </span>
        )}
      </div>
    </header>
  )
}
