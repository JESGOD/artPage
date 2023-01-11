import "./footer.css";

export function Footer() {
  return (
    <>
      <div class="footer-basic">
        <footer>
          <div class="social">
            <a href="#footer">
            <i class="fa-brands fa-github"></i>
            </a>
            <a href="#footer">
            <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#footer">
            <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#footer">
            <i class="fa-brands fa-twitter"></i>
            </a>
          </div>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#">Home</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Services</a>
            </li>
            <li class="list-inline-item">
              <a href="#">About</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <p class="copyright">JESGOD © 2023</p>
        </footer>
      </div>
    </>
  );
}
