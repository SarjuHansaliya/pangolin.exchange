import React from 'react';
import { Items } from 'pages/Faq/Items';
import { FAQ_ITEMS_DATA } from 'pages/Faq/data';

export const Faq = () => {
  return (
    <>
      <article className="px-4 mt-12 mb-16 max-w-4xl prose lg:prose-lg">
        {FAQ_ITEMS_DATA.map((items, index) => {
          return (
            <React.Fragment key={index}>
              <h3 className="mb-12">{items.title}</h3>
              <section className="divide-y-2 divide-solid">
                {items.faqItems &&
                  items.faqItems.map((data, index) => {
                    return (
                      <Items
                        key={index}
                        question={data.question}
                        answer={data.answer}
                      ></Items>
                    );
                  })}
              </section>
            </React.Fragment>
          );
        })}
      </article>
    </>
  );
};
