import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { uniqueId } from 'lodash';

/* import RandomAspiration from '@components/Randomizer/RandomAspiration';
import RandomSkill from '@components/Randomizer/RandomSkill';
import RandomTrait from '@components/Randomizer/RandomTrait'; */
import { HandbookStore } from '@stores/Handbook/Handbook.store';

import DefaultRating from '@ui/DefaultRating';
import { ImageDrop, ImageList, ImageUpload } from '@ui/ImageUploader';
import { ImageItem } from '@ui/ImageUploader/ImageUploader.types';

import DrawLayout from '../../fetures/DrawLayout';
import EditImageModal from '../../fetures/EditImageModal';
import * as icons from '../../shared/assets/icons';
import DefaultSpinner from '../../shared/ui/Spinner/Spinner';

HandbookStore.getState().getAspirations();
HandbookStore.getState().getSkills();
HandbookStore.getState().getTraits();

const Challenges = () => {
  const { t } = useTranslation(['achievements']);
  const [files, setFiles] = useState<ImageItem[]>([]);
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState<string | null>(null);
  const onAdd = useCallback((files: File[]) => {
    setFiles((prev) => [...prev, ...files.map((val) => ({ file: val, key: uniqueId(), uploadProgress: 0.7 }))]);
  }, []);

  useEffect(() => {
    console.log('files', files);
  }, [files]);
  return (
    <>
      {/*       <DrawLayout /> */}
      <ImageUpload
        value={img}
        onImageAdd={(files) => {
          setFiles((prev) => [...prev, ...files.map((val) => ({ file: val, key: uniqueId(), uploadProgress: 0.7 }))]);
          setOpen(true);
        }}
      />
      <ImageDrop onFilesAdd={onAdd} />
      <ImageList imageList={files} /* onImageRemove={() => {}} */ onImageClick={() => setOpen(true)} />
      {!!files.length && (
        <EditImageModal setImg={setImg} open={open} onClose={() => setOpen(false)} image={files[0].file} />
      )}

      <DefaultRating />

      <icons.AlertBlankIcon />
      <icons.AlertCheckIcon />
      <icons.AlertCloseIcon />
      <icons.AlertDotsIcon />
      <icons.AlertExclamationIcon />
      <icons.AlertInfoIcon />
      <icons.AlertPlusIcon />
      <icons.AlertQuestionIcon />
      <icons.AwardIcon />
      <icons.BookmarkCloseIcon />
      <icons.BookmarkDoneIcon />
      <icons.BookmarkIcon />
      <icons.BookmarkMinusIcon />
      <icons.BookmarkPlusIcon />
      <icons.BrushIcon />
      <icons.CameraIcon />
      <icons.CameraOffIcon />
      <icons.CameraPlusIcon />
      <icons.ChainIcon />
      <icons.CheckRectIcon />
      <icons.CheckRoundIcon />
      <icons.ClipIcon />
      <icons.ClipTiltedIcon />
      <icons.CloseIcon />
      <icons.RingsIcon />
      <icons.DiamondIcon />
      <icons.DiceIcon />
      <icons.DollarIcon />
      <icons.DoneIcon />
      <icons.DownloadIcon />
      <icons.EditIcon />
      <icons.CursorIcon />
      <icons.EyeIcon />
      <icons.EyeOffIcon />
      <icons.EraserIcon />
      <icons.FaceContentIcon />
      <icons.FaceFrownIcon />
      <icons.FaceHappyIcon />
      <icons.FaceNeutralIcon />
      <icons.FaceSadIcon />
      <icons.FaceSmileIcon />
      <icons.FlashIcon />
      <icons.GamePadIcon />
      <icons.GiftIcon />
      <icons.GridIcon />

      <icons.HeartFilledIcon />
      <icons.HeartIcon />
      <icons.HomeIcon />
      <icons.ImageIcon />
      <icons.ImagePlusIcon />
      <icons.MailIcon />
      <icons.MarkerIcon />
      <icons.MoonIcon />
      <icons.MoonStarIcon />
      <icons.PuzzleIcon />
      <icons.RatingIcon />
      <icons.SaveIcon />
      <icons.SettingsIcon />
      <icons.SliderIcon />
      <icons.StarIcon />
      <icons.SunIcon />
      <icons.ThumbsUpIcon />
      <icons.ToggleLeftIcon />
      <icons.ToggleRightIcon />
      <icons.ToolIcon />
      <icons.TrashIcon />
      <icons.TreeIcon />
      <icons.TwoHeartsIcon />
      <icons.UploadIcon />
      <icons.UserIcon />
      <icons.HeartBrokenIcon />
      <icons.RingIcon />
      <icons.RingsCrossedIcon />

      {/*       <RandomAspiration aspirations={aspirations} />
      <RandomSkill />
      <RandomTrait /> */}
    </>
  );
};
export default Challenges;
