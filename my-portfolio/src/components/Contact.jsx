cat > src/components/Contact.jsx << 'EOF'
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-purple-100">
      <h2 className="text-4xl font-bold">Contact</h2>
      <p className="mt-4">Email: rish@example.com</p>
      <p className="mt-2">GitHub: github.com/YOUR_USERNAME</p>
      <p className="mt-2">LinkedIn: linkedin.com/in/YOUR_USERNAME</p>
    </section>
  );
}
EOF