import clsx from 'clsx';
import React from 'react';
import { Pressable } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  onLongPress?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
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
  });

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      onLongPress={onLongPress}
      className={clsx(
        `py-3 px-5 text-base font-normal leading-[150%] capitalize text-center  ${buttonClasses} ${className}`
      )}
    >
      {title}
    </Pressable>
  );
};

export default Button;
