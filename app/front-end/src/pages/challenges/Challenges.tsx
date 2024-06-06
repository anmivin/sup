import { useTranslation } from 'react-i18next';

import DefaultRating from '@components/DefaultRating';
import * as icons from '@components/Icons';
import DefaultSpinner from '@components/Spinner/Spinner';

/* import RandomAspiration from '@components/Randomizer/RandomAspiration';
import RandomSkill from '@components/Randomizer/RandomSkill';
import RandomTrait from '@components/Randomizer/RandomTrait'; */
import { HandbookStore } from '@stores/Handbook/Handbook.store';

HandbookStore.getState().getAspirations();
HandbookStore.getState().getSkills();
HandbookStore.getState().getTraits();

const Challenges = () => {
  const { t } = useTranslation(['achievements']);

  return (
    <>
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
      <icons.EyeIcon />
      <icons.EyeOffIcon />
      <icons.FaceContentIcon />
      <icons.FaceFrownIcon />
      <icons.FaceHappyIcon />
      <icons.FaceNeutralIcon />
      <icons.FaceSadIcon />
      <icons.FaceSmileIcon />
      <icons.FlashIcon />
      <icons.GamePadIcon />
      <icons.GiftIcon />
      <icons.GlobeIcon />
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
      <icons.RatingFilledIcon />
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
