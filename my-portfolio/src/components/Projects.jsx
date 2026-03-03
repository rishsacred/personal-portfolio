cat > src/components/Projects.jsx << 'EOF'
import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-yellow-100">
      <h2 className="text-4xl font-bold">Projects</h2>
      <ul className="mt-4 space-y-2">
        <li>React Portfolio Website</li>
        <li>Arduino Automation Project</li>
        <li>Python Data Analysis Scripts</li>
      </ul>
    </section>
  );
}
EOF