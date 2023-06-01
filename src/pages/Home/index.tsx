// import React, { useState, useEffect } from "react";
// import "./index.css";

// const data = new Array(10).fill(0).map((v, i) => i);
// const Home = () => {
//   const [list, setList] = useState<any>([]);
//   useEffect(() => {
//     setList([...data]);
//   }, []);
//   return (
//     <div className='home'>
// 			<div className='listWrap'>
// 				{list.map((item, index) => {
// 					return (
// 						<div key={index} className='listItem'>
// 							{item}
// 						</div>
// 					);
// 				})}
// 			</div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { rectSortingStrategy } from "@dnd-kit/sortable";
import {Sortable, Props as SortableProps} from './Sortable';
import {GridContainer} from '../Home/components/GridContainer';


const props: Partial<SortableProps> = {
  adjustScale: true,
  Container: (props: any) => <GridContainer {...props} columns={5} />,
  strategy: rectSortingStrategy,
  wrapperStyle: () => ({
    width: 140,
    height: 140,
  }),
};

export const BasicSetup = () => <Sortable {...props} />;
