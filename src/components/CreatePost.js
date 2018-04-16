import React, { Component } from 'react';

class CreatePost extends Component {
  state = {
    title: '',
    category: '',
    content: ''
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Blog
              </h1>
              <h2 className="subtitle">
                Crear Publicación
              </h2>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <form>
              <div className="field">
                <label className="label">Titulo</label>
                <div className="control">
                  <input name="title" className="input" type="text" placeholder="Ingresa el titulo del Post" onChange={this.handleInputChange} value={this.state.title} />
                </div>
              </div>

              <div className="field">
                <label className="label">Categoría</label>
                <div className="control">
                  <div className="select">
                    <select name="category" onChange={this.handleInputChange} value={this.state.category}>
                      <option value="">Selecciona una categoría</option>
                      <option value="noticias">Noticias</option>
                      <option value="deportes">Deportes</option>
                      <option value="tecnologia">Tecnología</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Contenido</label>
                <div className="control">
                  <textarea name="content" className="textarea" placeholder="Escribe tu mensaje aquí" onChange={this.handleInputChange} value={this.state.content} />
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button type="submit" className="button is-link" onClick={this.submitForm}>Enviar</button>
                </div>
                <div className="control">
                  <button className="button is-text">Cancelar</button>
                </div>
              </div>

            </form>
          </div>
        </section>

      </div>
    )
  }
}

export default CreatePost;