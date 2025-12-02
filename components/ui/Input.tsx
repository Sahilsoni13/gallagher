import clsx from 'clsx';
import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

interface InputProps {
  label: string;
  placeholder: string;
  className?: string;
  error?: string;
  important?: boolean;
  labelClassName?: string;
  disabled?: boolean;
}

const Input = ({
  label,
  placeholder,
  className,
  error,
  important,
  labelClassName,
  disabled,
  ...textInputProps
}: InputProps & TextInputProps) => {
  return (
    <View className="space-y-2">
      {label && (
        <Text
          className={clsx(
            `text-text-default-strong text-base font-semibold  leading-[150%] font-source-sans`,
            labelClassName
          )}
        >
          {label}
          {important && (
            <Text className="text-text-alerts-error ml-1 text-left">*</Text>
          )}
        </Text>
      )}
      <TextInput
        {...textInputProps}
        editable={!disabled}
        className={clsx(
          `py-3 px-4 bg-bg-neutral text-text-default text-base font-normal leading-[150%] outline-blue-60 rounded-none font-source-sans ${error ? 'border-2 border-border-field-error' : 'border border-gray-40'} ${disabled && 'cursor-not-allowed bg-bg-neutral-strong '}`,
          className
        )}
        placeholder={placeholder}
      />
      {error && (
        <Text
          className={clsx(
            `text-text-alerts-error text-base font-normal leading-[150%] text-left font-source-sans`
          )}
        >
          {error}
        </Text>
      )}
    </View>
  );
};

export default Input;
