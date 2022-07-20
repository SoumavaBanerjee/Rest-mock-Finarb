import express from "express";
import {
  addName,
  deleteName,
  getStore,
  updateName,
} from "../datastore/index.js";

/**
 * @desc get all names
 * @route GET /name
 */

export const getAllNames = (req, res) => {
  const result = getStore();
  res.send(result);
};

/**
 * @desc post a new name
 * @route POST /name
 */
export const addNewName = (req, res) => {
  const { name } = req.body;

  console.log(req.body);

  const result = addName(name);
  res.send(result);
};

/**
 * @desc put a name in index
 * @route PUT /name
 */

export const putName = (req, res) => {
  const { id, name } = req.body;
  const result = updateName(id, name);

  if (typeof result === "object") res.send(result);
  else
    res.json({
      error: result,
    });
};

/**
 * @desc delete name by index
 * @route DELETE /name
 */

export const deleteNamebyId = (req, res) => {
  const { id } = req.body;
  const result = deleteName(id);

  if (typeof result === "object") res.send(result);
  else
    res.json({
      error: result,
    });
};
