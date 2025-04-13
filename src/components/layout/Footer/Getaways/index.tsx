import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { tavList } from './tab-list';
import { TabList } from './Getaways';

export const Getaways = () => {
  return (
    <div className="pt-8 ">
      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-6">Inspiration for future getaways</h2>

        <Tabs
          defaultValue={tavList[0]?.category}
          className="w-full">
          <TabsList className="flex flex-wrap gap-2 overflow-x-auto no-scrollbar">
            {tavList.map((tab: TabList) => (
              <TabsTrigger
                key={tab.category}
                value={tab.category}
                className="capitalize ">
                {tab.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {tavList.map((tab: TabList) => (
            <TabsContent
              key={tab.category}
              value={tab.category}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-3 mt-6 text-sm text-muted-foreground">
                {tab.items.map((item, index) => (
                  <div key={index}>
                    {item.place}
                    {item.type && <span className="text-gray-500"> – {item.type}</span>}
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
