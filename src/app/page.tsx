'use client';

import MenuCardModal from '@/components/modals/MenuCardModal';
import { useState } from 'react';
import Splash from '../components/Splash';

export default function Home() {
  const [isMenuCardModalOpen, setIsMenuCardModalOpen] =
    useState<boolean>(false);
  return (
    <>
      <Splash />
      <div>
        <button onClick={() => setIsMenuCardModalOpen(true)}>
          메뉴카드 모달
        </button>
        {isMenuCardModalOpen && (
          <MenuCardModal
            menuTitle='감자탕'
            menuImage='/image/감자탕.jpg'
            hashTags={['한식', '매콤함', '국물있는', '밥', '추운날']}
            setIsMenuCardModalOpen={setIsMenuCardModalOpen}
          />
        )}
      </div>
    </>
  );
}
