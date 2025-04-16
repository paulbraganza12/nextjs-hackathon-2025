import { menuItems } from "./menu-items";

export const FooterMenu = () => {
  return (
    <div className="grid grid-cols-1 gap-8 py-24 sm:grid-cols-2 md:grid-cols-3">
      {menuItems.map((section) => (
        <div key={section.title}>
          <h3 className="mb-4 text-sm font-semibold text-gray-900">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.title}>
                <a
                  href={item.link}
                  className="text-sm text-gray-600 transition hover:text-black hover:underline"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
