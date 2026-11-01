import {Boton,Mensaje,TarjetaIncidencia} from './libreria/componentes.js';
const mensaje=new Mensaje();document.querySelector('#mensaje').append(mensaje.elemento);
const datos=[{titulo:'Acceso al portal',detalle:'Empresa ficticia Nexo Formación',prioridad:'Alta'},{titulo:'Revisión del portátil',detalle:'Equipo de demostración ITC-014'},{titulo:'Consulta de inventario',detalle:'Verificar disponibilidad de monitores'}];
const tarjetas=datos.map(d=>new TarjetaIncidencia(d));
let indice=0;
function seleccionar(){tarjetas.forEach((t,i)=>t.seleccionar(i===indice));mensaje.actualizar('Incidencia '+(indice+1)+' seleccionada');}
const acciones=[new Boton({texto:'Anterior',accion:()=>{indice=(indice+tarjetas.length-1)%tarjetas.length;seleccionar();}}),new Boton({texto:'Siguiente',accion:()=>{indice=(indice+1)%tarjetas.length;seleccionar();}}),new Boton({texto:'Revisar seleccionada',accion:()=>tarjetas[indice].revisar()})];
document.querySelector('#acciones').append(...acciones.map(b=>b.elemento));
document.querySelector('#tarjetas').append(...tarjetas.map(t=>t.elemento));
document.querySelector('#tarjetas').addEventListener('itc-revisada',()=>mensaje.actualizar('Incidencia revisada correctamente'));
seleccionar();
