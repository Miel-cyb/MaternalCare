
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuPlus, LuPencil, LuTrash2, LuBell } from "react-icons/lu";

// Mock user ID - in a real app, this would come from auth state
const MOCK_USER_ID = "user123";

interface Appointment {
  id: string;
  week: number;
  title: string;
  location: string;
  date: string; // YYYY-MM-DD
  userId: string;
}

const AppointmentCard = ({
  appointment,
  onEdit,
  onDelete,
}: {
  appointment: Appointment;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}) => {
  const isDue = new Date(appointment.date) <= new Date();
  const dueDate = new Date(appointment.date);
  const now = new Date();
  const totalDuration = dueDate.getTime() - now.getTime();
  const timeElapsed = Math.max(0, totalDuration);

  // Simple progress calculation (can be improved)
  const progress = Math.max(0, 100 - (timeElapsed / (1000 * 60 * 60 * 24 * 30)) * 100);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className={`bg-white rounded-lg shadow-md p-4 mb-4 border-l-4 ${
        isDue ? "border-red-500" : "border-purple-500"
      }`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="font-bold text-lg text-gray-800">Week {appointment.week}</p>
          <p className="text-md text-gray-600">{appointment.title}</p>
          <p className="text-sm text-gray-500 mt-1">📍 {appointment.location}</p>
          <p className="text-sm text-gray-500 font-mono mt-1">{appointment.date}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(appointment.id)}
            className="text-gray-500 hover:text-blue-600"
          >
            <LuPencil />
          </button>
          <button
            onClick={() => onDelete(appointment.id)}
            className="text-gray-500 hover:text-red-600"
          >
            <LuTrash2 />
          </button>
        </div>
      </div>
        <div className="mt-3">
        {isDue ? (
          <div className="flex items-center gap-2">
            <div className="w-full bg-red-200 rounded-full h-1.5">
                <div className="bg-red-500 h-1.5 rounded-full" style={{width: "100%"}}></div>
            </div>
            <span className="text-red-500 font-bold animate-pulse text-sm">DUE</span>
          </div>
        ) : (
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <motion.div
              className="bg-purple-500 h-1.5 rounded-full"
              style={{ width: `${progress}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const AppointmentForm = ({
  onSave,
  onCancel,
  initialData,
}: {
  onSave: (data: Omit<Appointment, "id" | "userId">) => void;
  onCancel: () => void;
  initialData?: Omit<Appointment, "id" | "userId">;
}) => {
  const [formData, setFormData] = useState(
    initialData || {
      week: 20,
      title: "",
      location: "",
      date: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="bg-white rounded-lg shadow p-6 mb-6 overflow-hidden"
    >
      <form onSubmit={handleSubmit}>
        <h3 className="font-bold text-lg mb-4 text-gray-800">New Appointment</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Anatomy Scan"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g., Ridge Hospital"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
          <input
            name="week"
            type="number"
            value={formData.week}
            onChange={handleChange}
            placeholder="Week"
            className="w-full px-3 py-2 border rounded-md"
            required
            min="1"
            max="42"
          />
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="flex justify-end gap-3 mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700"
          >
            Save
          </button>
        </div>
      </form>
    </motion.div>
  );
};

const Appointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(`appointments_${MOCK_USER_ID}`);
    if (stored) {
      setAppointments(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage whenever appointments change
  useEffect(() => {
    localStorage.setItem(
      `appointments_${MOCK_USER_ID}`,
      JSON.stringify(appointments)
    );
  }, [appointments]);

  const handleSave = (data: Omit<Appointment, "id" | "userId">) => {
    if (editingId) {
      // Update
      setAppointments(
        appointments.map((a) =>
          a.id === editingId ? { ...a, ...data } : a
        )
      );
    } else {
      // Create
      const newAppointment: Appointment = {
        ...data,
        id: crypto.randomUUID(),
        userId: MOCK_USER_ID,
      };
      setAppointments([...appointments, newAppointment]);
    }
    setFormVisible(false);
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    setAppointments(appointments.filter((a) => a.id !== id));
  };

  const getEditingData = () => {
    if (!editingId) return undefined;
    const { id, userId, ...data } = appointments.find((a) => a.id === editingId)!;
    return data;
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
        <LuBell />
        Upcoming Visits
      </h2>

      <AnimatePresence>
        {appointments.map((app) => (
          <AppointmentCard
            key={app.id}
            appointment={app}
            onEdit={(id) => {
              setEditingId(id);
              setFormVisible(true);
            }}
            onDelete={handleDelete}
          />
        ))}
      </AnimatePresence>
      
      <AnimatePresence>
        {isFormVisible && (
          <AppointmentForm
            onSave={handleSave}
            onCancel={() => {
              setFormVisible(false);
              setEditingId(null);
            }}
            initialData={getEditingData()}
          />
        )}
      </AnimatePresence>

      {!isFormVisible && (
        <motion.button
          onClick={() => setFormVisible(true)}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 mt-6 text-white font-semibold bg-pink-500 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          whileHover={{ scale: 1.02 }}
        >
          <LuPlus />
          Schedule New Appointment
        </motion.button>
      )}
    </div>
  );
};

export default Appointments;
