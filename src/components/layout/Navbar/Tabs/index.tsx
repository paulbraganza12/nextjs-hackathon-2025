export const Tabs = () => {
  const tabs = ['Stays', 'Experiences'];

  return (
    <nav>
      <div className="flex">
        {tabs.map((tab, index) => (
          <a
            key={tab}
            href="#"
            className={`font-medium text-base px-4 py-2 rounded-4xl transition-all ${
              index === 1 && 'text-gray-500 hover:text-foreground hover:bg-gray-100 font-normal'
            }`}>
            {tab}
          </a>
        ))}
      </div>
    </nav>
  );
};
