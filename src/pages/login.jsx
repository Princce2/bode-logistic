import Bodelogo from "../images/Bodelogo.jpg";

const Login = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-hidden px-4 sm:px-6 md:px-12">
      {/* Background Glow Particles */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ top: "20%", left: "10%" }}
        ></div>
        <div
          className="absolute w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ bottom: "20%", right: "10%" }}
        ></div>
      </div>

      {/* Main Flex Container */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl min-h-[500px] md:h-[500px]">
        {/* Logo Side */}
        <div className="w-full md:w-1/2 h-64 md:h-full flex items-center justify-center">
          <img
            src={Bodelogo}
            alt="Bodelogo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Side */}
        <div className="w-full md:w-1/2 h-full bg-white/10 backdrop-blur-md px-6 sm:px-8 md:px-10 py-8 flex flex-col justify-center rounded-none md:rounded-r-xl shadow-2xl border-t md:border md:border-blue-300/20">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-10 md:mb-12 animate-pulse text-center md:text-left">
            ENTER THE BODE REALM
          </h1>
          <form className="space-y-8 md:space-y-9">
            <div className="space-y-2 flex flex-col">
              <label className="text-sm font-medium text-gray-300">
                EMAIL OR USERNAME
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label className="text-sm font-medium text-gray-300">
                PASSWORD
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-500 border-gray-600 rounded"
                />
                <label className="text-sm text-gray-300">Remember Me</label>
              </div>
              <a
                href="#"
                className="text-sm text-blue-400 hover:text-blue-300 transition"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
