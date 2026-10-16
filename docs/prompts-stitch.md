# Prompts para Google Stitch — PAR CHAOS

Prompts para generar en Google Stitch las pantallas de la carta de domicilios de PAR CHAOS (granizados y bebidas, Popayán) y de su panel de administración. Están armados sobre lo que ya hace el código, no sobre funciones inventadas:

- La app es de **un solo negocio**: cada negocio cliente tiene su propia copia, con su marca.
- **El cliente no tiene cuenta.** El pedido se arma en la carta, se guarda y se envía por **WhatsApp**. No hay pasarela de pago, perfil de cliente ni seguimiento del pedido en vivo.
- La navegación inferior tiene **tres pestañas: Inicio, Menú y Carrito.**

## Cómo usarlos

1. Empieza un proyecto nuevo en Stitch en modo **App (móvil)** y pega el **Prompt 1** tal cual.
2. Cuando la pantalla principal quede bien, pega los prompts 2 a 7 **de a uno**, en el mismo proyecto, y corrige cada pantalla antes de pasar a la siguiente.
3. Para el panel, abre **otro proyecto** en modo **Web** y sigue el mismo orden: el A1 primero y después los A2 a A4.
4. Si una pantalla sale mal, corrígela con un mensaje corto que cambie una sola cosa (ejemplo al final del archivo), en vez de volver a pegar el prompt completo.

## Guía de estilo (ya incluida en cada prompt)

| Elemento | Valor |
|---|---|
| Fondo de la app | `#030617` (azul noche) |
| Superficie (tarjetas, barras) | `#080B24` |
| Primario (botones, pestaña activa, precios de oferta) | `#F000FF` (magenta neón) |
| Secundario (detalles, estados) | `#7B2CFF` (violeta) |
| Acentos puntuales | `#00E5FF` (cian), `#F5FF00` (amarillo) |
| Éxito / "Abierto" | `#00F5A0` |
| Error / "Agotado" | `#FF6B81` |
| Texto | `#FFFFFF`; texto secundario blanco al 70 % |
| Bordes | blanco al 14 % (1 px) |
| Tipografía | **Space Grotesk** para títulos y precios, **Inter** para el resto (propuesta: hoy el código usa la fuente del sistema) |
| Esquinas | **Rectas, 0 px**, en todo: botones, tarjetas, campos, chips, imágenes, hojas inferiores |
| Tono | Nocturno, juvenil y directo, pero minimalista: sin degradados de relleno, sin sombras difusas y con poco brillo neón (solo en el elemento principal de cada pantalla) |
| Moneda | Pesos colombianos sin decimales: `$8.000` |

---

## App móvil del cliente

### Prompt 1 — Inicio (pantalla principal)

```text
Diseña la pantalla de inicio de una app móvil (390 x 844 px) para PAR CHAOS, un negocio de granizados y bebidas en Popayán, Colombia. La app es la carta digital del negocio: los clientes, en su mayoría jóvenes de 18 a 30 años, ven los productos, arman un pedido a domicilio y lo envían por WhatsApp. No hay registro ni inicio de sesión. Todo el texto va en español de Colombia.

Elementos, de arriba hacia abajo:
1. Barra superior fija de 57 px de alto, fondo #080B24, con una línea inferior de 1 px blanca al 14 %. A la izquierda, el logotipo "PAR CHAOS" en texto de 40 px de alto. A la derecha, una etiqueta pequeña "Abierto" en verde #00F5A0 con un punto del mismo color delante.
2. Logo circular del negocio centrado, de unos 180 px de ancho, con 16 px de espacio arriba y abajo. Es la única pieza circular de la pantalla.
3. Tarjeta de oferta a todo el ancho, con fondo #080B24 y borde de 1 px magenta #F000FF. A la izquierda, un bloque cuadrado magenta con el ícono de línea de una moto de domicilio. Al centro, el rótulo pequeño "OFERTA" en mayúsculas magenta, el título "Domicilio gratis desde $40.000" en blanco y una línea de descripción en blanco al 70 %: "Válido todos los días en Popayán". A la derecha, una flecha →.
4. Título de sección "Los más pedidos" y, debajo, un carrusel horizontal de tarjetas de 150 px de ancho que se desliza con el dedo, con la siguiente tarjeta asomando cortada en el borde derecho. Cada tarjeta lleva una foto cuadrada del granizado, el nombre ("Granizado de mora", "Maracumango", "Granizado de café con licor"), el precio en blanco y, en una de ellas, el precio original tachado en gris con el precio de oferta en magenta al lado.
5. Bloque "Sobre nosotros": un párrafo corto sobre el negocio; debajo, una lista con un ícono de línea a la izquierda de cada fila: dirección ("Calle 5 # 8-20, Centro"), horario ("Lun - Dom · 2:00 p. m. - 11:00 p. m.") e íconos de Instagram y WhatsApp.
6. Barra de navegación inferior fija, fondo #080B24, con una línea superior de 1 px, tres pestañas del mismo ancho, ícono de línea arriba y texto pequeño abajo: "Inicio" (activa, en magenta #F000FF, con una barra de 2 px magenta en el borde superior), "Menú" y "Carrito" (blanco al 70 %). El carrito lleva un contador cuadrado magenta con el número 2.

Estilo visual:
- Fondo general #030617; tarjetas y barras #080B24; bordes de 1 px blanco al 14 %.
- Color primario magenta #F000FF; secundario violeta #7B2CFF; acentos puntuales cian #00E5FF y amarillo #F5FF00; éxito #00F5A0; error #FF6B81.
- Texto blanco #FFFFFF; texto secundario blanco al 70 %.
- Tipografía: Space Grotesk para títulos y precios; Inter para el resto del texto.
- Todas las esquinas rectas (radio 0 px) en botones, tarjetas, imágenes, chips y campos. Sin bordes redondeados.
- Tono nocturno, juvenil y directo, pero minimalista y profesional: sin degradados de relleno, sin sombras difusas, brillo neón solo en el borde de la tarjeta de oferta. Composición con jerarquía clara, no simétrica ni genérica.
- Precios en pesos colombianos sin decimales, con punto de miles ($8.000).
```

### Prompt 2 — Menú (carta del negocio)

```text
Diseña la pantalla "Menú" de la misma app de PAR CHAOS. Mantén exactamente el mismo estilo visual (colores, tipografía, esquinas rectas de 0 px), la misma barra superior y la misma barra de navegación inferior de la pantalla de inicio, con la pestaña "Menú" activa en magenta.

Elementos, de arriba hacia abajo:
1. La barra superior fija, igual a la de inicio.
2. Un campo de búsqueda a todo el ancho, fondo #080B24, borde de 1 px blanco al 14 %, ícono de lupa a la izquierda y el texto de ejemplo "Buscar en el menú".
3. Una fila horizontal de categorías que se desliza con el dedo: "Todos", "Granizados", "Granizados con licor", "Malteadas", "Jugos", "Para picar". "Granizados" está seleccionada (fondo magenta #F000FF, texto #030617); las demás llevan borde de 1 px blanco al 14 % y texto blanco. Son rectángulos de esquinas rectas.
4. Título de la categoría activa: "Granizados".
5. Lista vertical de productos con una línea divisoria de 1 px entre filas. Cada fila lleva: foto cuadrada de 72 px a la izquierda; al centro, el nombre en blanco, una descripción de dos líneas como máximo en blanco al 70 % y el precio; a la derecha, un botón cuadrado de 40 px con un "+" para agregar rápido, con borde magenta. Muestra seis productos:
   - "Granizado de mora", $8.000
   - "Maracumango", precio original $10.000 tachado en gris y precio de oferta $8.500 en magenta, con una etiqueta pequeña "OFERTA" en amarillo #F5FF00 sobre la foto
   - "Granizado de lulo", $8.000
   - "Granizado de café", $9.000
   - "Limonada de coco", $9.500
   - "Granizado de fresa": foto en escala de grises al 50 %, etiqueta "Agotado" en rojo #FF6B81 en lugar del precio y sin botón "+"
6. La barra de navegación inferior fija, con "Menú" activa y el contador "2" en "Carrito".
```

### Prompt 3 — Detalle de producto

```text
Diseña el detalle de producto de la misma app de PAR CHAOS, como una hoja que sube desde abajo y cubre el 85 % de la pantalla, sobre el menú oscurecido con una capa negra al 60 %. Mantén el mismo estilo visual (colores, tipografía, esquinas rectas de 0 px, incluida la hoja). La barra de navegación inferior queda tapada por la hoja.

Elementos de la hoja, de arriba hacia abajo:
1. Una barra corta horizontal centrada de 40 x 4 px, en blanco al 30 %, que indica que la hoja se cierra deslizando hacia abajo.
2. Foto del producto a todo el ancho de la hoja, proporción 4:3: un granizado de maracuyá y mango en vaso transparente.
3. El nombre "Maracumango" en Space Grotesk grande y, debajo, la descripción en blanco al 70 %: "Granizado de maracuyá con trozos de mango y un toque de chamoy".
4. El precio: $10.000 tachado en gris y $8.500 en magenta #F000FF.
5. Grupo "Tamaño", con la nota "· obligatorio" en magenta. Dos opciones de selección única en filas a todo el ancho con borde de 1 px: "12 oz" (seleccionada, borde magenta y marcador cuadrado relleno) y "16 oz +$2.000".
6. Grupo "Adiciones", con la nota "· opcional" en blanco al 70 %. Opciones de selección múltiple con casilla cuadrada: "Leche condensada +$1.500" (marcada), "Gomitas +$1.000", "Chamoy extra +$1.000", "Shot de ron +$4.000".
7. Selector de cantidad: un botón cuadrado "−", el número "1" y un botón cuadrado "+".
8. Barra fija al fondo de la hoja con dos botones: "Cancelar" (secundario, borde de 1 px blanco al 14 %, texto blanco) a la izquierda, y "Agregar · $10.000" (primario, fondo magenta #F000FF, texto #030617, dos tercios del ancho) a la derecha.
```

### Prompt 4 — Carrito

```text
Diseña la pantalla "Carrito" de la misma app de PAR CHAOS. Mantén exactamente el mismo estilo visual (colores, tipografía, esquinas rectas de 0 px), la misma barra superior y la misma barra de navegación inferior, con la pestaña "Carrito" activa en magenta y el contador "3".

Elementos, de arriba hacia abajo:
1. La barra superior fija, igual a la de inicio.
2. Título "Tu pedido" y, a la derecha, el texto pequeño "3 productos".
3. Barra de progreso hacia la oferta: el texto "Te faltan $11.500 para el domicilio gratis" y, debajo, una barra horizontal de 6 px de alto con fondo blanco al 14 % y relleno magenta #F000FF hasta el 70 %.
4. Lista de productos agregados; cada uno es un bloque con fondo #080B24 y borde de 1 px:
   - Foto cuadrada de 56 px a la izquierda; al centro, el nombre "Maracumango", el tamaño "12 oz" y, en texto pequeño blanco al 70 %, "+ Leche condensada"; a la derecha, el subtotal "$10.000".
   - Una fila inferior con un ícono de papelera, el selector de cantidad "− 1 +" con botones cuadrados y un enlace "Editar" en magenta.
   - Un segundo producto: "Granizado de mora", "16 oz", cantidad 2, subtotal "$20.000".
5. Sección "¿Le sumas algo?": carrusel horizontal de tarjetas pequeñas, con la siguiente asomando cortada, cada una con foto, nombre, precio y un botón "+" cuadrado ("Papas de limón $4.000", "Limonada de coco $9.500").
6. Fila de total con línea divisoria superior: "Total" a la izquierda y "$30.000" en Space Grotesk grande a la derecha.
7. Botón primario a todo el ancho, fondo magenta #F000FF y texto #030617: "Continuar con el pedido".
8. La barra de navegación inferior fija.
```

### Prompt 4b — Carrito vacío (opcional)

```text
Crea una variante de la pantalla "Carrito" de PAR CHAOS para cuando el carrito está vacío. Mantén la misma barra superior, la misma barra de navegación inferior (con "Carrito" activa y sin contador) y el mismo estilo. En el centro de la pantalla: un ícono de línea de un carrito de 64 px en blanco al 30 %, el texto "Tu carrito está vacío", la línea en blanco al 70 % "Elige un granizado del menú para empezar" y un botón con borde magenta y texto magenta, "Ver el menú". Elimina todo lo demás.
```

### Prompt 5 — Datos de entrega y envío por WhatsApp

```text
Diseña la pantalla de datos de entrega de la misma app de PAR CHAOS, la que aparece al tocar "Continuar con el pedido". Mantén el mismo estilo visual (colores, tipografía, esquinas rectas de 0 px), la misma barra superior y la misma barra de navegación inferior con "Carrito" activa.

Elementos, de arriba hacia abajo:
1. La barra superior fija, igual a la de inicio.
2. Un enlace "← Volver al carrito" en blanco al 70 % y el título "Datos de entrega".
3. Resumen compacto del pedido en un bloque con fondo #080B24 y borde de 1 px: "1x Maracumango 12 oz — $10.000", "2x Granizado de mora 16 oz — $20.000" y una línea divisoria seguida de "Total $30.000" en Space Grotesk.
4. Formulario con tres campos a todo el ancho, cada uno con su etiqueta encima en texto pequeño: "Nombre", "Teléfono" (con el prefijo +57 fijo a la izquierda) y "Dirección de entrega" (con el texto de ejemplo "Ej. Calle 5 # 8-20, barrio Centro"). Los campos tienen fondo #080B24, borde de 1 px blanco al 14 % y esquinas rectas. Muestra el campo "Teléfono" en estado de error: borde rojo #FF6B81 y, debajo, el mensaje "Escribe un número de 10 dígitos".
5. Una nota informativa en blanco al 70 %, con un ícono de información: "El pago se acuerda con el negocio por WhatsApp. Puedes pagar en efectivo o por transferencia al recibir."
6. Botón primario a todo el ancho, fijo sobre la barra de navegación: fondo magenta #F000FF, texto #030617, ícono de WhatsApp a la izquierda y el texto "Enviar pedido por WhatsApp".
7. La barra de navegación inferior fija.
```

### Prompt 6 — Pedido enviado

```text
Diseña la pantalla de confirmación "Pedido enviado" de la misma app de PAR CHAOS, la que aparece después de enviar el pedido por WhatsApp. Mantén el mismo estilo visual (colores, tipografía, esquinas rectas de 0 px), la misma barra superior y la misma barra de navegación inferior (con "Inicio" activa y sin contador en el carrito).

Elementos, de arriba hacia abajo:
1. La barra superior fija, igual a la de inicio.
2. Un bloque cuadrado de 72 px con borde de 2 px verde #00F5A0 y un ícono de check de línea en verde.
3. El título "¡Pedido enviado!" en Space Grotesk grande.
4. El texto en blanco al 70 %: "Tu pedido quedó registrado. Termina de enviarlo en WhatsApp y el negocio te confirmará ahí el tiempo de entrega y la forma de pago."
5. Un bloque de resumen con fondo #080B24 y borde de 1 px: el número del pedido "Pedido #0142", la dirección "Calle 5 # 8-20, Centro", "3 productos" y "Total $30.000".
6. Un botón secundario a todo el ancho, con borde magenta, texto magenta e ícono de WhatsApp: "Abrir WhatsApp de nuevo", para quien cerró WhatsApp sin enviar el mensaje.
7. Un botón primario a todo el ancho, con fondo magenta #F000FF y texto #030617: "Volver al inicio".
8. La barra de navegación inferior fija.
```

### Prompt 7 — Negocio cerrado (opcional)

```text
Crea una variante de la pantalla "Menú" de PAR CHAOS para cuando el negocio está cerrado. Mantén todo igual, con tres cambios: (1) en la barra superior, la etiqueta pasa a "Cerrado", con texto y punto en gris #9AA0B8; (2) debajo del buscador aparece una franja a todo el ancho, con fondo #080B24 y borde izquierdo de 3 px amarillo #F5FF00, que dice "Estamos cerrados. Abrimos hoy a las 2:00 p. m. Puedes ver el menú, pero los pedidos se reciben en horario de atención."; (3) los botones "+" de los productos se ven deshabilitados, con borde blanco al 14 % e ícono en blanco al 30 %.
```

---

## Panel de administración (web de escritorio)

### Prompt A1 — Pedidos entrantes (pantalla principal del panel)

```text
Diseña la pantalla de pedidos del panel de administración web (escritorio, 1440 x 900 px) de PAR CHAOS, un negocio de granizados y bebidas en Popayán, Colombia. El panel lo usan el dueño y sus empleados para recibir los pedidos a domicilio que llegan desde la carta digital y cambiarles el estado. Es una herramienta de trabajo: los pedidos nuevos y la acción de cambiar el estado deben verse de inmediato, con el menor número de clics. Todo el texto va en español.

Elementos, de izquierda a derecha y de arriba hacia abajo:
1. Menú lateral fijo de 240 px de ancho, fondo #080B24 y borde derecho de 1 px blanco al 14 %. Arriba, el logotipo "PAR CHAOS". Debajo, los enlaces en este orden: "Inicio", "Pedidos" (activo: texto magenta #F000FF, fondo magenta al 10 % y una barra de 3 px magenta en el borde izquierdo), "Productos", "Categorías", "Adiciones", "Ofertas", "Usuarios", "Negocio". Al pie, el nombre del usuario "Camilo · Dueño" y un botón con borde, "Cerrar sesión".
2. Barra superior del área de contenido: el título "Pedidos" en Space Grotesk; a su lado, una etiqueta magenta "3 nuevos"; a la derecha, un interruptor "Sonido de pedidos nuevos" activado.
3. Fila de filtros: botones segmentados de esquinas rectas para el estado ("Todos", "Nuevo", "Aprobado", "En preparación", "Entregado", "Rechazado"), un selector de periodo "Últimos 30 días" y un campo de búsqueda "Buscar por cliente o teléfono".
4. Tablero de pedidos en tres columnas, cada una con su encabezado y un contador: "Nuevos (3)", "En preparación (2)" y "Entregados hoy (8)". Cada pedido es una tarjeta con fondo #080B24 y borde de 1 px, con:
   - Arriba, el número "#0142" y la hora "hace 2 min"; a la derecha, la etiqueta de estado. Colores de estado: Nuevo en magenta #F000FF, Aprobado en cian #00E5FF, En preparación en violeta #7B2CFF, Entregado en verde #00F5A0 y Rechazado en rojo #FF6B81.
   - El cliente "Laura Gómez", su teléfono "314 603 2055" y la dirección "Calle 5 # 8-20, Centro".
   - El detalle en texto pequeño: "1x Maracumango 12 oz + Leche condensada", "2x Granizado de mora 16 oz".
   - Al pie, el total "$30.000" en Space Grotesk, un selector de estado y un botón de ícono de WhatsApp para escribirle al cliente.
   Las tarjetas de la columna "Nuevos" llevan el borde izquierdo de 3 px en magenta para destacarlas.

Estilo visual:
- Fondo general #030617; menú lateral, tarjetas y paneles #080B24; bordes de 1 px blanco al 14 %.
- Primario magenta #F000FF; secundario violeta #7B2CFF; acentos cian #00E5FF y amarillo #F5FF00; éxito #00F5A0; error #FF6B81.
- Texto blanco #FFFFFF; texto secundario blanco al 70 %.
- Tipografía: Space Grotesk para títulos, cifras y totales; Inter para el resto.
- Todas las esquinas rectas (radio 0 px) en botones, tarjetas, campos, selectores y etiquetas.
- Sobrio y denso en información, como una herramienta profesional de operación: sin degradados ni sombras difusas, con el neón solo en lo que pide acción (pedidos nuevos y botón principal).
- Precios en pesos colombianos sin decimales ($30.000).
```

### Prompt A2 — Gestión de productos

```text
Diseña la pantalla "Productos" del mismo panel de administración web de PAR CHAOS. Mantén exactamente el mismo estilo visual (colores, tipografía, esquinas rectas de 0 px) y el mismo menú lateral, con "Productos" activo.

Elementos, de arriba hacia abajo en el área de contenido:
1. Barra superior: el título "Productos" con el contador "24 productos · 21 activos"; a la derecha, el botón primario magenta #F000FF con texto #030617, "+ Nuevo producto".
2. Fila de filtros: un campo de búsqueda "Buscar producto", un selector "Todas las categorías", botones segmentados "Todos / Disponibles / Agotados / En oferta" y, a la derecha, el texto "2 seleccionados" con los botones "Marcar agotado" y "Mover de categoría" para acciones masivas.
3. Tabla a todo el ancho, con fondo #080B24, líneas divisorias de 1 px y estas columnas: casilla de selección, foto cuadrada de 48 px, nombre (con la descripción corta debajo, en blanco al 70 %), categoría, precio, precio de oferta, disponible y acciones. Ocho filas de granizados y bebidas. En la columna "Precio de oferta", "Maracumango" muestra $8.500 en magenta; las demás filas, un guion. La columna "Disponible" es un interruptor rectangular de esquinas rectas: encendido en verde #00F5A0 y apagado en gris, como en la fila "Granizado de fresa", que además muestra la etiqueta "Agotado" en rojo #FF6B81. En "Acciones" van los íconos de editar y eliminar.
4. El precio de cada fila se edita en línea: muestra la fila "Granizado de café" con el campo de precio en edición, borde magenta, el valor "$9.000" y un botón pequeño de confirmar.
5. Al pie de la tabla, una paginación sencilla: "1-8 de 24" y flechas.
```

### Prompt A3 — Negocio y horarios

```text
Diseña la pantalla "Negocio" del mismo panel de administración web de PAR CHAOS. Mantén exactamente el mismo estilo visual (colores, tipografía, esquinas rectas de 0 px) y el mismo menú lateral, con "Negocio" activo.

Elementos del área de contenido, en dos columnas (60 % a la izquierda, 40 % a la derecha):
1. Barra superior: el título "Negocio" y, a la derecha, el botón primario magenta #F000FF con texto #030617, "Guardar cambios".
2. Columna izquierda, bloque "Horario de atención" (fondo #080B24, borde de 1 px): una fila por día, de lunes a domingo. Cada fila lleva el nombre del día, un interruptor rectangular "Abierto/Cerrado" y dos campos de hora, "Abre" y "Cierra" (ejemplo: 2:00 p. m. y 11:00 p. m.). El martes aparece cerrado: interruptor apagado y campos deshabilitados en gris. Debajo, el enlace "Copiar el horario del lunes a todos los días".
3. Columna izquierda, bloque "Información": los campos "Descripción corta" (ejemplo "Granizados artesanales a domicilio en Popayán") y "Dirección".
4. Columna derecha, bloque "Redes sociales": los campos "Instagram", "Facebook" y "WhatsApp de pedidos", con el prefijo +57.
5. Columna derecha, bloque "Así lo ve el cliente": una vista previa pequeña de cómo aparece el horario en la carta, por ejemplo "Lun, Mié - Dom · 2:00 p. m. - 11:00 p. m." y "Mar · Cerrado", con la etiqueta "Abierto" en verde #00F5A0.
```

### Prompt A4 — Inicio del panel con estadísticas básicas

```text
Diseña la pantalla "Inicio" del mismo panel de administración web de PAR CHAOS, la primera que se ve al entrar. Mantén exactamente el mismo estilo visual (colores, tipografía, esquinas rectas de 0 px) y el mismo menú lateral, con "Inicio" activo.

Elementos, de arriba hacia abajo en el área de contenido:
1. Encabezado: el rótulo pequeño "NEGOCIO" en magenta, el nombre "PAR CHAOS" en Space Grotesk grande y, a la derecha, "Dueño: Camilo" y un selector de periodo "Últimos 30 días".
2. Fila de cuatro métricas del mismo tamaño, en bloques con fondo #080B24 y borde de 1 px. Cada una lleva el título pequeño, la cifra grande en Space Grotesk, el detalle en blanco al 70 % y una flecha → que lleva a su sección:
   - "Pedidos": 186, con el detalle "3 nuevos"
   - "Ventas": $4.250.000, con el detalle "+12 % vs. mes anterior" en verde #00F5A0
   - "Ticket promedio": $22.800
   - "Productos": 24, con el detalle "21 activos"
3. Gráfico de barras verticales a todo el ancho, "Pedidos por día", con los últimos 30 días; barras en magenta #F000FF, la de hoy en cian #00E5FF y líneas guía de 1 px blanco al 14 %.
4. Dos bloques lado a lado:
   - Izquierda, "Más vendidos": un ranking del 1 al 5 con el nombre del producto, las unidades vendidas y una barra horizontal proporcional en violeta #7B2CFF.
   - Derecha, "Horas con más pedidos": una franja de horas de 2 p. m. a 11 p. m. con bloques de intensidad, de violeta tenue a magenta, y la nota "Tu hora pico es 7:00 - 8:00 p. m.".
5. Un bloque "Sugerencias para tu negocio" con dos o tres recomendaciones cortas en filas, con un ícono a la izquierda, por ejemplo: "El Granizado de fresa lleva 5 días agotado. ¿Lo reactivas?" con un botón pequeño, "Ir a productos".
```

---

## Mensajes de corrección (ejemplos)

Para ajustar una pantalla que ya generó Stitch, conviene un mensaje corto con un solo cambio:

```text
Quita todos los bordes redondeados de la pantalla: botones, tarjetas, campos e imágenes deben tener esquinas rectas de 0 px. No cambies nada más.
```

```text
Reduce el brillo neón: deja el magenta #F000FF solo en el botón principal y en la pestaña activa, y quita las sombras de color del resto de elementos. No cambies nada más.
```

```text
Cambia las fotos de los productos por granizados en vaso transparente con hielo raspado y fruta encima, sobre fondo oscuro liso. No cambies nada más.
```
