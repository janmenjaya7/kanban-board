// import * as React from "react";
// import clsx from "clsx";
// import { styled, css } from "@mui/system";
// import { Modal as BaseModal } from "@mui/base/Modal";
// import { Button } from "@mui/base/Button";

// export default function Modal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <TriggerButton onClick={handleOpen}>Open modal</TriggerButton>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="parent-modal-title"
//         aria-describedby="parent-modal-description"
//         slots={{ backdrop: StyledBackdrop }}
//       >
//         <ModalContent sx={style}>
//           <h2 id="parent-modal-title" className="modal-title">
//             Text in a modal
//           </h2>
//           <p id="parent-modal-description" className="modal-description">
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </p>
//           <ChildModal />
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// }

// function ChildModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <ModalButton onClick={handleOpen}>Open Child Modal</ModalButton>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//         slots={{ backdrop: StyledBackdrop }}
//       >
//         <ModalContent sx={[style, { width: "240px" }]}>
//           <h2 id="child-modal-title" className="modal-title">
//             Text in a child modal
//           </h2>
//           <p id="child-modal-description" className="modal-description">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//           </p>
//           <ModalButton onClick={handleClose}>Close Child Modal</ModalButton>
//         </ModalContent>
//       </Modal>
//     </React.Fragment>
//   );
// }

// // const Backdrop = React.forwardRef<
// //   HTMLDivElement,
// //   { open ? " ": boolean; className: string }
// // >((props, ref) => {
// //   const { open, className, ...other } = props;
// //   return (
// //     <div
// //       className={clsx({ 'base-Backdrop-open': open }, className)}
// //       ref={ref}
// //       {...other}
// //     />
// //   );
// // });
// // const Backdrop = React.forwardRef< HTMLDivElement,
// // { open?: boolean; className: string }  >(({ open, className, ...other }, ref) => {
// //     return (
// //       <div
// //         className={clsx({ 'base-Backdrop-open': open }, className)}
// //         ref={ref}
// //         {...other}
// //       />
// //     );
// //   });
// // const blue = {
// //   200: '#99CCFF',
// //   300: '#66B2FF',
// //   400: '#3399FF',
// //   500: '#007FFF',
// //   600: '#0072E5',
// //   700: '#0066CC',
// // };

// // const grey = {
// //   50: '#F3F6F9',
// //   100: '#E5EAF2',
// //   200: '#DAE2ED',
// //   300: '#C7D0DD',
// //   400: '#B0B8C4',
// //   500: '#9DA8B7',
// //   600: '#6B7A90',
// //   700: '#434D5B',
// //   800: '#303740',
// //   900: '#1C2025',
// // };

// // const Modal = styled(BaseModal)`
// //   position: fixed;
// //   z-index: 1300;
// //   inset: 0;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// // `;

// // const StyledBackdrop = styled(Backdrop)`
// //   z-index: -1;
// //   position: fixed;
// //   inset: 0;
// //   background-color: rgb(0 0 0 / 0.5);
// //   -webkit-tap-highlight-color: transparent;
// // `;

// // const style = {
// //   position: 'absolute' as 'absolute',
// //   top: '50%',
// //   left: '50%',
// //   transform: 'translate(-50%, -50%)',
// //   width: 400,
// // };

// // const ModalContent = styled('div')(
// //   ({ theme }) => css`
// //     font-family: 'IBM Plex Sans', sans-serif;
// //     font-weight: 500;
// //     text-align: start;
// //     position: relative;
// //     display: flex;
// //     flex-direction: column;
// //     gap: 8px;
// //     overflow: hidden;
// //     background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
// //     border-radius: 8px;
// //     border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
// //     box-shadow: 0 4px 12px
// //       ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
// //     padding: 24px;
// //     color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

// //     & .modal-title {
// //       margin: 0;
// //       line-height: 1.5rem;
// //       margin-bottom: 8px;
// //     }

// //     & .modal-description {
// //       margin: 0;
// //       line-height: 1.5rem;
// //       font-weight: 400;
// //       color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
// //       margin-bottom: 4px;
// //     }
// //   `,
// // );

// // const TriggerButton = styled(Button)(
// //   ({ theme }) => `
// //   font-family: 'IBM Plex Sans', sans-serif;
// //   font-weight: 600;
// //   font-size: 0.875rem;
// //   line-height: 1.5;
// //   padding: 8px 16px;
// //   border-radius: 8px;
// //   color: white;
// //   transition: all 150ms ease;
// //   cursor: pointer;
// //   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
// //   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
// //   color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
// //   box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

// //   &:hover {
// //     background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
// //     border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
// //   }

// //   &:active {
// //     background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
// //   }

// //   &:focus-visible {
// //     box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
// //     outline: none;
// //   }
// // `,
// // );

// // const ModalButton = styled(Button)(
// //   ({ theme }) => `
// //   font-family: 'IBM Plex Sans', sans-serif;
// //   font-weight: 600;
// //   font-size: 0.875rem;
// //   line-height: 1.5;
// //   background-color: ${blue[500]};
// //   padding: 8px 16px;
// //   border-radius: 8px;
// //   color: white;
// //   transition: all 150ms ease;
// //   cursor: pointer;
// //   border: 1px solid ${blue[500]};
// //   box-shadow: 0 2px 1px ${
// //     theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
// //   }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

// //   &:hover {
// //     background-color: ${blue[600]};
// //   }

// //   &:active {
// //     background-color: ${blue[700]};
// //     box-shadow: none;
// //   }

// //   &:focus-visible {
// //     box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
// //     outline: none;
// //   }

// //   &:disabled {
// //     opacity: 0.4;
// //     cursor: not-allowed;
// //     box-shadow: none;
// //     &:hover {
// //       background-color: ${blue[500]};
// //     }
// //   }
// // `,
// // );
// import { useEffect, useState } from "react";
// const Fetch = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const datas = await fetch(
//           "https://zany-gold-ladybug-hat.cyclic.app/feedbacks"
//         );
//         const fech = await datas.json();
//         setData(fech);
//         console.log(fech);
//       } catch (error) {
//         console.log("error somthing", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//       <h1>data somthinig</h1>
//       <ul>
//         {data.map((item, i) => {
//           return <li key={i}>{item.name}</li>;
//         })}
//       </ul>
//     </>
//   );
// };
// export default Fetch;
// import React, { useEffect, useState } from "react";

// const Fetch = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://zany-gold-ladybug-hat.cyclic.app/feedbacks"
//         );
//         const fetchedData = await response.json();
//         setData(fetchedData);
//         console.log(fetchedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <h1>Data something</h1>
//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>{item.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Fetch;
// import React from "react";

// function Modal() {
//   return (
//     <div style={{ width: "200px", border: "1px solid red" }}>
//       <div id="show">
//         <p id="open">
//           Suspendisse a dolor nulla. Praesent a egestas diam. Morbi facilisis
//           ultricies sagittis. Donec tincidunt, turpis ac facilisis dapibus,
//           sapien urna tincidunt justo, vitae egestas ipsum odio ac lacus.
//           <a id="myButton" href="#show">
//             more...
//           </a>
//         </p>
//         <p id="content">
//           Suspendisse a dolor nulla. Praesent a egestas diam. Morbi facilisis
//           ultricies sagittis. Donec tincidunt, turpis ac facilisis dapibus,
//           sapien urna tincidunt justo, vitae egestas ipsum odio ac lacus. Ut sit
//           amet consectetur nunc. Maecenas ut justo vitae nisi vulputate maximus.
//           Phasellus eu quam faucibus, porttitor diam eu, cursus quam. Nunc non
//           massa placerat, ornare justo ac, vulputate risus. Nunc tellus orci,
//           efficitur ac ipsum ut, bibendum gravida lacus. Suspendisse potenti.
//           Mauris in vehicula lorem. Suspendisse vehicula enim ac ultricies
//           iaculis. Etiam quis egestas arcu, vel consequat velit. Proin efficitur
//           arcu quam, in imperdiet sapien consectetur quis. Nam at ligula erat.
//           Suspendisse ullamcorper arcu at velit varius, id tincidunt augue
//           lobortis.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Modal;
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import "./App.css";

function Testing() {
  const [columns, setColumns] = useState([
    {
      id: "column-1",
      title: "To Do",
      cards: [
        { id: "card-1", content: "Task 1" },
        { id: "card-2", content: "Task 2" },
      ],
    },
    {
      id: "column-2",
      title: "In Progress",
      cards: [{ id: "card-3", content: "Task 3" }],
    },
    {
      id: "column-3",
      title: "Done",
      cards: [{ id: "card-4", content: "Task 4" }],
    },
  ]);
  console.log(columns);
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // If dropped outside the droppable area
    if (!destination) return;

    // If dropped in the same location
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const column = columns.find((col) => col.id === source.droppableId);
    const newCards = Array.from(column.cards);
    newCards.splice(source.index, 1);
    newCards.splice(
      destination.index,
      0,
      column.cards.find((card) => card.id === draggableId)
    );
    console.log("new cards", newCards);
    setColumns((prevColumns) =>
      prevColumns.map((col) => {
        if (col.id === source.droppableId) {
          return { ...col, cards: newCards };
        }
        return col;
      })
    );
  };

  return (
    <div className="board">
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((column) => (
          <div className="column" key={column.id}>
            <h2>{column.title}</h2>
            <Droppable droppableId={column.id}>
              {(provided) => (
                <div
                  className="cards"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {column.cards.map((card, index) => (
                    <Draggable
                      key={card.id}
                      draggableId={card.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {card.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
}

export default Testing;
