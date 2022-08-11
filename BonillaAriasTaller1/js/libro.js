var libro;
var mensaje = prompt("Bienvenido a la Biblioteca Usuario. Ingrese el Carnet: ");
var mensaje1 = prompt(
  "Ingrese que tipo de libro se va prestar: libro, tesis, obras, etc"
);
var carnet;
const mostrarFecha = (days) => {
  fecha = new Date();
  document.write("Fecha actual: " + devolverFechaFormateada(fecha));

  fecha.setDate(fecha.getDate() + days);
  document.write(
    " - Fecha " +
      (days > 0 ? "+" + days : days) +
      " dias : " +
      devolverFechaFormateada(fecha)
  );
};

const devolverFechaFormateada = (fecha) => {
  const day = fecha.getDate();
  // el mes es devuelto entre 0 y 11
  const month = fecha.getMonth() + 1;
  const year = fecha.getFullYear();
  return day + "/" + month + "/" + year;
};
mostrarFecha(+3);
document.write("<br>");
mostrarFecha(-10);
document.write("<br>");
mostrarFecha(+30);

carnet = mensaje;
libro = mensaje1;

document.write("<table>\n\t");
document.write("<caption>\n\t\t<caption> Libros </caption>\n\t\t");
document.write("<thead>\n\t");
document.write(
  "<tr>\n\t\t<th>Tipo de Usuario</th>\n\t\t<th>Tipos de Libro</th>\n\t</tr>\n"
);
document.write("</thead>\n\t");
document.write("<tbody>\n\t");
document.write("<tr>\n\t\t<td>" + carnet + "</td>\n\t\t");
document.write("<td>" + libro + "</td>\n\t</tr>\n\t");
document.write("<thead>\n\t");
document.write("<tr>\n\t\t<th>Fecha de Devolución</th>\n\t</tr>\n");
document.write("</thead>\n\t");
document.write("<tbody>\n\t");
document.write(
  "<tr>\n\t\t<td>" +
    f.getDate() +
    " de " +
    meses[f.getMonth()] +
    " de " +
    f.getFullYear() +
    "</td>\n\t\t"
);
document.write("<tbody>\n\t");
document.write("</table>\n\t");
