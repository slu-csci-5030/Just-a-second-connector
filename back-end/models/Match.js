import mongoose from "mongoose";

const Schema = mongoose.Schema;

const matchSchema = new Schema({
	data: Object,
});

export const Match = mongoose.model("Match", matchSchema);
