import clsx from 'clsx';
import React from 'react';
import { Pressable, Text } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  onLongPress?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

const Button = ({
  title,
  onPress,
  onLongPress,
  className,
  variant = 'primary',
  disabled = false,
}: ButtonProps) => {
  const buttonClasses = clsx({
    'text-text-inverse  bg-btn-primary-default active:bg-btn-primary-active':
      variant === 'primary',
    'text-text-brand border bg-btn-secondary-default border-border-btn-secondary active:bg-btn-secondary-active':
      variant === 'secondary',
    'text-text-inverse  bg-red-70 active:bg-red-80': variant === 'danger',
  });

  const textClasses = clsx({
    'text-text-inverse': variant === 'primary' || variant === 'danger',
    'text-text-brand': variant === 'secondary',
  });

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      onLongPress={onLongPress}
      className={clsx(`py-3 px-5  ${buttonClasses} ${className}`)}
    >
      <Text
        className={`text-base font-normal leading-[150%] capitalize text-center font-source-sans ${textClasses}`}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
