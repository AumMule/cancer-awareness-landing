import Hero from './components/Hero';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ContactForm />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-bold mb-2">Together We Make a Difference</p>
          <p className="text-sm opacity-90">
            © 2024 Cancer Awareness Initiative. Spreading hope and support.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;