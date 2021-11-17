import React from "react";
import { Basic } from "@/apps/web-app/components";
import { Button, Input, Navbar } from "@mantine/core";
import { Search } from "react-feather";

export const Index = () => (
  <Basic>
    <Navbar>
      <Navbar.Section>First section</Navbar.Section>
    </Navbar>
    <Input icon={<Search />} placeholder="Enter npm package name" />
  </Basic>
);

export default Index;
