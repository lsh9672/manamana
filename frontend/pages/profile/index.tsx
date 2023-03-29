import Navbar from '../../components/common/Navbar';
import Headerbar from '@/components/common/Headerbar';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { GetServerSideProps } from 'next';

type User = {
  id: number;
  email: string;
  nickname: string;
  imagePath: string;
  gender: string;
  age: number;
  likeCount: number;
  scoreCount: number;
};

export default function ProfilePage({ userData }: any) {
  const [isEditState, setIsEditState] = useState<boolean>(false);
  const [info, setInfo] = useState<User>({
    id: userData.id,
    email: userData.email,
    nickname: userData.nickname,
    imagePath: userData.imagePath,
    gender: userData.gender,
    age: userData.age,
    likeCount: userData.likeCount,
    scoreCount: userData.scoreCount,
  });

  const onEditClick = () => {
    setIsEditState(!isEditState);
  };

  const onLogOutClick = () => {
    console.log('로그아웃 클릭됨');
  };

  // 회원정보 수정 axios
  const axiosPatch = () => {
    let id = info.id;
    let nickname = info.nickname;
    let imagePath = info.imagePath;

    let formData = new FormData();
    formData.append('data', JSON.stringify({ id: id, nickname: nickname, userImage: imagePath }));
    formData.append('userImg', imagePath);

    axios
      .patch('https://j8b206.p.ssafy.io/api/users/1', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          accept: '*/*',
        },
      })
      .then(response => {
        // console.log(response.data);
        alert('프로필 수정 완료');
      })
      .catch(error => {
        console.error(error);
      });
  };

  // 저장 눌렀을 때 바뀐 정보 저장
  const changeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, nickname: e.target.value });
  };
  const changeImagePath = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, imagePath: e.target.value });
  };

  // 처음 프로필 페이지 들어오면 수정중이 아닌 상태
  useEffect(() => {
    setIsEditState(false);
    // console.log(userData);
    // console.log(info);
  }, []);

  const BtnUpload = styled.div`
    width: 100px;
    height: 100px;
    background-color: #77767a;
    opacity: 40%;
    border: 1px solid rgb(77, 77, 77);
    border-radius: 9999px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      background: rgb(77, 77, 77);
      color: #fff;
    }
    #file {
      display: none;
    }
  `;
  return (
    <div className="h-screen overflow-hidden">
      <Headerbar showBackBtn={false} pageName="마이페이지" rightBtn="NOTI" />

      <div className="flex h-full w-full flex-col gap-4 bg-BackgroundLight p-2">
        <div className="flex items-center rounded-2xl bg-BackgroundLightComponent p-8">
          <div className="relative flex w-full gap-4">
            <img
              src={info.imagePath}
              alt="프로필 이미지"
              className="h-[100px] w-[100px] rounded-full"
            />
            {isEditState ? (
              <>
                <label htmlFor="file">
                  <BtnUpload className="absolute left-[0px]"></BtnUpload>
                  <Image
                    src={'/images/Profile_Img_Edit.png'}
                    alt="프로필 이미지 수정"
                    width={48}
                    height={48}
                    className="absolute left-[26px] top-[26px]"
                  />
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={changeImagePath}
                  className="hidden"
                ></input>
              </>
            ) : (
              <></>
            )}
            <div className="flex w-full flex-col justify-center gap-2">
              {isEditState ? (
                <input
                  className="w-full border-[1px] text-xl font-medium text-FontPrimaryLight"
                  type="text"
                  maxLength="8"
                  value={info.nickname}
                  onChange={changeNickname}
                ></input>
              ) : (
                <div className="text-xl font-medium text-FontPrimaryLight">{info.nickname}</div>
              )}
              <div className="text-base text-FontSecondaryLight">{info.email}</div>
            </div>
          </div>
          <div className="flex-grow-1 w-8" onClick={onEditClick}>
            {isEditState ? (
              <div className="font-bold" onClick={axiosPatch}>
                저장
              </div>
            ) : (
              <Image src={'/images/Profile_Edit.png'} alt="설정 이미지" width={24} height={24} />
            )}
          </div>
        </div>
        <div className="flex justify-center rounded-2xl bg-BackgroundLightComponent p-8">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <div>
              <Image src={'/images/Heart_Logo.png'} alt="내 웹툰" width={50} height={50} />
            </div>
            <div className="text-xl font-bold">{info.likeCount}</div>
            <Link href={'/my-webtoon'}>
              <button className="rounded-xl bg-PrimaryLight p-1 pl-2 pr-2 text-lg font-medium text-FontPrimaryDark">
                내 웹툰
              </button>
            </Link>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <div>
              <Image src={'/images/Comment_Logo.png'} alt="내 댓글" width={45} height={45} />
            </div>
            <div className="text-xl font-bold">{info.scoreCount}</div>
            <Link href={'/my-comment'}>
              <button className="rounded-xl bg-PrimaryLight p-1 pl-2 pr-2 text-lg font-medium text-FontPrimaryDark">
                내 댓글
              </button>
            </Link>
          </div>
        </div>
        <button
          className="w-24 rounded-2xl bg-PrimaryLight p-4 pt-2 pb-2 text-base font-bold text-FontPrimaryDark"
          onClick={onLogOutClick}
        >
          로그아웃
        </button>
        <div className="mt-4 flex w-full flex-col items-center justify-center"></div>
      </div>
      <Navbar />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  // const { user_id } = context.query;
  const user_id = 1; // 로그인 구현 전이라 임시로 user_id 설정
  try {
    const response = await axios.get(`https://j8b206.p.ssafy.io/api/users/${user_id}`);
    const userData: User = response.data.result;
    console.log(userData);
    // console.log(context);
    return {
      props: { userData },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        userData: null,
      },
    };
  }
};
