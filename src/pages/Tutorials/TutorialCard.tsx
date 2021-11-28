type TutorialCardProps = {
  href: string;
  className: string;
  texture: string;
  title: string;
  description: string;
}
export const TutorialCard = (props:TutorialCardProps) => {
  const {href, className, texture, title, description} = props
  return (
    <>
      <a
        href={href}
        className={`block relative pt-24 w-64 mr-4 mb-8 ${className}`}
      >
        <div
          className={`absolute top-0 w-full h-24 texture-${texture}`}
        ></div>
        <div className="p-4 h-full text-gray-100 bg-gray-900">
          <div className="font-bold text-md">
            <span slot="title">{title}</span>
          </div>
          <div className="mt-2 text-sm">
            <span slot="title">{description}</span>
          </div>
        </div>
      </a>
    </>
  );
};
