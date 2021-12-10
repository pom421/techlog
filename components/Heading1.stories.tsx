import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Heading1, Heading1Props } from "./Heading1";

export default {
  title: "Blog/Heading1",
  component: Heading1,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<Heading1Props> = (args) => <Heading1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Mon premier titre",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Mon second titre",
};
