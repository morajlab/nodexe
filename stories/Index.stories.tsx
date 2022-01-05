import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Index } from "@/pages";

export default {
  title: "Pages/Index",
  component: Index,
} as ComponentMeta<typeof Index>;

export const Primary: ComponentStory<typeof Index> = () => <Index />;
