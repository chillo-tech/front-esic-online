import React, {useState} from 'react';
import Link from 'next/link';
import { getDisplayedDate } from 'utils';

function Sessions({training}: any) {
  const [displaySessions, setDisplaySessions] = useState(false);
  return (
    <article className="md:hidden">
      <h3 className="bg-app-blue text-xs grid grid-cols-12 md:container items-center justify-center">
        <button type="button" className='py-3 text-white text-center col-span-5'
          onClick={() => setDisplaySessions((current) => !current)}
        >
          <span className='border-b border-white'>Nos prochaines sessions</span>
        </button>
        <Link href={'/contactez-nous'} className='py-3 text-white text-center col-span-7'>
          <span className='border-b border-white'>Comment financer la formation ?</span>
        </Link>
      </h3>
      {
        (displaySessions && training?.sessions) ? (
          <div className="sessions container pt-5">
            {training?.sessions?.map((item: any, index: number) =>
              Date.parse(item?.sessions_id.debut) >= Date.now() ? (
                <div
                  className="bg-white py-2 w-full shadow-xs text-slate-600 mb-3 px-2 border-l-8 border-[rgba(1,129,0)]"
                  key={`session-${index}`}>
                  <p className="mb-0">
                    Du {getDisplayedDate(item.sessions_id.debut)}
                  </p>
                  <p className="mb-0">
                    Au {getDisplayedDate(item.sessions_id.fin)}
                  </p>
                </div>
              ) : null
            )}
          </div>
        ): null
      }
     
      {/**
       
          <div className="md:hidden flex h-full mb-0 w-full mx-auto px-2 mt-4 items-start">
            <Accordion
              arrowIcon={() => null}
              alwaysOpen={true}
              className="bg-transparent border-none focus:border-none outline-none w-full flex-1">
              <Accordion.Panel
                isOpen={false}
                className="bg-transparent px-0 border-none focus:border-none">
                <Accordion.Title
                  onClick={() => setHideSessions(!hideSessions)}
                  color="white"
                  className="px-0 focus:ring-transparent focus:ring-0 focus:border-none text-center"
                  style={{
                    height: '1rem',
                    border: 'none',
                    borderBottom: 'none',
                    borderRadius: 0,
                    backgroundColor: 'transparent',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                  }}>
                  <span className="block border-b-2 border-white mx-0 px-0 h-full w-full justify-center text-white text-xs">
                    Nos prochaines sessions
                  </span>
                </Accordion.Title>
                <Accordion.Content
                  hidden={hideSessions}
                  style={{
                    borderRadius: 0,
                    border: 'none',
                  }}
                  className="absolute bg-white focus:border-none focus:ring-0 focus:ring-transparent h-fit px-5 py-5 w-full">
                  {training?.sessions?.map((item: any, index: number) =>
                    Date.parse(item?.sessions_id.debut) >= Date.now() ? (
                      <div
                        className="bg-white py-2 w-full shadow-xs text-slate-600 mb-3 px-2 border-l-8 border-[rgba(1,129,0)]"
                        key={`session-${index}`}>
                        <p className="mb-0">
                          Du {getDisplayedDate(item.sessions_id.debut)}
                        </p>
                        <p className="mb-0">
                          Au {getDisplayedDate(item.sessions_id.fin)}
                        </p>
                      </div>
                    ) : null
                  )}
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <div className="md:hidden relative text-white mt-3 mr-3 text-xs font-semibold flex items-center justify-center">
              <span className="block border-b-2 border-white">
                <Link href={'/contactez-nous'}>
                  <span>Comment financer la formation ?</span>
                </Link>
              </span>
            </div>
          </div>
       */}
    </article>
  )
}

export default Sessions