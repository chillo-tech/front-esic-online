import React from 'react'

function Certification({certifications = []}: any) {
  return (
    <>
      {(certifications && certifications.length) ? (
        <div className="text-white">
          {certifications.map((certification: any) => (
            <p key={certification.certifications_id.id} className="flex py-2 text-lg">
              <span>{certification.certifications_id.nom}</span>              
              <span className="px-1">|</span>
              <span>
                CODE RS ou RNCP 
                <b className="ml-1">{certification.certifications_id.CODE_RS ? certification.certifications_id.CODE_RS: certification.certifications_id.CODE_RNCP}</b>
              </span>
            </p>
          ))}
        </div>
      ) : null}
    </>
  )
}

export default Certification