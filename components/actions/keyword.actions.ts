"use server"

// Import the necessary modules and models
import { Request, Response } from "express";
import { Keyword } from "../data/keyword.model";
import User from "../data/user.model";

// Function to create a new keyword
export async function createKeyword(req: Request, res: Response): Promise<void> {
  try {
    const { name } = req.body;

    // Create a new keyword
    const keyword = new Keyword({ name });
    await keyword.save();

    res.status(201).json({ message: "Keyword created successfully", keyword });
  } catch (error: any) {
    res.status(500).json({ error: "Failed to create keyword" });
  }
}

// Function to add a user to a keyword
export async function addUserToKeyword(req: Request, res: Response): Promise<void> {
  try {
    const { userId, keywordId } = req.body;

    // Find the user and keyword by their respective IDs
    const user = await User.findById(userId);
    const keyword = await Keyword.findById(keywordId);

    // Add the keyword ID to the user's keywords array
    if (user && keyword) {
      user.keywords.push(keywordId);
      await user.save();

      // Add the user ID to the keyword's User array
      keyword.User.push(userId);
      await keyword.save();

      res.json({ message: "User added to the keyword successfully" });
    } else {
      res.status(404).json({ error: "User or keyword not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: "Failed to add user to keyword" });
  }
}

// Function to remove a user from a keyword
export async function removeUserFromKeyword(req: Request, res: Response): Promise<void> {
  try {
    const { userId, keywordId } = req.body;

    // Find the user and keyword by their respective IDs
    const user = await User.findById(userId);
    const keyword = await Keyword.findById(keywordId);

    // Remove the keyword ID from the user's keywords array
    if (user && keyword) {
      user.keywords = user.keywords.filter((id: string) => id !== keywordId);
      await user.save();

      // Remove the user ID from the keyword's User array
      keyword.User = keyword.User.filter((id: string) => id !== userId);
      await keyword.save();

      res.json({ message: "User removed from the keyword successfully" });
    } else {
      res.status(404).json({ error: "User or keyword not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: "Failed to remove user from keyword" });
  }
}


