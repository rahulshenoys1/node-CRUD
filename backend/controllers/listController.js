const asyncHandler = require("express-async-handler");

//@desc get lists
//@route GET /api/toDoList
//@access Private

const getLists = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get List` });
});

//@desc set list
//@route POST /api/toDoList
//@access Private

const setList = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: `Set List` });
});

//@desc Update list
//@route PUT /api/toDoList:id
//@access Private

const updateList = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update List ${req.params.id}` });
});

//@desc Delete lists
//@route DELETE /api/toDoList:id
//@access Private

const deleteList = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete List ${req.params.id}` });
});

module.exports = {
  getLists,
  setList,
  updateList,
  deleteList,
};
