import { ImgWrapper, ReplaceImageWrapper } from './AddImageSection.styled';
import { GeneralBtn, FieldErrorMessage } from '@/components';
import type { RecipeFormState } from '@/types';
import type { ChangeEvent, FocusEvent } from 'react';

type RecipeAddImageSectionInfo = Pick<
  RecipeFormState,
  'recipe_name' | 'image_url'
>;

type AddImageSectionProps = RecipeAddImageSectionInfo & {
  handleImageUpload: (event: ChangeEvent<HTMLInputElement>) => void;
  removeImage: () => void;
  isImgError: string;
  handleInputBlur: (evt: FocusEvent<HTMLInputElement>) => void;
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
          <GeneralBtn type="button" variant="delete" onClick={removeImage}>
            Replace image
          </GeneralBtn>
        </ReplaceImageWrapper>
      )}
      {isImgError && isTouched && (
        <FieldErrorMessage errorMessage={isImgError} />
      )}
    </>
  );
};

export { AddImageSection };
