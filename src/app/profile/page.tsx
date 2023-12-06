'use client';

import { useCallback, useEffect, useState } from 'react';

import Footer from '@/components/common/footer/Footer';
import BoxWrapper from '@/components/profilePage/BoxWrapper';
import SecurityCheckBox from '@/components/profilePage/securityCheckBox/SecurityCheckBox';
import SideBarItem from '@/components/profilePage/sideBarItem/sideBarItem';
import UserHeaderInfo from '@/components/profilePage/userHeaderInfo/UserHeaderInfo';
import ContainerProfile from '@/components/profilePage/containerProfile/ContainerProfile';

import {
  HistoryContent,
  ProfileContent,
  SecurityContent,
  WalletContent,
} from '@/components/profilePage/contents';

import userIcon from '@/assets/svgs/user_icon.svg';
import walletIcon from '@/assets/svgs/wallet_icon.svg';
import securityIcon from '@/assets/svgs/security_icon.svg';
import verificationIcon from '@/assets/svgs/verification_icon.svg';
import referralIcon from '@/assets/svgs/referral_icon.svg';
import settingIcon from '@/assets/svgs/settings_icon.svg';
import historyIcon from '@/assets/svgs/history_icon.svg';
import { getProfileAction } from '@/store/actions/action';
import { useRouter } from 'next/navigation';
import { useUser } from '../../store/store';

interface SelectedItemType {
  id: string;
  name: string;
  icon: any;
  content: any;
}

const sideBar = [
  {
    id: 'profile',
    name: 'Профиль',
    icon: userIcon,
    content: <ProfileContent />,
  },
  {
    id: 'wallet',
    name: 'Кошелек',
    icon: walletIcon,
    content: <WalletContent />,
  },
  {
    id: 'history',
    name: 'История',
    icon: historyIcon,
    content: <HistoryContent />,
  },
  {
    id: 'security',
    name: 'Безопасность',
    icon: securityIcon,
    content: <SecurityContent />,
  },
  {
    id: 'verification',
    name: 'Верификация',
    icon: verificationIcon,
    content: <div>Верификация</div>,
  },
  {
    id: 'referral_program',
    name: 'Реферальная программа',
    icon: referralIcon,
    content: <div>Реферальная программа</div>,
  },
  {
    id: 'settings',
    name: 'Настройки',
    icon: settingIcon,
    content: <div>Настройки</div>,
  },
];

const securityInfo: any = [
  { id: 'verify_email', name: 'E-mail', store: 'email' },
  {
    id: 'verify_profile',
    name: 'Профиль не подтвержден',
    store: 'verify_status',
  },
  {
    id: '2fa',
    name: 'Двухфакторная аутентификация (2FA)',
    store: 'two_factor',
  },
];

const Page = () => {
  const [selectedItem, setSelectedItem] = useState<SelectedItemType>(
    sideBar[0],
  );

  const { user, setUser } = useUser();

  const router = useRouter();

  const selectItem = useCallback((ev: any) => {
    const { item } = ev;
    setSelectedItem(item);
  }, []);

  useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      router.replace('/');
    }
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const response = await getProfileAction(localStorage.getItem('token')!);

      setUser(response);
    };

    getUser();
  }, []);

  return (
    <>
      {user && (
        <div style={{ fontFamily: 'Roboto Flex' }}>
          <section className='-mt-8'>
            <ContainerProfile>
              <div className='flex'>
                <BoxWrapper className='min-h-[727px] min-w-[346px]'>
                  <UserHeaderInfo
                    username={user?.login}
                    email={user?.email}
                    avatar={user?.image}
                  />
                  <div className='mt-4 flex w-full flex-col gap-y-1.5'>
                    {securityInfo.map((info: any) => (
                      <SecurityCheckBox
                        label={info?.name}
                        key={info?.id}
                        isEnabled={user[info.store as keyof typeof user]}
                      />
                    ))}
                  </div>
                  <div className='mt-4 flex flex-col gap-y-0.5'>
                    {sideBar.map((item, index) => (
                      <SideBarItem
                        key={item?.id}
                        label={item?.name}
                        icon={item?.icon}
                        onClick={() => selectItem({ item, index })}
                      />
                    ))}
                  </div>
                </BoxWrapper>
                <div className='w-full'>{selectedItem?.content}</div>
              </div>
            </ContainerProfile>
          </section>

          <footer className={'mt-40'}>
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
};

export default Page;
