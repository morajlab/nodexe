import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Package } from "@/pages/package";

export default {
  title: "Pages/Package",
  component: Package,
} as ComponentMeta<typeof Package>;

export const Primary: ComponentStory<typeof Package> = () => <Package />;
