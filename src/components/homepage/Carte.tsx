
import { useLoadScript, GoogleMap,MarkerF } from '@react-google-maps/api';
import { useMemo } from 'react';

const Carte = ({adresses = []}: {adresses: any[]}) => {
    console.log(adresses);
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({ lat: 46.71109, lng: 1.7191036}),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      zoom: 6
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
    {
      adresses ? (
        <div className='flex justify-center items-center relative'>
          <div className="h-96 rounded-xl overflow-hidden">
            <GoogleMap
              options={mapOptions}
              zoom={14}
              center={mapCenter}
              mapTypeId={google.maps.MapTypeId.ROADMAP}
              mapContainerStyle={{ width: '800px', height: '384px' }}
            >
              <>
              {
                  adresses.map((adresse: any, index: number) => (
                      <MarkerF 
                        key={`adresse-${adresse.id}-${index}`} 
                        position={{ lat: parseFloat(adresse.latitude), lng: parseFloat(adresse.longitude)}}
                      />
                  ))
              }
              </>
                
            </GoogleMap>
          </div>
        </div>
      ) :null
    }
    </>
  );
};

export default Carte;