import { Request, Response } from "express";
import pool from "../db";

export const addFavourite = async (req: Request, res: Response) => {
  const { id, name, address, type } = req.body;
  if (!name || !address) {
    return res.status(400).json("Name or Address is missing");
  }
  try {
    const result = await pool.query(
      "INSERT INTO favourites (id, name, address, type) VALUES ($1, $2, $3, $4) RETURNING *",
      [id, name, address, type]
    );
    res.status(201).json(result.rows[0]);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getFavourite = async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM favourites");
    res.status(200).json(result.rows);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const removeFavourite = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "Invalid favourite ID" });
  }
  try {
    const result = await pool.query("DELETE FROM favourites WHERE id =$1", [
      id,
    ]);
    res.status(200).json({
      message: "Favourite removed succesfully",
      removeFavouriteList: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
