cat > src/components/About.jsx << 'EOF'
import React from "react";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-green-100">
      <h2 className="text-4xl font-bold">About Me</h2>
      <p className="mt-4 max-w-xl text-center">
        I'm a high school student passionate about coding, engineering, and creating projects.
      </p>
    </section>
  );
}
EOF