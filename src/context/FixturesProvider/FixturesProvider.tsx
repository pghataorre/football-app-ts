import { useEffect, useState } from 'react';
import { FixturesContext } from './FixturesContext';
import getFixtures from '../contextApi/getFixtures';

const FixturesProvider = ({children, tournamentId}: {children: JSX.Element, tournamentId: string}): JSX.Element  => {
  const [fixtures, setFixtures] = useState({});
  const [fixturesLoading, setFixturesLoading] = useState(false);
  
  useEffect(() => {
    (async () => {
      const fixtureData = await getFixtures(tournamentId);
      if (Object.keys(fixtureData).length > 0) {
        setFixturesLoading(true);
        setFixtures(fixtureData);
      }
    })();
  }, []);

  const fixturesContext = {
    fixtures,
    fixturesLoading,
    tournamentId
  };

  return (
    <FixturesContext.Provider value={fixturesContext}>
      {children}
    </FixturesContext.Provider>
  );
};

export default FixturesProvider;
