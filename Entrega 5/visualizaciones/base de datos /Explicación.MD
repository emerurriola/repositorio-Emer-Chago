### Explicación de cómo se realizó el proceso de visualización, con los pasos y decisiones tomados.

*En primer lugar, use como guía la ayudantía para hacer un gráfico de barras que me indicara los periodos electorales y las coaliciones que se encontraban presentes en cada una de estas. El gráfico no quedó visualmente lindo, pero se entiende muy bien, ya que cada coalición representa un bloque respecto de un año. ––Con la fotografía se entenderá mejor––.*

*Luego la IA que tiene el Google Colab me ayudó a armar con los mismos datos un gráfico más lindo en donde hay como ejes los periodos electorales y cuántos diputados/as electos/as tuvieron en cada periodo. La información era interesante de estudiar a nivel macro para ver si existían diferencias respecto del sistema binominal y proporcional en las elecciones. También para ver cómo se distribuía este gráfico, el cual sí mostró dos tendencias bastantes diferente luego del cambio de sistema para elegir a los representantes. A pesar de ser un gráfico bastante simple, su información es de vital importancia, ya que es un indicador de un cambio.* 

### Base de datos (CSV) que utilizaron, cómo la procesaron hasta dejarla lista para usar en la visualización que quieren hacer y por qué la seleccionaron.

*Utilice la base de datos que lleva por nombre: “diputados electos final”. Esta base de datos contiene una serie de modificaciones. En primer lugar, se limpiaron las columnas de distritos para que todas quedaran con solamente el número al que pertenecía eliminando el texto que lo acompañaba. La columna de votos estaba como texto y fue convertida a una numérica, para que se pudiera leer de la manera que corresponde en el Google Colab, ya que arrojaba error. Lo mismo ocurrió con la columna de porcentaje obtenido la cual fue transformada de texto a número, ya que anteriormente no me había percatado de ese detalle que con la corrección pude entender a que se referían. Sin esto, la base de datos estaba algo sucia y la lectura de datos no iba a ser la óptima. Finalmente, opte por eliminar la columna de Región, ya que con distrito se puede entender el espacio geográfico.*   

### Ejemplos sobre preguntas que puede responder su visualización de datos final (o el conjunto de visualizaciones que crearon)

*¿A simple vista se puede ver un aumento en las coaliciones políticas a partir del año 2017 con el inicio del sistema proporcional?*

*¿Cuántas coaliciones hay por cada elección?, ¿Existe un aumento significativo con el cambio de sistema electoral?*

*¿Cuáles son las coaliciones más predominantes durante la década de los 90 y 2000?*

*¿Se puede observar una tendencia a partir de las diferentes elecciones parlamentarias?*

*¿Existen coaliciones más pequeñas o emergentes que triunfen en las elecciones parlamentarias antes de 2017?*

*¿Qué resultados se pueden leer observando estos gráficos?*

*¿Existe una diversidad política más amplia en el Congreso a partir del uso del sistema proporcional?*