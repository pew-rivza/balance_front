import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Area from "./Area";

export default {
  title: "Simple Components/Checkbox",
  component: Area,
  argTypes: {
    onChange: { control: false },
    classNames: { control: false },
    readOnly: { table: { disable: true } },
  },
} as ComponentMeta<typeof Area>;

const Template: ComponentStory<typeof Area> = (args) => <Area {...args} />;

export const Default = Template.bind({});

Default.storyName = "Checkbox";
Default.args = {
  checked: true,
  disabled: false,
  readOnly: true,
};

// TODO: написать тесты для checkbox (визуальные и функциональные)
