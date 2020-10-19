import React from 'react';
import { translations } from '../../../locales/i18n';
import { useTranslation } from 'react-i18next';

type Props = {
  items: Array<string>;
};

export const List = ({ items }: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <ul>
        {items.map(item => {
          return <li key={item}>{t(translations.tomatoList[item])}</li>;
        })}
      </ul>
    </>
  );
};

export default List;
