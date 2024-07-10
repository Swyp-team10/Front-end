'use client';

import Header from '@/components/Header';
import styles from './makeTeam.module.css';
import TopNavBar from '@/components/TopNavBar';
import OptionButton from '@/components/buttons/OptionButton';
import { useState } from 'react';
import Button from '@/components/buttons/Button';
import BigInput from '@/components/InputBox/BigInput';

const numArr = [1, 2, 3, 4, 5, 6, 7, 8];

export default function MakeTeam() {
	const [teamName, setTeamName] = useState<string>('');
	const [num, setNum] = useState<number>(0);

	return (
		<div className={styles.Container}>
			<Header />
			<TopNavBar title='팀 만들기' />
			<div className={styles.ContentsContainer}>
				<div className={styles.InputContainer}>
					<p className={styles.Sub}>팀 이름을 입력하세요.</p>
					<BigInput placeholder='맛집 동아리 PIG' />
				</div>
				<div className={styles.OptionContainer}>
					<p className={styles.Sub}>인원수를 선택하세요.</p>
					<div className={styles.OptionButtonBox}>
						{numArr.map((num, index) => (
							<div key={index} className={styles.OptionButton}>
								<OptionButton onClick={() => setNum(num)}>{num}명</OptionButton>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={styles.ButtonBox}>
				<Button state={teamName !== '' && num !== 0 ? 'default' : 'disabled'}>
					완료
				</Button>
			</div>
		</div>
	);
}
