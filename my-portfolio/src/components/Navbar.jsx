cat > src/components/Navbar.jsx << 'EOF'
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-around">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}
EOF