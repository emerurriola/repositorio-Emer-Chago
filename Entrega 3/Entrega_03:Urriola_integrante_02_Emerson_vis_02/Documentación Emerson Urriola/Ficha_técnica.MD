# Ficha técnica Emerson Urriola
## Fuente de los datos
*Los datos de cada una de las dimensiones de la tabla (distrito; parlamentario/a; coalición; partido político; votos obtenidos; % obtenido; año elección) fueron extraídos íntegramente desde Wikipedia quienes tienen cada una de las elecciones registrada en su página de una forma muy ordenada y coherente. Es mucho más fácil entender la información de situada en esta página que la que se encuentra disponible en el Servel la cual no se entiende fácilmente.* 

Estos son los links de donde se obtuvo la información. 
https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_1989
https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_1993
https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_1997
https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_2001
https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_2005
https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_2009
https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_2013
https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_2017
https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_2021 
https://es.wikipedia.org/wiki/Elecciones_parlamentarias_de_Chile_de_2025*

## Metodología de la construcción de la base:
Se utilizaron solamente de fuentes abiertas/públicas de fácil acceso.  
Por otro lado, los datos extraidos fueron arreglados mientras se armaba la base de datos, ya que no todos estaban realizados de la misma manera, lo que terminaba por dificultar su creación. 
## Alcance de los datos:
*Los datos de este CSV solamente engloban a los candidatos que resultaron ganadores de las elecciones por lo tanto ningún porcentaje de votos por distrito alcanzará el 100% de los votos porque solo los considera a estos. Por otro lado, nos entrega una mayor precisión sobre quienes son los diputados que llegan al congreso en su respectivo periodo*

## Característica de los datos:
*Los datos son mitad cuantitativos y mitad cualitativos. Los cuantitativos nos indica el porcentaje de votos obtenidos de quien resultó ganador/a también nos muestra los votos obtenidos, el distrito en qué ganó y que año.  Por otro lado, los cualitativos nos muestran el nombre de quien resultó victorioso/a, como su coalición y partido político, todos los datos fueron arreglados para ser leídos como corresponde (texto, números, porcentajes).* 

## Diccionario de datos de la tabla 

|              | Distrito                                                 | Parlamentario/a                                                               | Coalición                                                                                                                                        | Partido Político                   | Votos Obtenidos                                            | % Obtenido                                                                      | Año Elección                                 |
|--------------|----------------------------------------------------------|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|------------------------------------------------------------|---------------------------------------------------------------------------------|----------------------------------------------|
| Descripción  | Nos Indica Donde Fue Seleccionado El Parlamentario/a<br> | Este Dato Es Crucial, Porque Es Quien Resulta Elegido Y Con Cuales Resultados | La Coalición Es Una Agrupación De Partidos Políticos Que Los Agrupa Bajo Un Nombre Seleccionado Para Una Campaña Electoral, Trabajando Entre Sí. | Unidad Individual De Una Coalición | Nos Indica Que Cantidad De Votos Saco El Candidato Elegido | Nos Indica En Porcentaje Cuanto Representa En El Distrito Esa Cantidad De Votos | Tiene El Fin De Separar Una Elección De Otra |
| Tipo De Dato | Cuantitativo                                             | Cualitativo                                                                   | Cualitativo                                                                                                                                      | Cualitativo                        | Cuantitativo                                               | Cuantitativo                                                                    | Cuantitativo                                 |


## Observaciones sobre la base de datos

1. La base de datos se armo para ver quienes fueron los seleccionados para llegar a la Cámara baja. Incluyendo partido político, pacto, distrito, cantidad de votos obtenidos y que porcentaje representaba en sus distritos
2. Por otra parte, antes estaba incluida la variable de región dentro de la base de datos la cual fue suprimida finalmente, ya que el número de distrito es un indicador, este mismo dato que iba a ser cualitativa, se cambia por el distrito que es más cuantificable 
3. Finalmente, los datos se pueden leer como corresponde y no solamente como texto. 