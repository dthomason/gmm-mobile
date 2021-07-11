import { Brand } from '@/Components';
import InitStartup from '@/Store/Startup/Init';
import { useTheme } from '@/Theme';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

const IndexStartupContainer = () => {
  const { Layout, Gutters, Fonts } = useTheme();

  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(InitStartup.action());
  }, [dispatch]);

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
      <Text style={Fonts.textCenter}>{t('welcome')}</Text>
    </View>
  );
};

export default IndexStartupContainer;
