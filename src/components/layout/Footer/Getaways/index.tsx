import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { tavList } from './tab-list';
import { TabList } from './../Footer.d';

export const Getaways = () => {
  return (
    <div className="pt-14 ">
      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-6">Inspiration for future getaways</h2>
        <Tabs
          defaultValue={tavList[0]?.category}
          className="w-full">
            <div
            
            className='!bg-transparent
          border-b-1 border-b-gray-300 w-full'>

          <TabsList className="flex flex-wrap gap-2  no-scrollbar  pb-0 rounded-none ml-0 pl-0 overflow-x-auto no-scrollbar
          ">
            {tavList.map((tab: TabList) => (
              <TabsTrigger
              key={tab.category}
              value={tab.category}
              className="capitalize !shadow-none !bg-transparent pl-0
              data-[state=active]:border-b-black border-b-2 border-l-0 data-[state=active]:text-black rounded-none
              pb-6 pr-0 mr-4 z-10 ml-0 cursor-pointer
              ">
                {tab.category}
              </TabsTrigger>
            ))}
          </TabsList>
            </div>

          {tavList.map((tab: TabList) => (
            <TabsContent
              key={tab.category}
              value={tab.category}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-3 mt-6 text-sm text-muted-foreground">
                {tab.items.map((item, index) => (
                  <div key={index}>
                    <div className='font-semibold'>
                      {item.place}
                      </div>
                    {item.type && <span className="text-gray-500">{item.type}</span>}
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};
