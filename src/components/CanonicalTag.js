import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://udugiriinfratech.in';

function CanonicalTag() {
  const { pathname } = useLocation();
  const canonical = `${BASE_URL}${pathname === '/' ? '' : pathname}`;
  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}

export default CanonicalTag;
