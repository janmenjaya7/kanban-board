// import React, { useState, useEffect } from "react";
// import { v4 as uuid4 } from "uuid";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import EditNoteIcon from "@mui/icons-material/EditNote";
// import toast, { Toaster } from "react-hot-toast";
// import { DragDropContext } from "react-beautiful-dnd";

// function Kanban() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem("todos"));
//     if (storedTodos) {
//       setTodos(storedTodos);
//     }
//   }, []);

//   const saveTodosToLocalStorage = (todos) => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   };

//   const HandelChange = () => {
//     if (todo.trim() !== "") {
//       const newTodo = { id: uuid4(), data: todo };
//       const updatedTodos = [...todos, newTodo];
//       setTodos(updatedTodos);
//       saveTodosToLocalStorage(updatedTodos);
//       toast.success("todo created successfully", {
//         duration: 3000,
//         style: {
//           padding: "20px",
//           height: "70%",
//           fontWeight: "bolder",
//           fontSize: "20px",
//           borderRadius: "30px",
//           backgroundImage: "linear-gradient(to top, #b3ffab 0%, #12fff7 100%)",
//           boxShadow:
//             "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
//         },
//       });
//       setTodo("");
//     }
//   };

//   const HandelRemove = (id) => {
//     const updatedTodos = todos.filter((val) => val.id !== id);
//     saveTodosToLocalStorage(updatedTodos);
//     setTodos(updatedTodos);
//     toast.success("Successfully Removed!", {
//       duration: 4000,
//       style: {
//         padding: "20px",
//         height: "80%",
//         fontWeight: "bolder",
//         fontSize: "20px",
//         borderRadius: "30px",
//         backgroundImage: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
//         boxShadow:
//           "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
//       },
//     });
//   };

//   const HandleEdit = (id, text) => {
//     // Handle edit functionality
//   };

//   const handleDrag = (item) => {
//     // console.log("dragable", item);
//   };

//   return (
//     <div>
//       <DragDropContext>
//         <div className="mean-section">
//           <div className="section-1">
//             <div className="card">
//               <h1>Section 1</h1>
//               <div className="input-field">
//                 <input
//                   type="text"
//                   value={todo}
//                   onChange={(e) => setTodo(e.target.value)}
//                   name="section-1"
//                 />
//                 <button onClick={HandelChange} className="add-btn">
//                   <AddCircleOutlineIcon />
//                 </button>
//               </div>
//             </div>
//             <div className="mean-lest">
//               {todos.map((item, i) => (
//                 <ul
//                   className="cards-section"
//                   key={item.id}
//                   draggable
//                   onDrag={(e) => handleDrag(e, { item, i })}
//                 >
//                   <li className="lest-item">
//                     {item.data}
//                     <div className="btn-edit-section">
//                       <button
//                         onClick={() => HandelRemove(item.id)}
//                         className="btn-delete"
//                       >
//                         <HighlightOffIcon fontSize="medium" />
//                       </button>

//                       <button
//                         className="btn-edit"
//                         onClick={() => HandleEdit(item.id, item.data)}
//                       >
//                         <EditNoteIcon fontSize="medium" />
//                       </button>
//                     </div>
//                   </li>
//                 </ul>
//               ))}
//             </div>
//           </div>

//           <div className="section-2">
//             <div className="card">
//               <h1>Section 2</h1>
//               <div className="input-field">
//                 <input type="text" name="section-2" />
//                 <button>Add</button>
//               </div>
//             </div>
//           </div>
//           <div className="section-3">
//             <div className="card">
//               <h1>Section 3</h1>
//               <div className="input-field">
//                 <input
//                   type="text"
//                   onChange={(e) => setTodo(e.target.value)}
//                   value={todo}
//                   name="section-3"
//                 />
//                 <button onClick={HandelChange}>Add</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Toaster />
//       </DragDropContext>
//     </div>
//   );
// }

// export default Kanban;

import React, { useState, useEffect } from "react";
import { v4 as uuid4 } from "uuid";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import toast, { Toaster } from "react-hot-toast";
import { DragDropContext } from "react-beautiful-dnd";
// import { Modal as BaseModal } from "@mui/base/Modal";

function Kanban() {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const storedTodos = setTodos(JSON.parse(localStorage.getItem("todos")));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);
  const saveData = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const HandelChange = () => {
    if (todo.trim() !== "") {
      const newTodo = [{ id: uuid4(), data: todo }];
      const updatedTodos = [...todo, newTodo];
      setTodos(updatedTodos);
      saveData(updatedTodos);
      toast.success("todo created successfully", {
        duration: 3000,
        style: {
          padding: "20px",
          height: "70%",
          fontWeight: "bolder",
          fontSize: "20px",
          borderRadius: "30px",
          backgroundImage: "linear-gradient(to top, #b3ffab 0%, #12fff7 100%)",
          boxShadow:
            "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        },
      });
      setTodo("");
    }
  };

  const HandelRemove = (id) => {
    const Remove = todos.filter((val) => val.id !== id);
    localStorage.setItem("todos", JSON.stringify(Remove));
    toast.success("Successfully Removed!", {
      duration: 4000,
      style: {
        padding: "20px",
        height: "80%",
        fontWeight: "bolder",
        fontSize: "20px",
        borderRadius: "30px",
        backgroundImage: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
        boxShadow:
          "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
      },
    });
    setTodos(Remove);
  };
  const HandleEdit = (id, text) => {};
  const handleDrag = (item) => {
    // console.log("dragable", item);
  };
  return (
    <div>
      <DragDropContext>
        <div className="mean-section">
          <div className="section-1">
            <div className="card">
              <h1>Section 1</h1>
              <div className="input-field">
                <input
                  type="text"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                  name="section-1"
                />
                <button onClick={HandelChange} className="add-btn">
                  <AddCircleOutlineIcon />
                </button>
              </div>
            </div>
            <div className="mean-lest">
              {todos.map((item, i) => (
                <ul
                  className="cards-section"
                  key={item.id}
                  draggable
                  onDrag={(e) => handleDrag(e, { item, i })}
                >
                  <li className="lest-item">
                    {item.data}
                    <div className="btn-edit-section">
                      <button
                        onClick={() => HandelRemove(item.id)}
                        className="btn-delete"
                      >
                        <HighlightOffIcon fontSize="medium" />
                      </button>

                      <button className="btn-edit" onClick={HandleEdit}>
                        <EditNoteIcon fontSize="medium" />
                      </button>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className="section-2">
            <div className="card">
              <h1>Section 2</h1>
              <div className="input-field">
                <input type="text" name="section-2" />
                <button>Add</button>
              </div>
            </div>
          </div>
          <div className="section-3">
            <div className="card">
              <h1>Section 3</h1>
              <div className="input-field">
                <input
                  type="text"
                  onChange={(e) => setTodo(e.target.value)}
                  value={todo}
                  name="section-3"
                />
                <button onClick={HandelChange}>Add</button>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </DragDropContext>
    </div>
  );
}

export default Kanban;

// import React, { useState } from "react";
// import { v4 as uuid4 } from "uuid";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import EditNoteIcon from "@mui/icons-material/EditNote";
// import toast, { Toaster } from "react-hot-toast";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { Modal, Button } from "@mui/material";

// function Kanban() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [openModal, setOpenModal] = useState(false);
//   const [deletedItemId, setDeletedItemId] = useState(null);

//   const handleChange = (e) => {
//     setTodo(e.target.value);
//   };

//   const handleAdd = () => {
//     if (todo.trim() !== "") {
//       setTodos((prev) => [...prev, { id: uuid4(), data: todo }]);
//       setTodo("");
//     }
//   };

//   const handleRemove = (id) => {
//     setDeletedItemId(id);
//     setOpenModal(true);
//   };

//   const handleConfirmDelete = () => {
//     const updatedTodos = todos.filter((todo) => todo.id !== deletedItemId);
//     setTodos(updatedTodos);
//     setOpenModal(false);
//     setDeletedItemId(null);
//     toast.success("Successfully Removed!");
//   };

//   const handleCancelDelete = () => {
//     setOpenModal(false);
//     setDeletedItemId(null);
//   };

//   const onDragEnd = (result) => {
//     if (!result.destination) return; // dropped outside the list
//     const items = Array.from(todos);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);
//     setTodos(items);
//   };
//   const handleEdit = () => {};
//   return (
//     <div>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <div className="mean-section">
//           <Droppable droppableId="todoList">
//             {(provided) => (
//               <ul
//                 className="section-1"
//                 {...provided.droppableProps}
//                 ref={provided.innerRef}
//               >
//                 <div className="card">
//                   <h1>Section 1</h1>
//                   <div className="input-field">
//                     <input
//                       type="text"
//                       value={todo}
//                       onChange={handleChange}
//                       name="section-1"
//                     />
//                     <button onClick={handleAdd} className="add-btn">
//                       <AddCircleOutlineIcon />
//                     </button>
//                   </div>
//                 </div>
//                 {todos.map((item, index) => (
//                   <Draggable key={item.id} draggableId={item.id} index={index}>
//                     {(provided) => (
//                       <li
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         className="lest-item"
//                       >
//                         {item.data}
//                         <div className="btn-edit-section">
//                           <button
//                             onClick={() => handleRemove(item.id)}
//                             className="btn-delete"
//                           >
//                             <HighlightOffIcon fontSize="medium" />
//                           </button>
//                           <button
//                             className="btn-edit"
//                             onClick={() => handleEdit(item.id, item.data)}
//                           >
//                             <EditNoteIcon fontSize="medium" />
//                           </button>
//                         </div>
//                       </li>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </ul>
//             )}
//           </Droppable>
//         </div>
//       </DragDropContext>
//       <Toaster />
//       <Modal
//         open={openModal}
//         onClose={handleCancelDelete}
//         aria-labelledby="delete-modal-title"
//         aria-describedby="delete-modal-description"
//       >
//         <div className="modal">
//           <h2 id="delete-modal-title">Confirm Deletion</h2>
//           <p id="delete-modal-description">
//             Are you sure you want to delete this item?
//           </p>
//           <Button onClick={handleConfirmDelete} color="error">
//             Delete
//           </Button>
//           <Button onClick={handleCancelDelete}>Cancel</Button>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default Kanban;
