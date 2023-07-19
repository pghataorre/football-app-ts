import { useEffect, useState } from 'react';
import { FixturesContext } from './FixturesContext';
import getFixtures from '../contextApi/getFixtures';

const FixturesProvider = ({children, tournamentId = '2'}: {children: JSX.Element, tournamentId: string}): JSX.Element  => {
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
  }, [tournamentId]);

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
