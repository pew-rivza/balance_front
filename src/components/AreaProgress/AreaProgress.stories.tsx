import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AreaProgress from "./AreaProgress";

export default {
  title: "Simple Components/Checkbox",
  component: AreaProgress,
  argTypes: {
    onChange: { control: false },
    classNames: { control: false },
    readOnly: { table: { disable: true } },
  }
} as ComponentMeta<typeof AreaProgress>;

const Template: ComponentStory<typeof AreaProgress> = (args) => <AreaProgress {...args} />;

export const Default = Template.bind({});

Default.storyName = "Checkbox";
Default.args = {
  checked: true,
  disabled: false,
  readOnly: true,
};

// TODO: написать тесты для checkbox (визуальные и функциональные)
