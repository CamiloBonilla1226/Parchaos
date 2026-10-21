import { normalizarTexto } from '../../lib/texto'
import { IconoBotella, IconoCombo, IconoCopa, IconoHielo, IconoJarra, IconoSnack, IconoVaso } from './iconos'

// La tabla categorias no guarda ícono: se elige uno según palabras del nombre, y si ninguna
// coincide se usa el vaso (el producto principal del negocio).
const ICONOS_POR_PALABRA = [
  [/cervez|michelad/, IconoJarra],
  [/licor|aguardient|ron\b|whisk|vodka|tequila|botell/, IconoBotella],
  [/coctel|vino|trago|shot/, IconoCopa],
  [/combo|promo|paquete|kit/, IconoCombo],
  [/hielo/, IconoHielo],
  [/snack|pasaboc|mecato|comida|papa|picad/, IconoSnack],
]

const COLORES = ['magenta', 'amarillo', 'menta', 'naranja']

function iconoCategoria(nombre) {
  const texto = normalizarTexto(nombre)
  return ICONOS_POR_PALABRA.find(([patron]) => patron.test(texto))?.[1] ?? IconoVaso
}

// "Explora por categoría": cuadrícula de 2 columnas con las categorías que tienen productos
// visibles en domicilios (las mismas del filtro del Menú). Tocar una abre el Menú filtrado
// por ella. Sin categorías la sección no se muestra.
export function CategoriasInicio({ categorias, cargando, error, onReintentar, onSeleccionar }) {
  if (!cargando && !error && categorias.length === 0) return null

  return (
    <section className="inicio-seccion" aria-labelledby="titulo-categorias">
      <div className="inicio-seccion__encabezado">
        <h2 id="titulo-categorias" className="inicio-seccion__titulo">
          Explora por categoría
        </h2>
      </div>

      {error ? (
        <div className="inicio-error" role="alert">
          <p>No pudimos cargar las categorías.</p>
          <button type="button" className="inicio-error__boton" onClick={onReintentar}>
            Reintentar
          </button>
        </div>
      ) : (
        <div className="categorias-inicio" aria-busy={cargando}>
          {cargando
            ? [0, 1, 2, 3].map((indice) => (
                <span key={indice} className="categorias-inicio__casilla categorias-inicio__casilla--cargando" aria-hidden="true" />
              ))
            : categorias.map((categoria, indice) => {
                const Icono = iconoCategoria(categoria.nombre)
                return (
                  <button
                    key={categoria.id}
                    type="button"
                    className="categorias-inicio__casilla"
                    onClick={() => onSeleccionar(categoria.id)}
                  >
                    <span className={`categorias-inicio__icono categorias-inicio__icono--${COLORES[indice % COLORES.length]}`}>
                      <Icono tamano={26} />
                    </span>
                    <span className="categorias-inicio__numero" aria-hidden="true">
                      {String(indice + 1).padStart(2, '0')}
                    </span>
                    <span className="categorias-inicio__nombre">{categoria.nombre}</span>
                  </button>
                )
              })}
        </div>
      )}
    </section>
  )
}
