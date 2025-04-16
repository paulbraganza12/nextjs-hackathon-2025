export const Tabs = () => {
  const tabs = ["Stays", "Experiences"];

  return (
    <nav>
      <div className="flex">
        {tabs.map((tab, index) => (
          <a
            key={tab}
            href="#"
            className={`rounded-4xl px-4 py-2 text-base font-medium transition-all ${
              index === 1 && "hover:text-foreground font-normal text-gray-500 hover:bg-gray-100"
            }`}
          >
            {tab}
          </a>
        ))}
      </div>
    </nav>
  );
};
