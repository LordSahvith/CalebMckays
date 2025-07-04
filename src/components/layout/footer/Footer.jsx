import "./Footer.css";

function Footer() {
  const copyrightBegin = 2025;
  const currentYear = new Date().getFullYear();

  const copyrightText =
    currentYear === copyrightBegin
      ? copyrightBegin
      : `${copyrightBegin} - ${currentYear}`;

  return (
    <footer>
      <p>Copyright &copy;&nbsp;&nbsp;{copyrightText}</p>
    </footer>
  );
}

export default Footer;
