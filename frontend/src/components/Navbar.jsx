import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b-2 border-cyan-300 bg-[radial-gradient(ellipse_at_top,#0f172a_0%,#020617_70%)]">
      <h1
        className="text-4xl font-extrabold tracking-wide 
  bg-linear-to-r from-cyan-500 to-sky-100 
  bg-clip-text text-transparent "
      >
        Aryogya Nexa
      </h1>

      {/* {userData ? <button
        className="  px-6 py-2 rounded-full
    bg-linear-to-r from-cyan-500 to-sky-100
    text-black font-semibold

    transition-all duration-500

    hover:bg-linear-to-l
    hover:from-cyan-500
    hover:to-sky-100

    shadow-[0_0_20px_rgba(34,211,238,0.6)] cursor-pointer"
        onClick={() => navigate("/Signup")}
      >
        Logout
      </button>:<button
        className="  px-6 py-2 rounded-full
    bg-linear-to-r from-cyan-500 to-sky-100
    text-black font-semibold

    transition-all duration-500

    hover:bg-linear-to-l
    hover:from-cyan-500
    hover:to-sky-100

    shadow-[0_0_20px_rgba(34,211,238,0.6)] cursor-pointer"
        onClick={() => navigate("/Signup")}
      >
        Get Started
      </button>
} */}
      <button
        className="  px-6 py-2 rounded-full
    bg-linear-to-r from-cyan-500 to-sky-100
    text-black font-semibold

    transition-all duration-500

    hover:bg-linear-to-l
    hover:from-cyan-500
    hover:to-sky-100

    shadow-[0_0_20px_rgba(34,211,238,0.6)] cursor-pointer"
        onClick={() => navigate("/Signup")}
      >
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
