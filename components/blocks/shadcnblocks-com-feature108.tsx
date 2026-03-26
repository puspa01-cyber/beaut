import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Factory, PackageOpen, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "Applications",
  heading = "One robot. Infinite applications.",
  description = "HELIX H1 adapts to the demands of industry — from precision assembly to hazardous response.",
  tabs = [
    {
      value: "tab-1",
      icon: <Factory className="h-auto w-4 shrink-0" />,
      label: "Manufacturing",
      content: {
        badge: "Industry-Ready",
        title: "Precision assembly at machine speed.",
        description:
          "HELIX H1 handles complex sub-component assembly, quality inspection, and parts logistics with sub-millimeter accuracy — running full 12-hour shifts without fatigue or variability. Deployable on existing lines with no infrastructure changes.",
        buttonText: "See Specs",
        imageSrc:
          "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&auto=format&fit=crop",
        imageAlt: "Automated manufacturing facility",
      },
    },
    {
      value: "tab-2",
      icon: <PackageOpen className="h-auto w-4 shrink-0" />,
      label: "Logistics",
      content: {
        badge: "Warehouse Operations",
        title: "Pick, pack, and move — autonomously.",
        description:
          "With a 25 kg payload capacity and full bipedal mobility, HELIX H1 navigates real warehouse environments without infrastructure modifications. Achieves 96%+ pick accuracy on mixed-SKU tasks within the first month of deployment.",
        buttonText: "See Capabilities",
        imageSrc:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop",
        imageAlt: "Large-scale logistics warehouse",
      },
    },
    {
      value: "tab-3",
      icon: <Flame className="h-auto w-4 shrink-0" />,
      label: "Critical Environments",
      content: {
        badge: "Safe Deployment",
        title: "Deploy where humans cannot.",
        description:
          "HELIX H1 maintains full operational capability in environments too dangerous for human workers — high-radiation facilities, chemical plants, structurally compromised sites, and extreme-temperature zones. IP67-rated and hardened against electromagnetic interference.",
        buttonText: "Learn More",
        imageSrc:
          "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop",
        imageAlt: "Industrial hazardous environment",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h2 className="max-w-2xl text-3xl md:text-4xl font-bold tracking-tight">
            {heading}
          </h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-background">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg">
                    {tab.content.description}
                  </p>
                  <Button className="mt-2.5 w-fit gap-2" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };

export function Feature108Demo() {
  return <Feature108 />;
}
