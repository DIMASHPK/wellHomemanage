import React from 'react';
import { toast } from 'react-toastify';
import copy from 'copy-to-clipboard';

export const handleCopy =
  (content: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    copy(content);

    toast.success('Copied!', {
      position: 'bottom-right',
      autoClose: 1500,
    });
  };

const isLocalStorageExists = () => {
  const test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

export const setLocalStorageValue = <V>(key: string, value: V) => {
  if (!isLocalStorageExists()) {
    return null;
  }

  localStorage.setItem(key, JSON.stringify(value));
  return value;
};

export const getLocalStorageValue = <V>(key: string) => {
  if (!isLocalStorageExists()) {
    return null;
  }

  const currentValue = localStorage.getItem(key);

  return currentValue ? (JSON.parse(currentValue) as V) : null;
};

export const removeLocalStorageValue = (key: string): null => {
  if (isLocalStorageExists()) {
    localStorage.removeItem(key);
  }

  return null;
};
