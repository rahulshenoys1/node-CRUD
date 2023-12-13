const asyncHandler = require("express-async-handler");

const List = require("../models/listModel");
//@desc get lists
//@route GET /api/toDoList
//@access Private

const getLists = asyncHandler(async (req, res) => {
  const lists = await List.find();
  res.status(200).json(lists);
});

//@desc set list
//@route POST /api/toDoList
//@access Private

const setList = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const list = await List.create({
    text: req.body.text,
  });

  res.status(200).json(list);
});

//@desc Update list
//@route PUT /api/toDoList:id
//@access Private

const updateList = asyncHandler(async (req, res) => {
  const list = await List.findById(req.params.id);

  if (!list) {
    res.status(400);
    throw new Error("Task not found");
  }

  const updatedList = await List.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedList);
});

//@desc Delete lists
//@route DELETE /api/toDoList:id
//@access Private

const deleteList = asyncHandler(async (req, res) => {
  const list = await List.findById(req.params.id);

  if (!list) {
    res.status(400);
    throw new Error("Task not found");
  }

  await list.deleteOne()

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getLists,
  setList,
  updateList,
  deleteList,
};
