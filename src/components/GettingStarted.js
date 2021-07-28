import License from './License'
import utilStyles from '../styles/utils.module.css'
import Details from './Details';

function GettingStarted({selectedFish}) {
  return (
    <>
    {selectedFish !== null ? <Details/> : 
    <>
      <div className={utilStyles.headingXl}>License Information</div>
      <hr/>
      <License/>
    </>
    }
    </>
  );
}

export default GettingStarted;