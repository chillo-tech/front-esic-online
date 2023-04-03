import classNames from 'classnames';
import React from 'react'
import { LOCATION_MAPPING } from 'utils/constants';

function Localisation({localisation, classes = "font-bold text-white" }: any) {
  if(!localisation) return null;
  const mapped = localisation.map((item: any) =>LOCATION_MAPPING[item]).join(" | ");
  return <p className={classNames("text-lg mr-2", classes)}>{mapped}</p>
}

export default Localisation