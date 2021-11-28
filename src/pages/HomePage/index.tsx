import { PangolinDataGrid } from 'pages/HomePage/dataGrid';
import { PangolinInfo } from 'pages/HomePage/pangolinInfo';
import { OurPartners } from 'pages/HomePage/partners';
const PangolinMain = () => {
  return (
    <>
      <section className="mt-8">
        <PangolinInfo />
        <PangolinDataGrid />
        <OurPartners />
      </section>
    </>
  );
};
export { PangolinMain };
