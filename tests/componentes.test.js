import {test} from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {Boton,Mensaje,TarjetaIncidencia} from '../02-proyecto-unidad/libreria/componentes.js';
const dom=new JSDOM();globalThis.document=dom.window.document;globalThis.CustomEvent=dom.window.CustomEvent;
test('botón tiene valores por defecto y respeta disabled',()=>{let n=0;const b=new Boton({accion:()=>n++});assert.equal(b.elemento.textContent,'Aceptar');b.elemento.click();b.habilitar(false);b.elemento.click();assert.equal(n,1);});
test('mensaje muestra texto como contenido seguro',()=>{const m=new Mensaje();m.actualizar('<script>');assert.equal(m.elemento.children.length,0);assert.equal(m.elemento.textContent,'<script>');});
test('tarjeta emite una sola revisión y permite seleccionar',()=>{const t=new TarjetaIncidencia();let n=0;t.elemento.addEventListener('itc-revisada',()=>n++);t.boton.elemento.click();t.revisar();assert.equal(n,1);assert.equal(t.boton.elemento.disabled,true);t.seleccionar();assert.equal(t.elemento.classList.contains('seleccionada'),true);});
