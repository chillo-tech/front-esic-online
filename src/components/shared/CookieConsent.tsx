import React from 'react';
import { hasCookie, setCookie } from 'cookies-next';
import Link from 'next/link';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    const cookie = hasCookie('esic-online-com');
    if(cookie){
      setShowConsent(false);
    }
  }, []);

  const acceptCookie = () => {
    setShowConsent(false);
    setCookie('esic-online-com', 'true', {});
  };
  return (
    <>
      {showConsent ? (
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-app-blue text-white z-40">
          <div className="container">
            <p>Bienvenue sur le site</p>
            <h2 className="font-extrabold text-3xl">esic online</h2>
            <p>
              Nous utilisons plusieurs services de mesure d&agrave;audience et de comportement sur
              notre site. Ces services nous permettent d&agrave;am&eacute;liorer celui-ci.
            </p>
            <p>
              Lire{' '}
              <Link href={'/mentions-legales-31'} className="underline">
                notre politique de confidentialité
              </Link>
            </p>

            <p className="flex gap-2 pt-2">
              <button className="outline-white-button" onClick={() => setShowConsent(false)}>
                Refuser
              </button>
              <button className="white-button" onClick={() => acceptCookie()}>
                Accepter
              </button>
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CookieConsent;
