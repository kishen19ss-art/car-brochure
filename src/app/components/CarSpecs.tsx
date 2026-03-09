import { motion } from 'motion/react';
import { 
  Gauge, 
  Zap, 
  Clock, 
  Fuel, 
  Cog, 
  Palette,
  Users,
  Shield
} from 'lucide-react';

interface Spec {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const specs: Spec[] = [
  {
    icon: <Zap className="w-6 h-6" />,
    label: 'Power',
    value: '650 HP',
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    label: 'Top Speed',
    value: '211 mph',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    label: '0-60 mph',
    value: '2.8 sec',
  },
  {
    icon: <Fuel className="w-6 h-6" />,
    label: 'Engine',
    value: 'V8 Twin-Turbo',
  },
  {
    icon: <Cog className="w-6 h-6" />,
    label: 'Transmission',
    value: '8-Speed Auto',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    label: 'Colors',
    value: '12 Options',
  },
  {
    icon: <Users className="w-6 h-6" />,
    label: 'Seating',
    value: '2+2 Seats',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    label: 'Warranty',
    value: '5 Years',
  },
];

export function CarSpecs() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {specs.map((spec, index) => (
        <motion.div
          key={spec.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white">
              {spec.icon}
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">{spec.label}</div>
              <div className="font-semibold text-gray-900">{spec.value}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
