import { ImgWrapper, ReplaceImageWrapper } from './AddImageSection.styled';
import { GeneralBtn, FieldErrorMessage } from '@/components';

const AddImageSection = ({
  recipe_name,
  image_url,
  handleImageUpload,
  removeImage,
  isImgError,
  handleInputBlur,
  isTouched,
}) => {
  const { image_url: isImageUrlTouched } = isTouched;

  return (
    <>
      {!image_url ? (
        <ImgWrapper>
          <label>
            <input
              type="file"
              accept=".jpg, .png, .jpeg"
              multiple={false} //если ты разрешаешь загрузку нескольких фото => true
              onChange={handleImageUpload}
              onBlur={handleInputBlur}
              name="image_url"
            />
          </label>
        </ImgWrapper>
      ) : (
        <ReplaceImageWrapper>
          <img
            src={image_url}
            alt={recipe_name || 'Recipe image'}
            loading="lazy"
          />
          <GeneralBtn variant="delete" onClick={removeImage}>
            Replace image
          </GeneralBtn>
        </ReplaceImageWrapper>
      )}
      {isImgError && isImageUrlTouched && (
        <FieldErrorMessage errorMessage={isImgError} />
      )}
    </>
  );
};

export { AddImageSection };
