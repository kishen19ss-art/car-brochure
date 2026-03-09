import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Car360Viewer } from './components/Car360Viewer';
import { CarSpecs } from './components/CarSpecs';
import { Play, Download, Heart, Share2, ChevronDown } from 'lucide-react';

const car360Images = [
  'https://images.unsplash.com/photo-1618480483701-c31ac5590db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBzaWRlJTIwdmlld3xlbnwxfHx8fDE3NzI2MDY0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1632390926806-6f5f6cc71ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBmcm9udCUyMGFuZ2xlfGVufDF8fHx8MTc3MjYyNjg3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1759683864736-b518b7686ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjByZWFyJTIwdmlld3xlbnwxfHx8fDE3NzI2MjY4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
];

const interiorImages = [
  {
    url: 'https://images.unsplash.com/photo-1760689036908-b37db1b784b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBpbnRlcmlvciUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzI1MTk1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Premium Dashboard',
    description: 'Digital cockpit with dual 12.3" displays',
  },
  {
    url: 'https://images.unsplash.com/photo-1741088088676-45ea7f7aafbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBsZWF0aGVyJTIwc2VhdHN8ZW58MXx8fHwxNzcyNjI2ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Luxury Seating',
    description: 'Hand-stitched Nappa leather seats',
  },
  {
    url: 'https://images.unsplash.com/photo-1654616111851-5394318e3279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBlbmdpbmUlMjBkZXRhaWx8ZW58MXx8fHwxNzcyNTQyNzM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Powerhouse Engine',
    description: 'Twin-turbo V8 with 650 horsepower',
  },
];

const features = [
  {
    title: 'Aerodynamic Excellence',
    description: 'Wind-tunnel tested design with active aerodynamics for optimal performance and efficiency.',
  },
  {
    title: 'Advanced Technology',
    description: 'AI-powered driver assistance, adaptive suspension, and cutting-edge connectivity.',
  },
  {
    title: 'Luxury Interior',
    description: 'Premium materials, ambient lighting, and ergonomic design for ultimate comfort.',
  },
  {
    title: 'Performance Focused',
    description: 'Race-inspired engineering with track-ready capabilities and everyday drivability.',
  },
];

function App() {
  const [liked, setLiked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden"
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage:
                'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="lg:w-1/2 space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                🏎️ 2026 Limited Edition
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Genesis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">GT-R</span>
              </h1>
              <p className="text-xl text-gray-300">
                The pinnacle of automotive engineering. Experience unmatched performance,
                luxury, and innovation in perfect harmony.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <Play className="w-5 h-5" />
                  Watch Video
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Brochure
                </motion.button>
              </div>
            </motion.div>

            {/* Car Image with Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="lg:w-1/2"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1618480483701-c31ac5590db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBzaWRlJTIwdmlld3xlbnwxfHx8fDE3NzI2MDY0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Genesis GT-R"
                className="w-full h-auto drop-shadow-2xl"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </motion.div>

      {/* 360 Viewer Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              360° Interactive View
            </h2>
            <p className="text-xl text-gray-600">
              Explore every angle of this masterpiece
            </p>
          </div>
          <div className="h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Car360Viewer images={car360Images} />
          </div>
        </motion.div>
      </section>

      {/* Specifications Section */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Technical Specifications
              </h2>
              <p className="text-xl text-gray-600">
                Precision engineering meets pure performance
              </p>
            </div>
            <CarSpecs />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Exceptional Features
          </h2>
          <p className="text-xl text-gray-600">
            Innovation that sets new standards
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interior Gallery Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Interior & Details
            </h2>
            <p className="text-xl text-gray-600">
              Where luxury meets performance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {interiorImages.map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            About Genesis GT-R
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              The Genesis GT-R represents the culmination of decades of automotive excellence
              and innovation. Every curve, every line, and every detail has been meticulously
              crafted to deliver an unparalleled driving experience.
            </p>
            <AnimatePresence>
              {showFullDescription && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4"
                >
                  <p>
                    Powered by a twin-turbocharged V8 engine producing 650 horsepower, the GT-R
                    accelerates from 0 to 60 mph in just 2.8 seconds. But raw power is only part
                    of the story. Advanced aerodynamics, adaptive suspension, and precision
                    steering make this supercar as composed in corners as it is explosive in
                    straight lines.
                  </p>
                  <p>
                    Inside, premium materials and cutting-edge technology create a cockpit that's
                    both luxurious and focused. Hand-stitched Nappa leather, carbon fiber accents,
                    and dual 12.3-inch displays surround the driver in an environment designed for
                    both comfort and control.
                  </p>
                  <p>
                    Limited to just 500 units worldwide, the Genesis GT-R is more than a car—it's
                    a statement of automotive artistry and a ticket to an exclusive club of
                    performance enthusiasts.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center gap-2"
            >
              {showFullDescription ? 'Read Less' : 'Read More'}
              <motion.div
                animate={{ rotate: showFullDescription ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Experience the Future of Driving
            </h2>
            <p className="text-xl text-gray-300">
              Schedule your exclusive test drive today and feel the power firsthand.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Test Drive
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLiked(!liked)}
                className={`px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-colors ${
                  liked
                    ? 'bg-red-500 text-white'
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                {liked ? 'Saved' : 'Save'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors"
              >
                <Share2 className="w-5 h-5" />
                Share
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © 2026 Genesis Motors. All rights reserved. | Starting MSRP: $189,900
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
