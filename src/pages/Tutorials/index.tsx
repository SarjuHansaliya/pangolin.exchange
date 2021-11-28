import { TutorialCard } from 'pages/Tutorials/TutorialCard';
import { TUTORIALS_DATA } from 'pages/Tutorials/data';
export const Tutorials = () => {
  return (
    <>
      <div className="mt-10 mb-8 sm:mt-14 sm:mb-10">
        <h2 className="text-2xl font-bold lg:text-4xl">Tutorials</h2>
        <p className="mt-5 mb-8 max-w-2xl leading-8 text-gray-600 lg:mt-8 lg:text-xl text-md">
          Here are some tutorials you might find helpful. Feel free to suggest
          new ones through any of the social channels!
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap">
          {TUTORIALS_DATA.map((items, index) => {
            return (
              <TutorialCard
                key={index}
                href={items.href}
                className={items.class}
                texture={items.texture}
                title={items.title}
                description={items.description}
              ></TutorialCard>
            );
          })}
        </div>
      </div>
    </>
  );
};
