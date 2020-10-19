import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Aside, Container, Form, Header, TomatoImage, Wrapper } from './styles';
import tomato from 'assets/images/tomato.jpg';
import Tab from '../../components/Tabs/Tab';
import Tabs from 'app/components/Tabs';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import List from '../../components/List';
import Table from '../../components/Table';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useDispatch, useSelector } from 'react-redux';
import { actions, reducer, sliceKey } from './slice';
import { tomatoSaga } from './saga';
import { selectEnergyList, selectTomatoList } from './selector';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import { LoadingWrapper } from '../../components/LoadingIndicator/styles';

export function HomePage() {
  const { t } = useTranslation();
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: tomatoSaga });
  const dispatch = useDispatch();
  const energyList = useSelector(selectEnergyList);
  const tomatoList = useSelector(selectTomatoList);
  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };
  useEffectOnMount(() => {
    dispatch(actions.getEnergyList());
    dispatch(actions.getTomatoList());
  });
  return energyList.loading || tomatoList.loading ? (
    <LoadingWrapper>
      <LoadingIndicator />
    </LoadingWrapper>
  ) : (
    <>
      <Helmet>
        <title>{t(translations.headerTitle)}</title>
        <meta name="description" content={t(translations.headerContent)} />
      </Helmet>
      <Wrapper>
        <Container>
          <Header>
            <h1>{t(translations.title)}</h1>
          </Header>
          <div>
            <TomatoImage src={tomato} alt="Girl in a jacket" />
          </div>
          <div>
            <h2>{t(translations.content.title)}</h2>
            <p>{t(translations.content.description)}</p>
            <p>{t(translations.content.detail)}</p>
            <List items={tomatoList.data} />
          </div>
          <Aside>
            <h3>{t(translations.tomatoEnergy.title)}</h3>
            <span>{t(translations.tomatoEnergy.description)}</span>
            <div>
              <Table list={energyList.data} />
              <div className={'table__info'}>
                <div>
                  {t(translations.tomatoEnergy.info)}
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={'http://www.nal.usda.gov/fnic/foodcomp/search/'}
                  >
                    {t(translations.tomatoEnergy.link)}
                  </a>
                </div>
              </div>
            </div>
          </Aside>
        </Container>
        <Tabs>
          <Tab title={t(translations.tomatoInfo.nutrition.title)}>
            {t(translations.tomatoInfo.nutrition.description)}
          </Tab>
          <Tab title={t(translations.tomatoInfo.healthBenefits.title)}>
            {t(translations.tomatoInfo.healthBenefits.description)}
          </Tab>
          <Tab title={t(translations.tomatoInfo.storage.title)}>
            {t(translations.tomatoInfo.storage.description)}
          </Tab>
        </Tabs>
        <Form>
          <h2>{t(translations.form.title)}</h2>
          <p>{t(translations.form.description)}</p>
          <form onSubmit={e => e.preventDefault()}>
            <div className={'form__item'}>
              <label htmlFor="name">{t(translations.form.name)}</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className={'form__item'}>
              <label htmlFor="email">{t(translations.form.email)}</label>
              <input type="email" id="email" name="email" />
            </div>
            <button type="submit">{t(translations.form.submit)}</button>
          </form>
        </Form>
      </Wrapper>
    </>
  );
}
