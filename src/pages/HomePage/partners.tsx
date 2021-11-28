import { OUR_PARTNERS_DATA } from 'pages/HomePage/data';

export const OurPartners = () => {
  return (
    <>
      <div className="flex flex-col my-10">
        <hr />
        <div className="mt-10 mb-4 text-xl text-center">
          <strong>Our Partners</strong>
        </div>
        <div
          className="grid gap-y-4 gap-x-8 mx-8 sm:gap-x-16 md:gap-x-8 lg:gap-x-16 lg:mx-16"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))',
          }}
        >
          {OUR_PARTNERS_DATA.map(function (items, index) {
            return (
              <a
                key={index}
                href={items.href}
                rel="noreferrer"
                target="_blank"
                className="flex justify-center items-center"
              >
                <img
                  className="object-scale-down"
                  alt={items.alt}
                  src={items.src}
                />
              </a>
            );
          })}
        </div>
        <hr className="mt-10" />
      </div>
    </>
  );
};
