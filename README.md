<h1 align="center">
  Kimche Software Engineer Challenge
</h1>
<h2 align="center">
  Sergio Maldonado
</h2>
Buscador de países utilizando React y ApolloClient.
[**Demo Website**](https://kimche-challenge.netlify.app/)


## Scripts

### `yarn start`

Para iniciar la app localmente (http://localhost:3000).

## Comentarios
- Intente incorporar eslint, pero tuve un problema con las versiones que no pude solucionar, existía conflicto con la versión necesaria para correr el comando yarn start y la versión necesaria para la config de airbnb.
- También tuve problemas para incorporar el debounce en el search, algo relacionado con synthetic events en react que no pude solucionar.
- Una de las principales razones para ocupar graphql es para realizar iteraciones rápidas en el Frontend, ajustando las queries para obtener exactamente lo que se quiere mostrar en la UI, en este caso no somos propietarios de la API, por lo que nos vemos obligados a manipular los datos en el Frontend, claramente no es la forma más eficiente que hay, y puede tener problemas de eficiencia y errores.

## Pregunta

"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc.”

- Una opción sería cambiar a una Base de datos como MongoDB, que es basada en documentos, de esta forma podríamos agrupar los datos para así satisfacer los requerimientos, como por ejemplo, datos por curso, luego por año, etc. o datos por niño y luego por año. Al tener los datos agrupados, las queries serán mucho más rápidas si sabemos exactamente lo que buscamos.