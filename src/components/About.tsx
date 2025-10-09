import happyWoman from '../assets/images/happypregnantwoman.png';
import baby from '../assets/images/baby.png';
import checkUp from '../assets/images/checkup.png';
import { useState } from 'react';

const About = () => {

    const [open, setOpen] = useState(false)


  return (
    <div >
    
    <div className="flex flex-col-reverse lg:flex-row  mt-16 px-4 justify-center items-center lg:gap-44 ">
      
  
      <div className="relative flex mt-5 lg:mt-auto">
        <img
          src={baby}
          alt="smiling baby"
          className="w-32 h-32 rounded-full absolute left-0 -translate-x-18 animate-float shadow-lg"
        />
        <img
          src={happyWoman}
          alt="happy pregnant woman"
          className="w-64 rounded-full shadow-2xl"
        />
        <img
          src={checkUp}
          alt="prenatal checkup"
          className="w-32 h-32 rounded-full absolute bottom-0 right-0 translate-x-10 animate-float shadow-lg"
        />
      </div>

     {/* About */}
      <div className="lg:max-w-lg text-center  space-y-4">
        <h2 className="text-xl font-bold text-yellow-600">About PreggsCare</h2>
        <p className="text-gray-600 leading-relaxed">
          At PreggsCare, we believe every mother deserves compassionate, 
          informed, and holistic support during pregnancy and beyond.  
          Our mission is to empower expectant mothers with expert guidance, 
          personalized care, and access to vital health resources.
        </p>
        <p className="text-gray-600 leading-relaxed">
          From prenatal check-ups and nutrition advice to emotional wellness and 
          postnatal support, we are here to walk with you every step of the way 
          ensuring a safe, healthy, and joyful journey into motherhood.
          <br />
          <em>"For informational purposes only, please seek medical advice from qualified professionals."</em>
        </p>
        <button onClick={() => {setOpen(true)}} className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-full shadow-lg transition">
          Learn More
        </button>
      </div>
    </div>


    {/* expanded about */}
    <div className={`fixed inset-0 w-full overflow-y-auto transition-all duration-600 ease-in-out z-[9999] ${
      open 
        ? 'opacity-100 visible bg-black/50 backdrop-blur-sm' 
        : 'opacity-0 invisible bg-black/0'
    }`}>
      <div className="min-h-full flex items-start justify-center p-4 sm:p-6">
        <div className={`bg-white w-full max-w-2xl rounded-lg shadow-2xl transition-all duration-600 ease-in-out transform ${
          open 
            ? 'scale-100 translate-y-0' 
            : 'scale-95 -translate-y-4'
        }`}>
          <div className="p-6 sm:p-8">
            <div className="text-center">
              <p className='text-yellow-600 text-lg font-semibold mb-4'><em>PreggsCare</em></p>

              <p className='mb-6 text-gray-700 leading-relaxed'>
              PreggsCare is your trusted digital companion for a healthy and informed pregnancy journey. Designed with expecting mothers in mind, our platform empowers you with the tools, resources, and guidance you need to take care of yourself and your growing baby every step of the way.
              <br /><br />
              With PreggsCare, you can:
              </p>

              <ul className='leading-relaxed text-sm list-disc text-left space-y-2 mb-6 pl-4'>
                  <li>
                  Track Your Health: Easily log and monitor your weight, symptoms, and other pregnancy indicators.
                  </li>
                  <li>
                  Learn & Stay Informed: Access expert-backed tips and articles on nutrition, exercise, emotional wellness, and prenatal care.
                  </li>
                  <li>
                  Holistic Wellness: Explore focused guidance on essential areas such as nutrition, physical activity, rest & sleep, emotional well-being, and baby development milestones.
                  </li>
                  <li>
                  Stay Motivated: Engage with daily inspiration and small, achievable goals to keep you feeling positive and supported.
                  </li>
                  <li>
                  Plan Your Care: Receive personalized reminders for appointments, supplements, and healthy habits.
                  </li>
              </ul>
              <p className='text-gray-700 mb-6 leading-relaxed'>
              Whether it's your first pregnancy or your third, PreggsCare helps you feel confident, connected, and cared for right from your phone.
              Your journey matters, and with PreggsCare, you'll never walk it alone.
              </p>

              <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-full shadow-lg transition" onClick={() => setOpen(false)}>
                  Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    </div>
  );
};

export default About;