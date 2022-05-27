import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { fireEvent, screen } from "@storybook/testing-library";
import { action } from '@storybook/addon-actions';

// TODO: посмотреть, какие есть аддоны и добавить нужные

import Button from "./Button";

export default {
  title: "Simple Components/Button",
  component: Button,
  argTypes: {
    type: { table: { disable: true } },
    onClick: { control: false },
    classNames: { control: false },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.storyName = "Button";
Default.args = {
  value: "Добавить",
  onClick: action('button clicked'),
  disabled: false,
};
Default.play = async () => {
  await fireEvent.click(screen.getByRole("button"));
};

// TODO: написать тесты для кнопки (визуальные и функциональные)
