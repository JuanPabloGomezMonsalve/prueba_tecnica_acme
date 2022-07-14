#  Proyecto Base de Karate para pruebas de integraci?n en AcceptanceTest - REST, GraphQL, SOAP
_Karate es una herramienta de c?digo abierto que combina la automatizaci?n de pruebas de API, simulacros , pruebas de rendimiento e incluso la automatizaci?n de la interfaz de usuario en un marco ?nico y unificado . La sintaxis BDD popularizada por Cucumber es un lenguaje neutro y f?cil incluso para los no programadores. Las afirmaciones y los informes HTML est?n integrados y puede ejecutar pruebas en paralelo para aumentar la velocidad._

_Si est? familiarizado con Cucumber / Gherkin, la gran diferencia aqu? es que no necesita escribir c?digo extra de "pegamento" o "definiciones de pasos" de Java._

**RECOMENDACION !!!**: Visitar la documentacion oficial para obtener todas las ventajas de este potencial framework: https://github.com/intuit/karate
## Comenzando

### Instalaci?n ?

**IMPORTANTE**: Este proyecto es una demo, proyecto base, para estructurar las pruebas de integracion (AcceptanceTest) que se realizar?n, no es funcional si se ejecuta sin modificar, por eso a continuacion de contamos que debes modificar y configurar para comenzar en tu contexto de aplicacion con las pruebas:
- Ir al karate-config.js y modificar la `urlBase` por la url o endpoint de tu aplicacion
- Ir a los archivos .feature (src>test>java>co.com.bancolombia) agregar tus escenarios, metodos de prueba, aserciones, y todo lo necesario para tus pruebas en particular
- Ir a los runners de prueba (src>test>java>co.com.bancolombia) y agregar en Runner.path(nombre del feature a probar)



Aqu? se detalla la estructura que debe guiar las pruebas con Karate, es un ejemplo:

```
src/test/java
    |
    +-- karate-config.js
    +-- logback-test.xml
    +-- some-reusable.feature
    +-- some-classpath-function.js
    +-- some-classpath-payload.json
    |
    \-- animals
        |
        +-- AnimalsTest.java
        |
        +-- cats
        |   |
        |   +-- cats-post.feature
        |   +-- cats-get.feature
        |   +-- cat.json
        |   \-- CatsRunner.java
        |
        \-- dogs
            |
            +-- dog-crud.feature
            +-- dog.json
            +-- some-helper-function.js
            \-- DogsRunner.java
```

- TestParallel -> Clase general en java que ejecuta los TESTS de karate en Paralelo y tambien genera el reporte de dichos TESTS en formato json que luego se convierte en reporte cucumber

## Ejecutando las pruebas ??

```gradle
gradlew clean test -i
```