import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { tavList } from "./tab-list";
import { TabList } from "./../Footer.d";

export const Getaways = () => {
  return (
    <div className="pt-14">
      <div>
        <h2 className="mb-6 text-lg font-semibold md:text-xl">Inspiration for future getaways</h2>
        <Tabs
          defaultValue={tavList[0]?.category}
          className="w-full"
        >
          <div className="w-full border-b-1 border-b-gray-300 !bg-transparent">
            <TabsList className="no-scrollbar no-scrollbar ml-0 flex flex-wrap gap-2 overflow-x-auto rounded-none pb-0 pl-0">
              {tavList.map((tab: TabList) => (
                <TabsTrigger
                  key={tab.category}
                  value={tab.category}
                  className="z-10 mr-4 ml-0 cursor-pointer rounded-none border-b-2 border-l-0 !bg-transparent pr-0 pb-6 pl-0 capitalize !shadow-none data-[state=active]:border-b-black data-[state=active]:text-black"
                >
                  {tab.category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {tavList.map((tab: TabList) => (
            <TabsContent
              key={tab.category}
              value={tab.category}
            >
              <div className="text-muted-foreground mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {tab.items.map((item, index) => (
                  <div key={index}>
                    <div className="font-semibold">{item.place}</div>
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
