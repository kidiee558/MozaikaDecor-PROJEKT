import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Instagram, ArrowRight, Search, X, Menu, Facebook } from 'lucide-react';

const verticalImages = [
  "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/4%20(3).jpg",
  "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/4%20(2).jpg",
  "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/3%20(5).jpg",
  "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/3%20(3).jpg",
  "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/3%20(2).jpg",
  "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/3%20(1).jpg",
  "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/2%20(4).jpg",
  "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/2%20(2).jpg",
  "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/1%20(3).jpg",
  "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/1%20(2).jpg"
];

const horizontalImages = [
  "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/4%20(4).jpg",
  "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/4%20(1).jpg",
  "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/3%20(4).jpg",
  "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/2%20(3).jpg",
  "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/2%20(1).jpg",
  "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/1%20(4).jpg",
  "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/1%20(1).jpg"
];

const logoUrl = "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/LOGO.jpg";
const mainLogoUrl = "https://raw.githubusercontent.com/kidiee558/MozaikaDecor-PROJEKT/main/510740867_1047749944165244_297851553653407122_n-removebg-preview%20(1).png";

const MarqueeText = () => {
  const text = "DEKORACJE BALONOWE ✦ PRACOWNIA FLORYSTYCZNA ✦ KONIN ✦ ŁÓDŹ ✦ POZNAŃ ✦ ";
  const repeatedText = text.repeat(8);
  return (
    <div className="bg-creamy text-primary py-6 overflow-hidden flex whitespace-nowrap border-y border-primary/10">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        className="flex w-max text-2xl md:text-3xl font-serif italic tracking-wide"
      >
        <span className="pr-4">{repeatedText}</span>
        <span className="pr-4">{repeatedText}</span>
      </motion.div>
    </div>
  );
};

const GalleryImage = ({ src, aspect, shape, onClick, className = "" }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8 }}
    className={`break-inside-avoid overflow-hidden group relative cursor-pointer ${shape} ${className}`}
    onClick={() => onClick(src)}
  >
    <img 
      src={src} 
      alt="Realizacja Mozaika Decor" 
      className={`w-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ${aspect}`}
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
       <div className="bg-secondary/90 text-primary px-4 py-2 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
         <Search size={16} />
         <span className="text-xs font-medium uppercase tracking-wider">Powiększ</span>
       </div>
    </div>
  </motion.div>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileHeroIdx, setMobileHeroIdx] = useState(0);
  const heroRef = useRef(null);

  // Cycle mobile hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileHeroIdx((prev) => (prev + 1) % verticalImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const galleryItems = [
    { src: verticalImages[3], aspect: 'aspect-[3/4]', shape: 'shape-arch' },
    { src: horizontalImages[2], aspect: 'aspect-[4/3]', shape: 'rounded-2xl' },
    { src: verticalImages[4], aspect: 'aspect-[4/5]', shape: 'shape-arch-bottom' },
    { src: horizontalImages[3], aspect: 'aspect-[3/2]', shape: 'rounded-[100px]' },
    { src: verticalImages[5], aspect: 'aspect-[3/4]', shape: 'shape-arch' },
    { src: horizontalImages[4], aspect: 'aspect-[4/3]', shape: 'rounded-2xl' },
    { src: verticalImages[6], aspect: 'aspect-[4/5]', shape: 'shape-arch-bottom' },
    { src: horizontalImages[5], aspect: 'aspect-[3/2]', shape: 'rounded-[100px]' },
    { src: verticalImages[7], aspect: 'aspect-[3/4]', shape: 'shape-arch' },
    { src: horizontalImages[6], aspect: 'aspect-[4/3]', shape: 'rounded-2xl' },
    { src: verticalImages[8], aspect: 'aspect-[4/5]', shape: 'shape-arch-bottom' },
    { src: verticalImages[9], aspect: 'aspect-[3/4]', shape: 'shape-arch' },
  ];

  return (
    <div className="min-h-screen bg-secondary selection:bg-accent selection:text-primary relative overflow-clip">
      {/* Static Background Lights */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Mobile: Higher Intensity */}
        <div className="md:hidden">
          <div 
            className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#7c5f9f]/50 blur-[80px] scale-150 opacity-90" 
          />
          <div 
            className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#D4AF37]/50 blur-[100px] scale-150 opacity-80" 
          />
        </div>
        {/* Desktop: Lower Intensity */}
        <div className="hidden md:block">
          <div 
            className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#7c5f9f]/30 blur-[100px] scale-125 opacity-50" 
          />
          <div 
            className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#D4AF37]/30 blur-[120px] scale-150 opacity-40" 
          />
        </div>
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed w-full z-50 bg-secondary/80 backdrop-blur-md text-primary border-b border-primary/10">
          <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
            <a href="#" className="flex items-center">
              <img src={mainLogoUrl} alt="Mozaika Decor" className="h-12 w-auto mix-blend-multiply" referrerPolicy="no-referrer" />
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <Menu size={24} />
            </button>
            <div className="hidden md:flex gap-8 text-xs tracking-[0.15em] uppercase font-medium">
              <a href="#filozofia" className="hover:text-accent transition-colors">O nas</a>
              <a href="#oferta" className="hover:text-accent transition-colors">Oferta</a>
              <a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a>
              <a href="#kontakt" className="hover:text-accent transition-colors">Kontakt</a>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 bg-secondary/95 backdrop-blur-lg text-primary flex flex-col items-center pt-24 pb-12"
            >
              <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6">
                <X size={32} />
              </button>
              <div className="flex flex-col items-center gap-6">
                <a href="#filozofia" onClick={() => setIsMenuOpen(false)} className="text-4xl font-serif hover:text-accent transition-colors">O nas</a>
                <a href="#oferta" onClick={() => setIsMenuOpen(false)} className="text-4xl font-serif hover:text-accent transition-colors">Oferta</a>
                <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-4xl font-serif hover:text-accent transition-colors">Portfolio</a>
                <a href="#kontakt" onClick={() => setIsMenuOpen(false)} className="text-4xl font-serif hover:text-accent transition-colors">Kontakt</a>
              </div>
              
              <div className="w-24 h-px bg-primary/20 my-10" />

              <div className="flex flex-col items-center gap-6">
                <a href="tel:693514363" className="text-xl font-medium tracking-widest hover:text-accent transition-colors">693 514 363</a>
                <div className="flex gap-6">
                  <a href="https://instagram.com/_mozaika_decor" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-primary/20 hover:bg-primary hover:text-secondary transition-all">
                    <Instagram size={24} />
                  </a>
                  <a href="https://facebook.com/mozaikadekor" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-primary/20 hover:bg-primary hover:text-secondary transition-all">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      {/* Hero Section (Editorial Parallax) */}
      <section ref={heroRef} className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-8">
        <motion.div style={{ opacity }} className="z-10 text-center px-4 w-full max-w-[1400px] mx-auto relative flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center w-full"
          >
            <img 
              src={mainLogoUrl} 
              alt="Mozaika Decor Logo" 
              className="w-[70vw] md:w-[40vw] max-w-xl h-auto object-contain mix-blend-darken"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-1 text-xs md:text-sm tracking-[0.3em] uppercase text-primary/60 font-medium"
          >
            Sztuka organizacji imprez i wystroju sal
          </motion.p>
        </motion.div>

        {/* Parallax Floating Images */}
        <motion.div style={{ y: y1 }} className="absolute top-[10%] left-[5%] w-48 md:w-80 hidden sm:block z-0">
           <GalleryImage src={verticalImages[7]} aspect="aspect-[3/4]" shape="shape-arch" onClick={setSelectedImage} className="shadow-2xl shadow-primary/10" />
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="absolute bottom-[5%] right-[5%] w-56 md:w-96 hidden sm:block z-20">
           <GalleryImage src={verticalImages[1]} aspect="aspect-[4/5]" shape="shape-arch-bottom" onClick={setSelectedImage} className="shadow-2xl shadow-primary/10" />
        </motion.div>

        {/* Mobile Hero Image Slider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 w-[85%] sm:hidden z-0 relative h-[400px]"
        >
          {verticalImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: idx === mobileHeroIdx ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <GalleryImage src={src} aspect="aspect-[3/4]" shape="shape-arch" onClick={setSelectedImage} className="shadow-2xl shadow-primary/10 h-full" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="relative z-10 -mt-8">
        <MarqueeText />
      </div>

      {/* Philosophy / About (Asymmetrical Editorial) */}
      <section id="filozofia" className="py-12 px-0 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start relative">
          <div className="lg:col-span-5 px-6 md:px-12 lg:sticky lg:top-32 self-start">
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-4 block">Filozofia</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-6">
              Tworzymy <br/><span className="italic text-accent">atmosferę</span>, nie tylko dekoracje.
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed text-primary/70 mb-8 max-w-md">
              Jesteśmy zespołem pasjonatów, dla których każda uroczystość to wyjątkowe wyzwanie. Nasze realizacje to sztuka komponowania przestrzeni, dobór idealnych kolorów i dbałość o najmniejszy detal.
            </p>
            <a href="#kontakt" className="group inline-flex items-center gap-4 text-sm tracking-[0.2em] uppercase font-medium pb-2 border-b border-primary hover:border-accent hover:text-accent transition-colors">
              Skontaktuj się z nami <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7 space-y-4 mt-8 lg:mt-0">
            <div className="flex flex-col items-center">
              <GalleryImage src={verticalImages[2]} aspect="aspect-[4/5]" shape="shape-arch" onClick={setSelectedImage} className="shadow-lg w-full" />
              <p className="mt-4 text-sm font-light text-primary/60 italic">01. Subtelność i elegancja</p>
            </div>
            
            <div className="flex flex-col items-center">
              <GalleryImage src={horizontalImages[1]} aspect="aspect-[4/3]" shape="rounded-[100px]" onClick={setSelectedImage} className="shadow-lg w-full" />
              <p className="mt-4 text-sm font-light text-primary/60 italic">02. Perfekcja w detalach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services (Huge Interactive List) */}
      <section id="oferta" className="pt-16 bg-primary text-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-12 text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-4 block">Co robimy</span>
            <h2 className="text-4xl md:text-6xl font-serif">Nasza Oferta</h2>
          </div>
          
          <div className="flex flex-col border-t border-secondary/20">
            {[
              { title: "Wesela & Śluby", desc: "Eleganckie girlandy organiczne, zjawiskowe ścianki do zdjęć i kompleksowe dekoracje sal weselnych, które zapierają dech w piersiach." },
              { title: "Urodziny & Jubileusze", desc: "Personalizowane kompozycje, monumentalne cyfry, bukiety balonowe i balony z helem dopasowane do motywu przewodniego." },
              { title: "Eventy Firmowe", desc: "Profesjonalne dekoracje witryn, otwarcia lokali i eventy korporacyjne podkreślające wizerunek i prestiż Twojej marki." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group border-b border-secondary/20 py-8 flex flex-col lg:flex-row items-start lg:items-center justify-between cursor-pointer hover:bg-secondary hover:text-primary transition-colors duration-700 px-6 -mx-6"
              >
                 <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 mb-4 lg:mb-0">
                   <span className="text-2xl md:text-4xl font-serif italic text-accent">0{idx+1}</span>
                   <h3 className="text-3xl md:text-5xl font-serif tracking-tight">{service.title}</h3>
                 </div>
                 <div className="flex items-center gap-8 max-w-md">
                   <p className="font-light opacity-70 group-hover:opacity-100 transition-opacity leading-relaxed text-sm">{service.desc}</p>
                   <div className="w-10 h-10 rounded-full border border-accent/50 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-secondary transition-all duration-500">
                     <ArrowRight size={16} strokeWidth={1} />
                   </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery (Editorial Masonry) */}
      <section id="portfolio" className="py-16 w-full">
        <div className="text-center mb-12 px-6">
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Wybrane Realizacje</h2>
          <p className="text-base md:text-lg font-light text-primary/60 max-w-2xl mx-auto">Każdy projekt to nowa historia. Zobacz, jak zmieniamy puste przestrzenie w miejsca pełne magii.</p>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-1 px-1">
          {galleryItems.map((item, idx) => {
            return (
              <GalleryImage 
                key={idx} 
                src={item.src} 
                aspect={item.aspect} 
                shape={item.shape} 
                onClick={setSelectedImage} 
                className="mb-1" 
              />
            );
          })}
        </div>
      </section>

      {/* Footer (Massive Contact) */}
      <footer id="kontakt" className="bg-creamy text-primary pt-16 pb-8 px-6 md:px-12 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-px bg-primary/10"></div>
        
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs tracking-[0.3em] uppercase font-medium mb-6 block">Zacznijmy projekt</span>
            
            {/* Massive Text */}
            <motion.h2 
              animate={{
                fontFamily: ["'Playfair Display', serif", "'Inter', sans-serif", "'Cinzel', serif"],
                fontStyle: ["normal", "italic", "normal"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-[15vw] md:text-[12vw] leading-[0.8] tracking-tighter mb-2 cursor-default text-[#7c5f9f]"
            >
              ZADZWOŃ
            </motion.h2>
            
            <a href="tel:693514363" className="text-4xl md:text-6xl lg:text-8xl font-light tracking-tight hover:text-accent transition-colors duration-300 mb-2">
              693 514 363
            </a>
            
            <a href="mailto:mozaikadekoratornia@gmail.com" className="text-lg md:text-2xl font-serif italic hover:text-accent transition-colors duration-300 mb-8 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-primary/30 hover:after:bg-accent">
              mozaikadekoratornia@gmail.com
            </a>
            
            <div className="flex gap-6">
              <a href="https://instagram.com/_mozaika_decor" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-secondary transition-all duration-500">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="https://facebook.com/mozaikadekor" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-secondary transition-all duration-500">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end border-t border-primary/10 pt-8">
            <div className="flex flex-col gap-1 items-center md:items-start">
              <span className="text-xs tracking-[0.2em] uppercase font-medium opacity-50">Obszar</span>
              <p className="font-serif text-lg">Konin, Łódź, Poznań</p>
            </div>
            
            <div className="flex justify-center">
              <img src={logoUrl} alt="Mozaika Decor" className="h-16 mix-blend-multiply opacity-90" referrerPolicy="no-referrer" />
            </div>
            
            <div className="flex flex-col gap-1 items-center md:items-end">
            </div>
          </div>
          
          <div className="mt-12 text-center text-[10px] tracking-[0.2em] uppercase font-medium opacity-40">
            &copy; {new Date().getFullYear()} Mozaika Decor. Wszelkie prawa zastrzeżone.
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 p-4 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <button className="absolute top-6 right-6 text-secondary/50 hover:text-secondary transition-colors bg-primary/50 rounded-full p-2">
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
