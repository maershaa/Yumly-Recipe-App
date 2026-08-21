import { ImgWrapper, ReplaceImageWrapper } from './AddImageSection.styled';
import { GeneralBtn, FieldErrorMessage } from '@/components';
import type { Recipe } from '@/types'; //!или тут все таик данные с формы (recipeForm) а не с просто рецепта?

type RecipeAddImageSectionInfo = Pick<Recipe, 'recipe_name' | 'image_url'>;
type AddImageSectionProps = RecipeAddImageSectionInfo & {
  handleImageUpload: () => void;
  removeImage: () => void;
  isImgError: boolean;
  handleInputBlur: () => void;
  isTouched: boolean;
};

const AddImageSection = ({
  recipe_name,
  image_url,
  handleImageUpload,
  removeImage,
  isImgError,
  handleInputBlur,
  isTouched,
}: AddImageSectionProps) => {
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
