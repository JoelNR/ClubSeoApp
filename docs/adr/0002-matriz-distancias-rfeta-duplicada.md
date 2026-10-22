# Duplicamos la matriz de distancias de la RFETA, con fuente y fecha

La página Aprende incluye una tabla de distancias y dianas por categoría y división. Esos datos ya viven en el «Cuadro de dianas, piquetas y distancias» de la RFETA, que se actualiza cada temporada. Decidimos copiarlos en la página en lugar de enlazar solo al PDF, porque un socio que prepara su primera tirada necesita saber «¿a qué distancia tiro yo?» sin abrir un PDF de cuatro páginas.

El riesgo es que la copia envejezca en silencio. Lo mitigamos con tres cosas: la tabla muestra la fuente y la fecha de revisión, el bloque enlaza siempre al cuadro oficial, y la matriz vive en un único array del componente para que actualizarla sea un cambio de datos y no una edición de maquetación. Si la RFETA cambia distancias a mitad de temporada, la página puede quedar desactualizada hasta la siguiente revisión: es un coste aceptado, no un olvido.
