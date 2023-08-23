import mongoose from "mongoose";

// create category schema

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },

    sector: {
      type: String,
      required: true,
    },
    subsector: {
      type: String,
      required: true,
    },
    microsector: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// export category

export default mongoose.model("user", userSchema);
