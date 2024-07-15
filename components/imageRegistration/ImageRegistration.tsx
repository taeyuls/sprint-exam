'use client'
// 이미지 등록 컴포넌트
import { imageUploadAPI } from '@/api/todoRequests'
import Edit from '@/public/icons/edit.svg'
import plusG from '@/public/icons/plusG.svg'
import imageIcon from '@/public/images/img.svg'
import Image from "next/image"
import { useEffect, useRef, useState } from 'react'
import { addImageBtn, imageContainer, images, modifyImageBtn } from './imageRegistration.css'
const tenantId = "sexydynamite";

interface ImageRegistrationProps {
  imageUrl: string;
  onUploadSuccess: (url: string) => void;
}

const ImageRegistration = ({ imageUrl, onUploadSuccess }: ImageRegistrationProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // 선택된 파일 상태 저장
  const [previewUrl, setPreviewUrl] = useState<string | null>(null); // 미리보기 URL 상태 저장
  const fileInputRef = useRef<HTMLInputElement | null>(null); // 파일 입력 참조



  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file); // 선택된 파일 설정

      // 파일 미리보기 URL 생성
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string); // 미리보기 URL 설정
      };
      reader.readAsDataURL(file); // 파일을 데이터 URL로 읽기
    }
    // console.log(file)
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile); // FormData에 선택된 파일 추가

    try {
      const response = await await imageUploadAPI(formData);
      const uploadedUrl = response.data.url; // 반환된 URL
      onUploadSuccess(uploadedUrl); // 부모 컴포넌트에 URL 전달
      alert('사진이 업로드 되었습니다! 수정완료를 누르지 않으면 사진이 등록되지 않으니 주의해주세요😄')
      // console.log('업로드 성공:', response.data);

    } catch (error) {
      console.error('업로드 실패:', error);
    }
  };

  useEffect(() => {
    setPreviewUrl(imageUrl); // 컴포넌트가 마운트될 때 imageUrl로 미리보기 설정
  }, [imageUrl]);

  return (
    <>
      {imageUrl ? (
        <div className={images}>
          {previewUrl && (
            <img src={previewUrl} alt="이미지" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} />
          )}
          <button
            className={modifyImageBtn}
            onClick={() => fileInputRef.current?.click()}  // 파일 선택 버튼 클릭 시 파일 입력 클릭
          >
            <Image src={Edit} alt='추가 아이콘' />
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange} // 파일 변경 핸들러
          />
          {selectedFile && (
            <button onClick={handleUpload} className={addImageBtn}>
              <Image src={plusG} alt='플러스 아이콘' />
            </button>
          )}
        </div>
      ) : (
        <div className={imageContainer}>
          {!previewUrl && (
            <Image src={imageIcon} alt="사진아이콘" />
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange} // 파일 변경 핸들러
          />
          <button
            className={addImageBtn}
            onClick={() => fileInputRef.current?.click()}  // 파일 선택 버튼 클릭 시 파일 입력 클릭
          >
            <Image src={plusG} alt='플러스 아이콘' />
          </button>
          {previewUrl && (
            <div style={{ width: '100%', height: '100%' }}>
              <img src={previewUrl} alt="미리보기" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} />
            </div>
          )}
          {selectedFile && (
            <button onClick={handleUpload} className={addImageBtn}>
              <Image src={plusG} alt='플러스 아이콘' />
            </button>
          )}
        </div>
      )}
    </>

  )
}

export default ImageRegistration
