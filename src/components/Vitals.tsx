import { FaHeartbeat, FaBaby, FaNotesMedical } from 'react-icons/fa';
import fetus from '../assets/images/fetus.png';
import happyWoman from '../assets/images/happypregnantwoman.png';

const Vitals = () => {
  return (
    <section className="bg-rose-50 -mt-20 pb-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6">
        {/* Medicines Card */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-800 text-lg">Medicines</h3>
                <FaHeartbeat className="text-rose-400" size={24} />
            </div>
            <p className='text-sm text-gray-500 mb-2'>32 week</p>
            <div className="h-24 bg-white p-2 rounded-lg">
                 <svg className="w-full h-full" viewBox="0 0 200 60">
                    <path d="M 0,40 C 20,10 40,50 60,30 S 100,0 120,20 S 160,60 180,40 L 200,50" fill="none" stroke="#fecdd3" strokeWidth="2"/>
                </svg>
            </div>
        </div>

        {/* Fetus Progress Card */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-800 text-lg">Fetus Progress</h3>
                <FaBaby className="text-rose-400" size={24} />
            </div>
            <p className='text-sm text-gray-500 mb-2'>3rd Trimester</p>
            <div className="flex items-center justify-around bg-white p-2 rounded-lg">
                <img src={fetus} alt="fetus" className="h-16" />
                <div>
                    <p className="text-sm text-gray-500">Size</p>
                    <p className="font-bold text-gray-800">27 sm</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Weight</p>
                    <p className="font-bold text-gray-800">2.6 kg</p>
                </div>
            </div>
        </div>

        {/* Doc's Notes Card */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-800 text-lg">Doc's Notes</h3>
                <FaNotesMedical className="text-rose-400" size={24} />
            </div>
            <p className='text-sm text-gray-500 mb-2'>32 week</p>
            <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                <div>
                    <p className='text-sm text-gray-600'>Compliance with the regime</p>
                    <p className='font-bold text-gray-800'>Dr. Smith & Dr. Brown</p>
                </div>
                <div className="flex -space-x-4">
                    <img src={happyWoman} alt="doc1" className='w-10 h-10 rounded-full border-2 border-white' />
                    <img src={happyWoman} alt="doc2" className='w-10 h-10 rounded-full border-2 border-white' />
                </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Vitals