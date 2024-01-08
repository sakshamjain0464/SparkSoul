export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 flex py-2 px-10 flex-col sm:flex-row items-center h-fit sm:h[5vh]">
      <div className="w-full text-center justify-center text-gray-300 tracking-widest sm:w-1/2 sm:justify-start sm:text-left mb-2">
        <p>Created By Saksham Jain</p>
      </div>
      <div className="justify-center w-full flex sm:w-1/2 sm:justify-end">
        <a
          href="https://github.com/sakshamjain0464/"
          target="_blank"
          rel="noreferrer">
          <i className="fa-brands fa-github text-xl text-gray-300 cursor-pointer mx-3 hover:text-white"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/saksham-jain-15bab2205/"
          target="_blank"
          rel="noreferrer">
          <i className="fa-brands fa-linkedin text-xl text-gray-300 cursor-pointer mx-3 hover:text-white"></i>
        </a>
        <a
          href="https://www.instagram.com/__saksham_jain/"
          target="_blank"
          rel="noreferrer">
          <i className="fa-brands fa-instagram text-xl text-gray-300 cursor-pointer mx-3 hover:text-white"></i>
        </a>
        <a
          href="https://twitter.com/SakshamJain0464"
          target="_blank"
          rel="noreferrer">
          <i className="fa-brands fa-twitter text-xl text-gray-300 cursor-pointer mx-3 hover:text-white"></i>
        </a>
      </div>
    </footer>
  );
}
