// "Explora por categoría": cuadrícula de 2 columnas con las categorías que el admin ancló al
// inicio, cada una con el emoji que eligió (ver lib/categoriasInicio.js: solo llegan aquí si
// son 2 o 4). Tocar una abre el Menú filtrado por ella. Sin categorías la sección no se muestra.
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
            : categorias.map((categoria, indice) => (
                <button
                  key={categoria.id}
                  type="button"
                  className="categorias-inicio__casilla"
                  onClick={() => onSeleccionar(categoria.id)}
                >
                  <span className="categorias-inicio__emoji" aria-hidden="true">
                    {categoria.emoji_inicio}
                  </span>
                  <span className="categorias-inicio__numero" aria-hidden="true">
                    {String(indice + 1).padStart(2, '0')}
                  </span>
                  <span className="categorias-inicio__nombre">{categoria.nombre}</span>
                </button>
              ))}
        </div>
      )}
    </section>
  )
}
