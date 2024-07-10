'use client';

import Button from '@/components/buttons/Button';
import styles from './voting.module.css';
import TopNavBar from '@/components/TopNavBar';
import { useState } from 'react';
import Image from 'next/image';

import Icon_unchecked from '../../../../public/icons/checkBox/checkBox_unchecked.svg';
import Icon_checked from '../../../../public/icons/checkBox/checkBox_checked.svg';

interface IVotingProps {
	onNext: () => void;
}

const menus = [
	{
		category: '한식',
		menus: ['김치찌개', '김치찜', '물냉면', '닭갈비', '비빔밥'],
	},
	{
		category: '중식',
		menus: ['짜장면', '볶음밥', '깐풍기', '짬뽕', '팔보채', '마라탕', '탕수육'],
	},
	{
		category: '일식',
		menus: ['초밥', '우동', '오코노미야끼', '타코야끼', '라멘'],
	},
];

export default function Voting({ onNext }: IVotingProps) {
	const [selectedMenu, setSelectedMenu] = useState<string[]>([]);

	const handleSelectItem = (item: string) => {
		if (selectedMenu.includes(item)) {
			const newTagArr = selectedMenu.filter((menuItem) => menuItem !== item);
			setSelectedMenu(newTagArr);
		} else {
			setSelectedMenu([...selectedMenu, item]);
		}
	};

	return (
		<>
			<TopNavBar title='스위프의 메뉴판' />
			<div className={styles.VotingContentSection}>
				<div className={styles.VotingPBox}>
					<p className={styles.VotingP}>메뉴를 선택해주세요.</p>
					<p className={styles.VotingSub}>(최대 3개)</p>
					<p className={styles.VotingSubRight}>익명 투표</p>
				</div>
				<div className={styles.VotingListBox}>
					<div className={styles.VotingMenuList}>
						{menus.map((menu, index) => {
							return (
								<>
									<p className={styles.VotingCategory}>{menu.category}</p>
									<div className={styles.VotingCategoryBox} key={index}>
										{menu.menus.map((item, idx) => (
											<div key={idx} className={styles.VotingMenuItemBox}>
												<Image
													className={styles.VotingCheckBox}
													src={
														selectedMenu.includes(item)
															? Icon_checked
															: Icon_unchecked
													}
													width={24}
													height={24}
													alt='checkBox'
													onClick={() => handleSelectItem(item)}
												/>
												<p className={styles.VotingMenuItem}>{item}</p>
											</div>
										))}
									</div>
								</>
							);
						})}
					</div>
				</div>
			</div>
			<div className={styles.VotingButtonBox}>
				<Button size='big' onClick={onNext}>
					투표하기
				</Button>
			</div>
		</>
	);
}