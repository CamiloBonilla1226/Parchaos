import { formatoPrecio } from '../../lib/tiposOferta'

// "Así de fácil pides": tres pasos fijos. El tercero menciona el domicilio gratis solo si
// esa oferta está activa, con su monto real (tabla ofertas); si no, un texto neutro.
export function PasosPedido({ montoDomicilioGratis }) {
  const pasos = [
    ['Elige tu granizado', 'Explora el menú y agrégalo al carrito.'],
    ['Confirma tus datos', 'Dirección y forma de pago en un momento.'],
    [
      'Recíbelo en tu puerta',
      montoDomicilioGratis
        ? `Domicilio gratis desde ${formatoPrecio.format(montoDomicilioGratis).replace(/\s/g, '')}.`
        : 'Te lo llevamos hasta donde estés.',
    ],
  ]

  return (
    <section className="inicio-seccion" aria-labelledby="titulo-pasos">
      <div className="inicio-seccion__encabezado">
        <h2 id="titulo-pasos" className="inicio-seccion__titulo">
          Así de fácil pides
        </h2>
      </div>
      <ol className="pasos-pedido">
        {pasos.map(([titulo, descripcion], indice) => (
          <li key={titulo} className="pasos-pedido__paso">
            <span className="pasos-pedido__numero" aria-hidden="true">
              {indice + 1}
            </span>
            <span>
              <strong className="pasos-pedido__titulo">{titulo}</strong>
              <span className="pasos-pedido__descripcion">{descripcion}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}
