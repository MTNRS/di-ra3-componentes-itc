# API y criterios

| Componente | Propiedades por defecto | Métodos | Eventos |
|---|---|---|---|
| Boton | texto=Aceptar, deshabilitado=false | habilitar(valor=true) | click ejecuta accion |
| Mensaje | texto=Preparado | actualizar(texto) | role=status anuncia cambios |
| TarjetaIncidencia | titulo=Sin título, detalle vacío, prioridad=Normal, revisada=false | revisar(), seleccionar(valor=true) | itc-revisada, propagable, detail.revisada=true |

Los componentes exponen elemento para insertarlos en el DOM. El estado es de
sesión y no se guarda al recargar. Las entradas se muestran con textContent.

| Criterio | Evidencia |
|---|---|
| a | JavaScript DOM/CSS para diseño; node:test y jsdom para prueba DOM |
| b-c | Tres clases con constructor, propiedades, métodos y valores por defecto |
| d | click y evento personalizado itc-revisada conectados a acciones |
| e | tests/componentes.test.js prueba los tres componentes |
| f | Esta tabla documenta API y comportamiento |
| g | package.json limita npm pack a librería y estilos |
| h | index.html y aplicacion.js utilizan los tres componentes |
