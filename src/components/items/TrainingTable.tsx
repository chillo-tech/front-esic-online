import React from 'react'
import { BiCoinStack } from 'react-icons/bi'
import Debug from 'components/Debug';
import { BsBarChart } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';

function TrainingTable({data}: any) {
  return (
    <article className="items-center mb-3 bg-slate-100 px-6 py-5 grid grid-cols-7 rounded-lg text-gray-700">
      <div className='col-span-4'>
        <h2 className="text-2xl font-extrabold">{data.libelle}</h2>
        <p className="flex">
        {
            data.duree_en_jours ? 
            <span className="flex items-center py-2 pr-3">
              <AiOutlineClockCircle className="mr-2 text-green-600 text-xl" />
              <span>{data.duree_en_jours} Jours</span>
            </span>
            : 
            null
          }{
            data.duree_en_heures ? 
            <span className="flex items-center py-2 pr-3">
              <AiOutlineClockCircle className="mr-2 text-green-600 text-xl" />
              <span>{data.duree_en_heures} Heures</span>
            </span>
            : 
            null
          }
        </p>
      </div>
      <div className='col-span-2'>
      {
        (data.cpf) ? 
        <p className="flex items-center pr-3">
          <BiCoinStack className="mr-2 text-yellow-600 text-xl"/> 
          Eligible au CPF
        </p> 
        : 
        null
      }
      <p className="flex items-center my-1">
        <BsBarChart className="mr-2 text-green-600 text-xl"/> 
        <span>
          {data.niveau === "BEGINNER" ? 'Débutant': null}
          {data.niveau === "INTERMEDIARY" ? 'Intermediaire': null}
          {data.niveau === "ADVANCED" ? 'Avancé': null}
        </span>
      </p> 
      </div>
      <div className='lex-col flex justify-between'>
        <div>
          <p>{data.presentiel ? 'Présentiel': null}</p>
          <p>{data.distanciel ? 'Classe à distance': null}</p>
        </div>
        <div>
          <p>{data.prix ? data.prix : null}</p>
        </div>
      </div>
      
    </article>
  )
}

export default TrainingTable
