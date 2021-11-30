import { DATA_TAB } from 'pages/CommonTab/data';
export const Tab = () => {
  return (
    <>
        {DATA_TAB.map((items, index) => {
          return (
            <a
              key={index}
              className={items.class}
              rel="noreferrer"
              href={items.href}
              target="_blank"
            >
              {items.name}
            </a>
          );
        })}
    </>
  );
};
