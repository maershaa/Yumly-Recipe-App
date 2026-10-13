import { ImgWrapper, ReplaceImageWrapper } from './AddImageSection.styled';
import { GeneralBtn, FieldErrorMessage } from '@/components';
import type { RecipeFormState } from '@/types';
import type { ChangeEvent, FocusEvent } from 'react';

type RecipeAddImageSectionInfo = Pick<RecipeFormState, 'recipe_name'>;

type AddImageSectionProps = RecipeAddImageSectionInfo & {
  imagePreviewUrl: string;
  handleImageSelect: (event: ChangeEvent<HTMLInputElement>) => void;
  removeImage: () => void;
  isImgError: string;
  handleInputBlur: (evt: FocusEvent<HTMLInputElement>) => void;
  isTouched: boolean;
};

const AddImageSection = ({
  recipe_name,
  imagePreviewUrl,
  handleImageSelect,
  removeImage,
  isImgError,
  handleInputBlur,
  isTouched,
}: AddImageSectionProps) => {
  return (
    <>
      {!imagePreviewUrl ? (
        <ImgWrapper>
          <label>
            <input
              type="file"
              accept=".jpg, .png, .jpeg"
              multiple={false} //если ты разрешаешь загрузку нескольких фото => true
              onChange={handleImageSelect}
              onBlur={handleInputBlur}
              name="imagePreviewUrl"
            />
          </label>
        </ImgWrapper>
      ) : (
        <ReplaceImageWrapper>
          <img src={imagePreviewUrl} alt={recipe_name || 'Recipe image'} />
          <GeneralBtn type="button" $variant="delete" onClick={removeImage}>
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
