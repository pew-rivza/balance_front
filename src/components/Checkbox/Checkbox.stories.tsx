import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "./Checkbox";

export default {
  title: "Simple Components/Checkbox",
  component: Checkbox,
  argTypes: {
    onChange: { control: false },
    classNames: { control: false },
    readOnly: { table: { disable: true } },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.storyName = "Checkbox";
Default.args = {
  checked: true,
  disabled: false,
  readOnly: true,
};

// TODO: написать тесты для checkbox (визуальные и функциональные)
