import * as React from "react";
import { cn } from "@/lib/utils";
import viteLogo from "/vite.svg";
import dummyIcon from "./assets/dummy-icon.svg";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components = [
  {
    title: "Blogs",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Events",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "News and PR",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "FAQs",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
];

export function DesktopNavigation({ isScrolled }) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="gap-1">
        <NavigationMenuItem>
          <a href="/docs">
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                isScrolled ? "text-gray-900" : "text-white",
                "nav-trigger"
              )}
            >
              Home
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              isScrolled ? "text-gray-900" : "text-white",
              "nav-trigger"
            )}
          >
            Company{" "}
          </NavigationMenuTrigger>{" "}
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <img src={dummyIcon} className="size-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">DCB LLP</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="About us">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Services">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Our team">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              isScrolled ? "text-gray-900" : "text-white",
              "nav-trigger"
            )}
          >
            Insights
          </NavigationMenuTrigger>{" "}
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="border border-input rounded-md ">
          <a href="/docs">
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                isScrolled ? "text-gray-900" : "text-white",
                "nav-trigger"
              )}
            >
              Contact us
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
