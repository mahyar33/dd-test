import React from 'react';
import { translations } from '../../../locales/i18n';
import { useTranslation } from 'react-i18next';
import { GrayTable } from './styles';

export type List = {
  type?: 'header' | 'child';
  text: string;
  value: string;
};

type Props = {
  list: Array<List>;
};

export const Table = ({ list }: Props) => {
  const { t } = useTranslation();
  const renderChildren = items => {
    const header: Array<JSX.Element> = [];
    const body: Array<JSX.Element> = [];
    items.forEach(item => {
      const { text, type, value } = item;
      if (type === 'header') {
        header.push(
          <tr key={item.text}>
            <th>{t(translations.tomatoEnergy[text])}</th>
            <th>{value}</th>
          </tr>,
        );
      } else if (type === 'child') {
        body.push(
          <tr key={item.text}>
            <td>- {t(translations.tomatoEnergy[text])}</td>
            <td>{value}</td>
          </tr>,
        );
      } else {
        body.push(
          <tr key={item.text}>
            <td>{t(translations.tomatoEnergy.carbohydrates)}</td>
            <td>{value}</td>
          </tr>,
        );
      }
    });
    return {
      header,
      body,
    };
  };
  const { header, body } = renderChildren(list);
  return (
    <GrayTable>
      <thead>{header}</thead>
      <tbody>{body}</tbody>
    </GrayTable>
  );
};

export default Table;
