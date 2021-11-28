import { ReactElement, useEffect, useState } from 'react';
type HeadingsParams = {
  nodeName: string;
  id: string;
  textContent: string;
  offsetTop: any;
}
interface ContentsLayoutProps {
  selectors: any;
  children: ReactElement;
}
export const ContentsLayout = (props: ContentsLayoutProps) => {
  const { selectors } = props;
  const [headings, setHeading] = useState<HeadingsParams[]>([]);
  const [bolded, setBolded] = useState('');

  useEffect(() => {
    if (window.location.hash) {
      const tmp = document.getElementById(window.location.hash.substr(1));
      if (tmp) {
        tmp.scrollIntoView();
        handleBold(window.location.hash.substr(1));
      }
    }
    setHeading(
      Array.from(document.querySelectorAll(selectors)).filter(
        ({ id }) => id.length > 0
      )
    );
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (headings.length === 0) return;
      let y = window.pageYOffset;
      let windowHeight = window.innerHeight;
      let sortedHeadings = headings
        .concat([])
        .sort((a, b) => a.offsetTop - b.offsetTop);
      if (y <= 0) {
        handleBold(sortedHeadings[0].id);
        return;
      }
      if (y + windowHeight >= document.body.scrollHeight) {
        handleBold(sortedHeadings[sortedHeadings.length - 1].id);
        return;
      }
      const middle = y + windowHeight / 2;
      let current = sortedHeadings[0].id;
      for (let i = 0; i < sortedHeadings.length; i++) {
        if (middle >= sortedHeadings[i].offsetTop) {
          current = sortedHeadings[i].id;
        }
      }
      handleBold(current);
    };

    window.addEventListener('scroll', onScroll, {
      capture: true,
      passive: true,
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll, true);
  }, [headings]);

  function handleBold(id: string) {
    if (id.length !== 0) {
      setBolded(id);
    }
  }

  return (
    <>
      <div className="flex-auto w-full min-w-0 lg:overflow-visible lg:static lg:max-h-full">
        <div className="flex justify-between w-full">
          <div className="flex-auto min-w-0">{props.children}</div>

          <div className="hidden flex-none pl-8 mr-8 w-64 xl:block xl:text-sm">
            <div className="flex overflow-y-auto sticky top-4 flex-col justify-between pt-10 pb-6 max-h-screen">
              <div className="mb-8">
                <h5 className="mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs">
                  On this page
                </h5>
                <ul className="overflow-x-hidden font-medium text-gray-500">
                  {headings.map((items, index) => {
                    return (
                      <li
                        key={index}
                        className={`${
                          items.nodeName ===
                          props.selectors.slice(-2).toUpperCase()
                            ? 'ml-4'
                            : null
                        }`}
                      >
                        <a
                          href={'#' + items.id}
                          className={`${
                            items.id === bolded ? 'text-gray-900' : null
                          } block py-2 transition-colors duration-200 transform hover:text-gray-900`}
                        >
                          {items.textContent}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
