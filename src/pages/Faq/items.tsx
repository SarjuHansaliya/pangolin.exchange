import { useState } from 'react';

type FaqItemProps = {
  question: string;
  answer: any
}

export const Items = (props: FaqItemProps) => {
  const [hidden, sethidden] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          sethidden(!hidden);
        }}
        className="flex justify-between items-center w-full"
      >
        <span className="flex-shrink pr-6 my-6 text-xl font-semibold text-left text-gray-900">
          <span slot="question">{props.question}</span>
        </span>
        <svg
          className={`flex-shrink-0 h-6 ${
            hidden ? '' : 'transform rotate-180'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <p style={{ marginTop: '0px' }} className={`${hidden ? 'hidden' : ''}`}>
        <span slot="answer">{props.answer}</span>
      </p>
    </div>
  );
};
