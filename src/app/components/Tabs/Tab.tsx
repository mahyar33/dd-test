import React from 'react';
import { TabContent } from './styles';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Tab = ({ children }: Props) => {
  return <TabContent>{children}</TabContent>;
};

export default Tab;
