import { FOOTER_DATA } from './data';
export const Footer = () => {
  return (
    <>
      <footer className="mt-4 mb-6 text-center text-gray-500">
        <div className="grid grid-cols-1 gap-y-5 sm:gap-y-0">
          <div className="order-1 col-span-6 sm:order-2 sm:col-span-1">
            <div>
              <strong>Find us on</strong>
            </div>
            <div className="flex items-center justify-center">
              {FOOTER_DATA.map(function (items, index) {
                return (
                  <a
                    href={items.href}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                    className="block mr-1"
                  >
                    <img src={items.src} className="icon" alt={items.alt} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
