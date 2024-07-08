'use client';

import Header from '@/components/Header';
import styles from './home.module.css';
import TabNavigation from '@/components/TabNavigation';
import { useState } from 'react';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import NoMenu_BS from '@/components/BottomSheet/NoMenu_BS';

export default function Home() {
  const [tab, setTab] = useState<'my' | 'team'>('my');

  return (
    <>
      <Header />
      <TabNavigation tab={tab} setTab={setTab} />
      <div className={styles.Container}></div>
      <BottomSheet size='small'>
        <NoMenu_BS />
      </BottomSheet>
    </>
  );
}
