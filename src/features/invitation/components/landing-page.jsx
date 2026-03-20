import { useConfig } from "@/features/invitation/hooks/use-config";
import { motion } from "framer-motion";

const LandingPage = ({ onOpenInvitation, guestName }) => {
  const config = useConfig();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#fdf6f0]" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #d4a0a0 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Floral SVG sudut kiri atas */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-30">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="18" fill="#e8a0a0" />
          <circle cx="60" cy="15" r="12" fill="#f0b8b8" />
          <circle cx="15" cy="60" r="12" fill="#f0b8b8" />
          <circle cx="80" cy="40" r="10" fill="#e8c4c4" />
          <circle cx="40" cy="80" r="10" fill="#e8c4c4" />
          <circle cx="100" cy="20" r="8" fill="#f5d0d0" />
          <circle cx="20" cy="100" r="8" fill="#f5d0d0" />
          <line x1="30" y1="30" x2="80" y2="80" stroke="#c47a7a" strokeWidth="1.5" />
          <line x1="30" y1="30" x2="15" y2="60" stroke="#c47a7a" strokeWidth="1.5" />
          <line x1="30" y1="30" x2="60" y2="15" stroke="#c47a7a" strokeWidth="1.5" />
          <ellipse cx="55" cy="55" rx="15" ry="8" fill="#d4a0a0" transform="rotate(-45 55 55)" />
          <ellipse cx="70" cy="70" rx="12" ry="6" fill="#e8b4b4" transform="rotate(-45 70 70)" />
        </svg>
      </div>

      {/* Floral SVG sudut kanan atas */}
      <div className="absolute top-0 right-0 w-48 h-48 opacity-30" style={{ transform: "scaleX(-1)" }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="18" fill="#e8a0a0" />
          <circle cx="60" cy="15" r="12" fill="#f0b8b8" />
          <circle cx="15" cy="60" r="12" fill="#f0b8b8" />
          <circle cx="80" cy="40" r="10" fill="#e8c4c4" />
          <circle cx="40" cy="80" r="10" fill="#e8c4c4" />
          <circle cx="100" cy="20" r="8" fill="#f5d0d0" />
          <circle cx="20" cy="100" r="8" fill="#f5d0d0" />
          <line x1="30" y1="30" x2="80" y2="80" stroke="#c47a7a" strokeWidth="1.5" />
          <line x1="30" y1="30" x2="15" y2="60" stroke="#c47a7a" strokeWidth="1.5" />
          <line x1="30" y1="30" x2="60" y2="15" stroke="#c47a7a" strokeWidth="1.5" />
          <ellipse cx="55" cy="55" rx="15" ry="8" fill="#d4a0a0" transform="rotate(-45 55 55)" />
          <ellipse cx="70" cy="70" rx="12" ry="6" fill="#e8b4b4" transform="rotate(-45 70 70)" />
        </svg>
      </div>

      {/* Floral SVG sudut kiri bawah */}
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-30" style={{ transform: "scaleY(-1)" }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="18" fill="#e8a0a0" />
          <circle cx="60" cy="15" r="12" fill="#f0b8b8" />
          <circle cx="15" cy="60" r="12" fill="#f0b8b8" />
          <circle cx="80" cy="40" r="10" fill="#e8c4c4" />
          <circle cx="40" cy="80" r="10" fill="#e8c4c4" />
          <line x1="30" y1="30" x2="80" y2="80" stroke="#c47a7a" strokeWidth="1.5" />
          <ellipse cx="55" cy="55" rx="15" ry="8" fill="#d4a0a0" transform="rotate(-45 55 55)" />
        </svg>
      </div>

      {/* Floral SVG sudut kanan bawah */}
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-30" style={{ transform: "scale(-1)" }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="18" fill="#e8a0a0" />
          <circle cx="60" cy="15" r="12" fill="#f0b8b8" />
          <circle cx="15" cy="60" r="12" fill="#f0b8b8" />
          <circle cx="80" cy="40" r="10" fill="#e8c4c4" />
          <circle cx="40" cy="80" r="10" fill="#e8c4c4" />
          <line x1="30" y1="30" x2="80" y2="80" stroke="#c47a7a" strokeWidth="1.5" />
          <ellipse cx="55" cy="55" rx="15" ry="8" fill="#d4a0a0" transform="rotate(-45 55 55)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Card Container */}
          <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl border border-rose-100 shadow-xl">

            {/* Logo / Monogram */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-4"
            >
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-40 h-40 object-contain"
              />
            </motion.div>

            {/* Ornamen garis + judul */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-4"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-10 bg-rose-300" />
                <span className="text-rose-300 text-xs">✦</span>
                <div className="h-px w-10 bg-rose-300" />
              </div>
              <p className="text-base text-gray-400 italic">Walimatul 'Urs</p>
              <div className="flex items-center justify-center gap-3 mt-3">
                <div className="h-px w-10 bg-rose-300" />
                <span className="text-rose-300 text-xs">✦</span>
                <div className="h-px w-10 bg-rose-300" />
              </div>
            </motion.div>

            {/* Couple Names */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center space-y-4 mb-6"
            >
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
                  {config.groomNickname}
                  <span className="text-rose-400 mx-2 sm:mx-3">&</span>
                  {config.brideNickname}
                </h1>
                <div className="h-px w-16 sm:w-24 mx-auto bg-rose-200" />
              </div>
            </motion.div>

            {/* Kepada Tamu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center mb-6"
            >
              <p className="text-sm text-gray-400">Kepada Bapak/Ibu/Saudara/i</p>
              <p className="text-lg font-semibold text-gray-800 mt-1">
                {guestName || "Tamu Undangan"}
              </p>
              <p className="text-sm text-gray-400 mt-1">di Tempat</p>
            </motion.div>

            {/* Open Invitation Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenInvitation}
                className="group relative w-full bg-rose-500 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-xl font-medium shadow-lg hover:bg-rose-600 transition-all duration-200"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Buka Undangan</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.button>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage;