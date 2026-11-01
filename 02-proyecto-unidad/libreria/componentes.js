/** Componentes DOM propios, sin framework. */
export class Boton {
  constructor({texto='Aceptar',deshabilitado=false,accion=()=>{}}={}) {
    this.elemento=document.createElement('button');
    this.elemento.type='button';
    this.elemento.textContent=texto;
    this.elemento.disabled=deshabilitado;
    this.elemento.addEventListener('click',accion);
  }
  habilitar(valor=true){this.elemento.disabled=!valor;}
}

export class Mensaje {
  constructor({texto='Preparado'}={}) {
    this.elemento=document.createElement('p');
    this.elemento.setAttribute('role','status');
    this.actualizar(texto);
  }
  actualizar(texto){this.elemento.textContent=texto;}
}

export class TarjetaIncidencia {
  constructor({titulo='Sin título',detalle='',prioridad='Normal',revisada=false}={}) {
    this.revisada=revisada;
    this.elemento=document.createElement('article');
    this.elemento.className='itc-tarjeta';
    const etiqueta=document.createElement('small');etiqueta.textContent=prioridad;
    const cabecera=document.createElement('h2');cabecera.textContent=titulo;
    const descripcion=document.createElement('p');descripcion.textContent=detalle;
    this.boton=new Boton({texto:revisada?'Revisada':'Marcar revisada',deshabilitado:revisada,accion:()=>this.revisar()});
    this.elemento.append(etiqueta,cabecera,descripcion,this.boton.elemento);
  }
  revisar(){
    if(this.revisada)return;
    this.revisada=true;this.boton.elemento.textContent='Revisada';this.boton.habilitar(false);
    this.elemento.dispatchEvent(new CustomEvent('itc-revisada',{bubbles:true,detail:{revisada:true}}));
  }
  seleccionar(valor=true){this.elemento.classList.toggle('seleccionada',valor);}
}
