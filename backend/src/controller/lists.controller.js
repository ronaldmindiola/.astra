const listsCtrl = {};

const List = require("../model/lists.model");

// Get Lists
listsCtrl.getLists = async (req, res) => {
    const lists = await List.find();
    res.json(lists);
    res.json({ message: "Lists Loaded!" });
}

// Search List
listsCtrl.getList = async (req, res) => {
    const list = await List.findById(req.params.id);
    res.json(list);
}

// New List
listsCtrl.createList = async (req, res) => {
  const { name, description } = req.body;
  const newList = new List({
    name,
    description,
  });
  await newList.save();
  res.json({ message: "List Saved!" });
};

// Update List
listsCtrl.updateList = async (req, res) => {
    const { name, description } = req.body;
    await List.findOneAndUpdate({_id: req.params.id}, {
        name,
        description
    });
    res.json({message: 'List Updated'})
}

// Delete List
listsCtrl.deleteList = async (req, res) => {
    const { _id } = req.body;
    await List.findOneAndDelete({_id: req.params.id}, {
        _id
    });
    res.json({message: 'List Deleted'})
}

module.exports = listsCtrl;