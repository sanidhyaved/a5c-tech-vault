
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-background px-6"
    >
      <div className="glass rounded-3xl p-16 max-w-2xl text-center relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-a5c-purple/10 blur-3xl z-0"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-a5c-purple/5 blur-3xl z-0"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-a5c-purple/10 mb-6">
            <AlertTriangle size={36} className="text-a5c-purple" />
          </div>
          
          <h1 className="text-6xl font-extrabold mb-4 text-gradient">404</h1>
          
          <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>
          
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <Link to="/" className="btn-primary">
            <Home className="mr-2 h-5 w-5" /> Return to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
