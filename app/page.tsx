import {
  About,
  Weather,
  Location,
  Projects,
  Skills,
  Blog,
  GitHubGraph,
  Tools,
  TechStack,
  Learning,
  LocalTime,
  Now,
} from './components/widget';

export default function Home() {
  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden">
      <main className="lg:h-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 pt-4 lg:pt-6 pb-28">
        <div className="lg:h-full flex flex-col lg:flex-row gap-4 items-stretch">
          <div className="lg:w-[320px] lg:flex-shrink-0 widget-animate stagger-1">
            <About />
          </div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:grid-rows-[0.5fr_0.5fr_0.7fr_0.7fr_0.7fr_0.8fr] lg:grid-rows-[0.4fr_1.15fr_1.15fr_1.15fr_1.15fr_1fr]">
            <div className="col-span-2 order-1 md:hidden"><Tools /></div>
            <div className="col-span-2 min-h-[280px] md:min-h-0 md:row-span-2 order-2 md:order-7 widget-animate stagger-7"><Projects /></div>
            <div className="col-span-2 order-3 md:hidden"><TechStack /></div>
            <div className="col-span-2 order-4 md:hidden"><Learning /></div>
            <div className="col-span-2 min-h-[280px] md:min-h-0 md:row-span-2 order-5 md:order-6 widget-animate stagger-6"><Blog /></div>
            <div className="col-span-1 min-h-[160px] md:min-h-0 md:row-span-2 order-6 md:order-3 widget-animate stagger-4"><Skills /></div>
            <div className="col-span-1 order-7 md:hidden"><GitHubGraph /></div>
            <div className="col-span-1 order-9 md:order-1 widget-animate stagger-2"><LocalTime /></div>
            <div className="col-span-1 order-9 md:order-4 widget-animate stagger-2"><Weather /></div>
            <div className="col-span-2 min-h-[280px] md:min-h-0 md:row-span-2 order-10 md:order-2 widget-animate stagger-3"><Location /></div>
            <div className="hidden md:flex md:col-span-4 md:gap-4 md:order-8">
              <div className="w-[40%]"><Tools /></div>
              <div className="w-[25%]"><GitHubGraph /></div>
              <div className="w-[35%] flex flex-col gap-4">
                <div className="flex-1"><TechStack /></div>
                <div className="flex-1"><Learning /></div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-4 order-12 md:order-9 h-[60px] lg:h-auto widget-animate stagger-9"><Now /></div>
          </div>
        </div>
      </main>
    </div>
  );
}
