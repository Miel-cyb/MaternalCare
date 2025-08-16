

const Circles = () => {
  const healthIcons = [
    {
      icon: <i className="fa-solid fa-book-medical text-xl"></i>,
      color: '#EEC9B7', 
      title: 'Prenatal Care',
      info: 'A minimum of eight antenatal visits can reduce perinatal deaths by up to 8 per 1000 births compared to four visits.',
      source: 'https://www.who.int/news-room/fact-sheets/detail/antenatal-care',
    },
    {
      icon: <i className="fa-solid fa-apple-whole"></i>,
      color: '#EED9B6', 
      title: 'Nutrition',
      info: 'Micronutrients like iron, folic acid, iodine, and zinc are critical during pregnancy for fetal development and maternal health.',
      source: 'https://www.cdc.gov/ncbddd/pregnancy_gateway/maternalnutrition.html',
    },
    {
      icon: <i className="fa-solid fa-bed text-xl"></i>,
      color: '#C9D7B8',
      title: 'Rest & Recovery',
      info: 'Sleep is essential during pregnancy; proper rest supports both maternal and fetal health.',
      source: 'https://www.mayoclinic.org/healthy-lifestyle/pregnancy-week-by-week/expert-answers/pregnancy/faq-20058550',
    },
    {
      icon: <i className="fa-solid fa-dumbbell text-xl"></i>,
      color: '#D9C7D9', 
      title: 'Exercise',
      info: 'Moderate physical activity is safe and can reduce risk of excessive weight gain, gestational diabetes, and postpartum depression.',
      source: 'https://www.cdc.gov/physical-activity-basics/guidelines/adults/pregnant-or-postpartum.html',
    },
    {
      icon: <i className="fa-solid fa-person-breastfeeding"></i>,
      color: '#EEC9B7', 
      title: 'Breastfeeding',
      info: 'Exclusive breastfeeding for the first six months provides complete nutrition and immunity for infants.',
      source: 'https://www.who.int/health-topics/breastfeeding',
    },
    {
      icon: <i className="fa-solid fa-people-group"></i>,
      color: '#EED9B6', 
      title: 'Family Support',
      info: 'Community-involved prenatal and postnatal care improves maternal well-being and reduces complications.',
      source: 'https://www.who.int/publications/i/item/9789241511216',
    },
  ];

  return (
    <div className="mt-10 px-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center ">
      {healthIcons.map((item, index) => (
        <div
          key={index}
          className="text-center max-w-[180px] flex flex-col items-center"
        >
          <div
            className="rounded-full p-5 flex items-center justify-center shadow-md"
            style={{ backgroundColor: item.color }}
          >
            {item.icon}
          </div>
          <p className="mt-3 font-semibold text-sm text-gray-800">{item.title}</p>
          <p className="text-[12px] text-black/70">{item.info}</p>
          <a
            href={item.source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline mt-1"
          >
            Learn More
          </a>
        </div>
      ))}
    </div>
  );
};

export default Circles;
