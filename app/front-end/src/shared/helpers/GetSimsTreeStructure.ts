import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';

import axios from 'axios';

export interface SimsProps {
  id: number;
  name: string;
  parentFirstId?: number;
  parentSecondId?: number;
  partners?: JSON;
  image: string;
  userId: number;
}

export interface nodesProps {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: {
    name: string;
    image: string;
    firstParent: string;
    secondParent: string;
    partners?: string[];
    fixedY: number;
  };
}

export interface edgesProps {
  id: string;
  type: string;
  source: string;
  target: string;
}

const GetSimsTreeStructure = (simData: SimsProps[]) => {
  const nodes: nodesProps[] = [];
  const edges: edgesProps[] = [];

  // const myNewArray = myArray.map((item, index) =>  { return {"number" :index + 1, ...item} }
  // sim birthYear === Y = previousSimY + (currentSimBirthYear - previousSimY.birtYear)
  simData.forEach((sim) => {
    nodes.push({
      id: `${sim.id}`,
      type: 'simNode',
      position: { x: 0, y: sim.id * 10 + 1 },
      data: {
        name: sim.name,
        image: sim.image ?? '',
        firstParent: simData.find((s) => s.id === sim.parentFirstId)?.name ?? '',
        secondParent: simData.find((s) => s.id === sim.parentSecondId)?.name ?? '',
        fixedY: sim.id * 100 + 1,
      },
    });
  });

  /*   const root = data.find((sim) => !sim.parentFirstId && !sim.parentSecondId);
  if (!root) return;
  data.forEach((dat) => {
    if (dat.parentFirstId === root.id || dat.parentSecondId === root.id) {
      childrens.push({ name: dat.name, attributes: { photo: dat.image, age: dat.id }, children: [] });
    }
  }); */
  return nodes;
};

export default GetSimsTreeStructure;
