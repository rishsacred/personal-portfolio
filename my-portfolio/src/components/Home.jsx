cat > src/components/Home.jsx << 'EOF'
import React from "react";

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-blue-100">
      <h1 className="text-5xl font-bold">Hi, I'm Rish!</h1>
      <p className="mt-4 text-xl">Aspiring Engineer & Developer</p>
    </section>
  );
}
EOF