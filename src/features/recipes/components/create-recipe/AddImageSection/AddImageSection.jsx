import { ImgWrapper, ReplaceImageWrapper } from './AddImageSection.styled';
import { GeneralBtn } from '@/components';

const AddImageSection = ({
  recipe_name,
  image_url,
  handleImageUpload,
  removeImage,
}) => {
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
    </>
  );
};

export { AddImageSection };
