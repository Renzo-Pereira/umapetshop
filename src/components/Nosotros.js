import logo from '../assets/img/logoUmaPetShopPng.png';

const Nosotros = () => {
  return (
    <div className="contenedorNosotros">
      <div className="textoNosotros">
        <h1>Bienvenidos a Uma Petshop</h1>
        <p>
          En Uma Petshop, nuestra pasión por los animales va más allá de ser
          simplemente una tienda de mascotas. Somos amantes de los animales
          comprometidos a proporcionar productos y servicios de alta calidad que
          mejoren la vida de tus queridas mascotas.
        </p>
        <p>
          Fundada en 2022, nuestra tienda se ha convertido en un punto de
          referencia para los dueños de mascotas que buscan lo mejor para sus
          compañeros peludos, emplumados o escamosos. Nos enorgullece ofrecer
          una amplia gama de productos cuidadosamente seleccionados, desde
          alimentos premium hasta juguetes entretenidos y accesorios de moda.
        </p>
        <p>
          Lo que nos distingue es nuestro equipo apasionado y dedicado de
          amantes de los animales. Cada miembro de nuestro personal comparte el
          compromiso de brindar un servicio excepcional y asesoramiento experto.
          Estamos aquí para responder tus preguntas, compartir consejos útiles y
          asegurarnos de que encuentres todo lo que necesitas para el bienestar
          y la felicidad de tu mascota.
        </p>
        <p>
          En Uma Petshop, no solo nos importan tus mascotas, sino que también
          valoramos la relación especial que tienes con ellas. Queremos ser
          parte de cada etapa de su vida, desde los primeros días hasta la
          vejez. Creemos en la importancia de crear una comunidad de amantes de
          los animales que compartan experiencias, consejos y momentos
          divertidos.
        </p>
        <p>
          Además de ser una tienda de confianza, también nos esforzamos por ser
          un recurso educativo para todos los dueños de mascotas. En nuestra
          sección de blog, encontrarás artículos informativos, guías de cuidado
          y noticias sobre las últimas tendencias en el mundo de las mascotas.
        </p>
        <p>
          Gracias por elegir Uma Petshop.Estamos emocionados de ser parte de la
          vida de tus mascotas y de proporcionarles todo lo que necesitan para
          ser felices y saludables. ¡Esperamos verte pronto en nuestra tienda!
        </p>
      </div>

      <img className="logo" src={logo} alt="logo" />
    </div>
  );
};

export default Nosotros;
