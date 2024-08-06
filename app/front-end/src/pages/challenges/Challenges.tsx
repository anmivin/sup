import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';
import { AxiosProgressEvent } from 'axios';
import { uniqueId } from 'lodash';

import DrawLayout from '@widgets/DrawLayout';

import EditImageModal from '@features/EditImageModal';

import { ImageDrop, ImageList, ImageUpload } from '@entities/ImageUploader';
import { ImageItem } from '@entities/ImageUploader/ImageUploader.types';

/* import RandomAspiration from '@components/Randomizer/RandomAspiration';
import RandomSkill from '@components/Randomizer/RandomSkill';
import RandomTrait from '@components/Randomizer/RandomTrait'; */
import { HandbookStore } from '@stores/Handbook/Handbook.store';
import { TreeStore } from '@stores/Tree/Tree.store';

import Rating from '@ui/Rating';
import DefaultSpinner from '@ui/Spinner/Spinner';

import * as icons from '@assets/icons';

/* HandbookStore.getState().getAspirations();
HandbookStore.getState().getSkills();
HandbookStore.getState().getTraits(); */

const Challenges = () => {
  const { t } = useTranslation(['achievements']);
  const { saveImageDebug } = TreeStore();
  const [files, setFiles] = useState<ImageItem[]>([]);
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState<string | null>(null);
  const onAdd = useCallback((files: File[]) => {
    setFiles((prev) => [...prev, ...files.map((val) => ({ file: val, key: uniqueId(), uploadProgress: 0.7 }))]);
  }, []);
  const onUploadProgress = (progressEvent: AxiosProgressEvent) => {
    const { loaded, total } = progressEvent;
    if (!total) return;
    setFiles((prev) => {
      const newFiles = [...prev];
      const progress = Math.floor((loaded / total) * 100);
      console.log(progress);
      newFiles[newFiles.length - 1].uploadProgress = progress;
      return newFiles;
    });
    if (loaded == total) {
      setFiles((prev) => {
        const newFiles = [...prev];
        newFiles[newFiles.length - 1].uploadProgress = 100;
        return newFiles;
      });
    }
  };
  const onFileUpload = useCallback(async (file: File) => {
    setFiles((prev) => [...prev, { file: file, uploadProgress: 0, key: uniqueId() }]);
    const config = {
      onUploadProgress,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      let fd = new FormData();
      fd.append('file', file);
      saveImageDebug(fd, config);
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <>
      {/*       <DrawLayout /> */}
      <ImageUpload
        value={img}
        onImageAdd={(files) => {
          onFileUpload(files[0]);
          /* 
          setOpen(true); */
        }}
      />
      <ImageDrop onFilesAdd={onAdd} />
      <ImageList imageList={files} /* onImageRemove={() => {}} */ onImageClick={() => setOpen(true)} />
      {!!files.length && (
        <EditImageModal setImg={setImg} open={open} onClose={() => setOpen(false)} image={files[0].file} />
      )}

      <Rating />

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
      <icons.PlusIcon />

      {/*       <RandomAspiration aspirations={aspirations} />
      <RandomSkill />
      <RandomTrait /> */}
    </>
  );
};
export default Challenges;
