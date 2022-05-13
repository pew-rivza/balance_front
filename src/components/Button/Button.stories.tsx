import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { fireEvent, screen } from '@storybook/testing-library';

// TODO: Доделать сторис кнопки
// TODO: посмотреть, какие есть аддоны и добавить нужные

import Button from "./Button";

export default {
  title: "Simple Components/Button",
  component: Button,
  argTypes: {
    type: {table: {disable: true}},
    onClick: {control: false, action: 'clicked'},
    classNames: {control: false},
  },
  parameters: {
    actions: {
      // argTypesRegex: '^on.*',
      handles: ['click'],
    },
  },
} as ComponentMeta<typeof Button>;

// TODO: узнать по поводу actions в сторибуке и настроить их

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.storyName = "Button";
Default.args = {
  value: "Добавить",
  onClick: () => console.log("clicked from storybook!1"),
};
Default.play = async () => {
  await fireEvent.click(screen.getByRole('button'));
};

// TODO: написать тесты для кнопки (визуальные и функциональные)
