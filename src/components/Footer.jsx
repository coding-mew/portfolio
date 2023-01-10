import React from 'react'

function Footer() {
  return (
    <footer>

    <div className="footer_social">   
      <ul>
        <li><a href="https://github.com/coding-mew" target="_blank"><i className="fa-brands fa-github"></i></a></li>
        <li><i className="fa-brands fa-twitter"></i></li>
        <li><i className="fa-brands fa-instagram"></i></li>
        <li><i className="fa-brands fa-facebook"></i></li>
        <li><i className="fa-solid fa-caret-up"></i></li>
      </ul>      
    </div>
    <div className="footer_img" alt="logo">
    </div>
      <a href="https://github.com/coding-mew" className="logo" target="_blank"><div className="footer_logo"></div> </a>
</footer>
  )
}

export default Footer