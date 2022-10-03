import React, { Component } from 'react';
import "./style.css";

class FormularioCadastro extends Component {

constructor(props) {
  super(props);
  this.titulo = "";
  this.texto = "";
}

_handleMudancaDeTitulo(evento) {
  evento.stopPropagation();
  this.titulo = evento.target.value;
  console.log(this.titulo);
}

_handleMudancaDeTexto(evento) {
  evento.stopPropagation();
  this.texto = evento.target.value;
}

_criarNota(evento) {
  evento.preventDefault();
  evento.stopPropagation();
  this.props.criarNota(this.titulo, this.texto);
}

  render() {
    return (
      <form className='form-cadastro' onSubmit={this._criarNota.bind(this)}>
        <input className='form-cadastro_input' type="text" placeholder="Título" onChange={this._handleMudancaDeTitulo.bind(this)}/>
        <textarea className='form-cadastro_input' placeholder="Escreva sua nota..." rows={15} onChange={this._handleMudancaDeTexto.bind(this)}/>
        <button className='form-cadastro_submit'>Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
