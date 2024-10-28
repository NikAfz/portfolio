function PageLink(props) {
  return (
    <nav className="page-link--container">
      <li className="page-link--item">
        <a href="#hero"> {"<NikAfz/>"}</a>
      </li>
      <li className="page-link--item">
        <a href="#about"> {"<AboutMe/>"}</a>
      </li>
      <li className="page-link--item">
        <a href="#skills"> {"<Skills/>"}</a>
      </li>
      <li className="page-link--item">
        <a href="#projects"> {"<Projects/>"}</a>
      </li>
      <li className="page-link--item">
        <a href="#footer"> {"<ContactMe/>"}</a>
      </li>

      <div className="social--line"></div>
    </nav>
  );
}
export default PageLink;
