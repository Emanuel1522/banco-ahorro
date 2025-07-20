export function tokenGenerator() {
  let token =
    "token_" +
    Math.random().toString(36).substring(2) +
    "-" +
    Math.random().toString(36).substring(2);
  return token;
}

export function cerrarSesion(redireccion) {
  localStorage.removeItem("token");
  localStorage.removeItem("rol");
  redireccion("/");
}
export const editar = (redireccion) => {
  redireccion("editar");
};