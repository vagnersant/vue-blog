export const userService = {
  data: {
    usuario: ''
  },
  setUsuario(usuario) {
    this.data.usuario = usuario;
  },
  getUsuario() {
    return this.data.usuario;
  },
  conectar(usuario) {
    // Conecta com o servidor
    this.data.usuario = usuario;
  },
  desconectar() {
    // Desconecta do servidor
    console.log('Usuário ', this.data.usuario, ' desconectado.');
    this.data.usuario = '';
  }
}