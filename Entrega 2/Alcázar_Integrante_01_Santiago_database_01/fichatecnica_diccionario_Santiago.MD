3. Ficha técnica y diccionario de datos [Individual | formato Markdown]

Fuente de los datos: 

En Wikipedia, el anexo “Resultados de las elecciones parlamentarias de Chile” de los años 1989, 1993, 1997, 2001, 2005, 2009, 2013, 2017, 2021 y 2025 (por distrito).

Metodología de la construcción de la base: En primer lugar, nos pusimos el objetivo de analizar el sistema proporcional en comparación con el pasado sistema binominal. Escogimos como periodo de tiempo de 1989 (primera elección tras la vuelta a la democracia) hasta 2025 (última elección realizada), definimos como caso a todos los candidatos a diputados, mostrando en cada fila uno de ellos.

Como variables empleamos: Año de elección, distrito, parlamentario/a, coalición, partido político, votos obtenidos y porcentaje obtenido. Después, recolectamos los datos por elección en Wikipedia y llenamos la base de datos.

Con ello listo, determinamos como los focos de las tablas mostrar el cambio en los resultados obtenidos por elección, qué parlamentarios se han repetido más, cómo ha afectado el cambio en los distritos, mostrar las distintas coaliciones que existieron durante el periodo de tiempo y la diversidad de partidos políticos que han sido parte de las elecciones parlamentarias.

Alcance de los datos: El alcance de nuestros datos cubre los resultados de la cámara de diputados de 1989 a 2025 en Chile, incluyendo a ganadores y postulantes que perdieron. Tomando como factores determinantes de la información el número de votos obtenidos y el porcentaje de cada candidato dentro del total de votos en su distrito.

Característica de los datos:

Debido a ser una elección democrática, los datos son cuantitativos, pero al ser las preferencias subjetivas de la gente las que inciden en el voto, la base de datos puede ser mixta, teniendo una parte cualitativa. Están organizados en filas (que consideran a los diputados y candidatos) y columnas que incluyen cada variable. El origen de los datos viene del reporte por elección que hace el Servicio Electoral del país. Mezclan datos nominales y numéricos, y son longitudinales por la repetición de candidatos a lo largo de las elecciones.


Diccionario de datos: tabla con el nombre de cada variable, su descripción, tipo de dato, valores posibles y observaciones editoriales (si aplica).




|                  	| Distrito                                                          	| parlamentario/a          	| coalición                                             	| partido político                                               	| votos obtenidos                             	| % obtenido                                      	| año elección                                       	|
|------------------	|-------------------------------------------------------------------	|--------------------------	|-------------------------------------------------------	|----------------------------------------------------------------	|---------------------------------------------	|-------------------------------------------------	|----------------------------------------------------	|
| Descripción      	| Unidad del territorio donde el candidato participó de la elección 	| Nombre del parlamentario 	| Coalición o grupo al que pertenece el candidato       	| Partido específico del candidato                               	| Total de votos recibidos por cada candidato 	| Porcentaje de votos sobre el total del distrito 	| Año en que se realizó la respectiva elección       	|
| Tipo de dato     	| Cualitativo                                                       	| Cualitativo              	| Cualitativo                                           	| Cualitativo                                                    	| Cuantitativo                                	| Cuantitativo                                    	| Cuantitativo                                       	|
| Valores posibles 	| 1-60                                                              	| x                        	| Desde coaliciones que ya no existen hasta las últimas 	| Desde partidos que ya no existen hasta los últimos conformados 	| 940 - 98.400 aprox                          	| 1-100% hipotéticamente                          	| 1989,1993,1997,2001,2005,2009,2013,2017,2021,2025. 	|