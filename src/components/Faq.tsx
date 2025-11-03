import { useState, type JSX } from "react";
import { useTranslation } from "react-i18next";

const faqData = [
    {
        question: "What are the most important nutrients during pregnancy?",
        answer: "Folate, iron, calcium, vitamin D, DHA (omega-3), and protein are crucial for your baby's development and your health. They support everything from preventing birth defects to building strong bones.",
        source: "ACOG"
    },
    {
        question: "How can I manage morning sickness?",
        answer: "Try eating small, frequent meals. Ginger tea or chews can help. Avoid an empty stomach and choose bland foods like crackers or toast. If it's severe, talk to your doctor.",
        source: "Mayo Clinic"
    },
    {
        question: "Is it safe to eat fish during pregnancy?",
        answer: "Yes, but it's important to choose low-mercury fish like salmon, cod, and tilapia. Aim for 2-3 servings a week. Avoid high-mercury fish like shark, swordfish, and king mackerel.",
        source: "FDA"
    },
    {
        question: "How much weight should I gain during pregnancy?",
        answer: "It depends on your pre-pregnancy weight. Most women with a normal BMI should gain 25-35 pounds. Your doctor will give you a personalized recommendation.",
        source: "CDC"
    }
];

export default function Faq(): JSX.Element {
    const { t } = useTranslation();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-rose-800 mb-6">{t('Frequently Asked Questions')}</h2>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div key={index} className="p-4 border border-rose-100 rounded-lg">
                            <button
                                className="w-full flex justify-between items-center text-left"
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            >
                                <h3 className="font-semibold text-rose-700">{t(faq.question)}</h3>
                                <span>
                                    {openFaq === index ? (
                                        <i className="fas fa-minus text-rose-600"></i>
                                    ) : (
                                        <i className="fas fa-plus text-rose-600"></i>
                                    )}
                                </span>
                            </button>
                            {openFaq === index && (
                                <div className="mt-4">
                                    <p className="text-slate-700">{t(faq.answer)}</p>
                                    <p className="mt-2 text-xs text-slate-500">{t('Source')}: {faq.source}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
