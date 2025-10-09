
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const HealthTracker = () => {
    const [healthData, setHealthData] = useState([
        { name: 'Week 1', weight: 60, bloodPressure: 120, mood: 3 },
        { name: 'Week 2', weight: 61, bloodPressure: 122, mood: 4 },
        { name: 'Week 3', weight: 60.5, bloodPressure: 121, mood: 3 },
        { name: 'Week 4', weight: 61.5, bloodPressure: 123, mood: 5 },
    ]);

    const [weight, setWeight] = useState('');
    const [bloodPressure, setBloodPressure] = useState('');
    const [mood, setMood] = useState(3);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newData = {
            name: `Week ${healthData.length + 1}`,
            weight: parseFloat(weight),
            bloodPressure: parseFloat(bloodPressure),
            mood: mood,
        };
        setHealthData([...healthData, newData]);
        setWeight('');
        setBloodPressure('');
        setMood(3);
    };

    return (
        <section className="bg-rose-50 py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">Track Your Health</h2>
                    <p className="mt-4 text-lg text-gray-600">Monitor your weight, blood pressure, and mood throughout your pregnancy.</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Log Your Data</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                                <input
                                    type="number"
                                    id="weight"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    className="mt-1 block w-full px-4 py-3 bg-gray-100 border-transparent rounded-lg focus:ring-pink-500 focus:border-pink-500 text-gray-800 placeholder-gray-400 sm:text-sm"
                                    placeholder="e.g., 60.5"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="bloodPressure" className="block text-sm font-medium text-gray-700">Blood Pressure (mmHg)</label>
                                <input
                                    type="number"
                                    id="bloodPressure"
                                    value={bloodPressure}
                                    onChange={(e) => setBloodPressure(e.target.value)}
                                    className="mt-1 block w-full px-4 py-3 bg-gray-100 border-transparent rounded-lg focus:ring-pink-500 focus:border-pink-500 text-gray-800 placeholder-gray-400 sm:text-sm"
                                    placeholder="e.g., 120"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="mood" className="block text-sm font-medium text-gray-700">Mood</label>
                                <input
                                    type="range"
                                    id="mood"
                                    min="1"
                                    max="5"
                                    value={mood}
                                    onChange={(e) => setMood(parseInt(e.target.value))}
                                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg accent-pink-500"
                                />
                                <div className="flex justify-between text-xs text-gray-600 mt-2">
                                    <span>&#128542;</span>
                                    <span>&#128528;</span>
                                    <span>&#128512;</span>
                                </div>
                            </div>
                            <motion.button
                                type="submit"
                                className="w-full bg-pink-500 text-white font-bold py-3 px-6 rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            >
                                Add Data
                            </motion.button>
                        </form>
                    </motion.div>
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Health Trends</h3>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={healthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis dataKey="name" stroke="#9ca3af" />
                                <YAxis stroke="#9ca3af" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(5px)', borderRadius: '12px', borderColor: '#f9a8d4' }}
                                    labelStyle={{ color: '#374151', fontWeight: 'bold' }}
                                />
                                <Legend wrapperStyle={{ color: '#4b5563' }} />
                                <Line type="monotone" dataKey="weight" stroke="#ec4899" strokeWidth={2} activeDot={{ r: 8 }} name="Weight (kg)" />
                                <Line type="monotone" dataKey="bloodPressure" stroke="#8b5cf6" strokeWidth={2} name="Blood Pressure" />
                                <Line type="monotone" dataKey="mood" stroke="#f59e0b" strokeWidth={2} name="Mood" />
                            </LineChart>
                        </ResponsiveContainer>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HealthTracker;
