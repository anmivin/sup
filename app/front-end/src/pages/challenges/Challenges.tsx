import { useTranslation } from 'react-i18next';

import DefaultSpinner from '@components/Spinner/Spinner';

/* import RandomAspiration from '@components/Randomizer/RandomAspiration';
import RandomSkill from '@components/Randomizer/RandomSkill';
import RandomTrait from '@components/Randomizer/RandomTrait'; */
import { TreeStore } from '@stores/Handbook/Handbook.store';

TreeStore.getState().getAspirations();
TreeStore.getState().getSkills();
TreeStore.getState().getTraits();

const Challenges = () => {
  const { t } = useTranslation(['achievements']);

  return (
    <>
      <DefaultSpinner />
      {/*       <RandomAspiration aspirations={aspirations} />
      <RandomSkill />
      <RandomTrait /> */}
    </>
  );
};
export default Challenges;
