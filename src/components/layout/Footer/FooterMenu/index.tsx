import { menuItems } from "./menu-items";

export const FooterMenu = () => {
  return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-24">
          {menuItems.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold mb-4 text-gray-900">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.link}
                      className="text-sm text-gray-600 hover:underline hover:text-black transition"
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
