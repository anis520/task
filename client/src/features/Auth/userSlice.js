import { createSlice } from "@reduxjs/toolkit";
import { addSector, deleteSector, getSector } from "./userapiSlice";

//create auth slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    sectors: [],
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // regester
    builder.addCase(addSector.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addSector.fulfilled, (state, action) => {
      (state.loading = false),
        state.sectors.push(action.payload.data.data),
        (state.message = action.payload.data.message);
    });
    builder.addCase(addSector.rejected, (state, action) => {
      (state.message = action.error.message), (state.loading = false);
    });

    builder.addCase(getSector.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getSector.fulfilled, (state, action) => {
      (state.loading = false),
        (state.sectors = action.payload.data.data),
        (state.message = action.payload.data.message);
    });
    builder.addCase(getSector.rejected, (state, action) => {
      (state.message = action.error.message), (state.loading = false);
    });
    builder.addCase(deleteSector.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteSector.fulfilled, (state, action) => {
      (state.loading = false), (state.message = action.payload.data.message);
      state.sectors = state.sectors.filter(
        (i) => i._id !== action.payload.data.data._id
      );
    });
    builder.addCase(deleteSector.rejected, (state, action) => {
      (state.message = action.error.message), (state.loading = false);
    });

    // // loging

    // builder.addCase(userLogin.pending, (state, action) => {
    //   state.loading = true;
    // });

    // builder.addCase(userLogin.fulfilled, (state, action) => {
    //   (state.loading = false),
    //     (state.message = action.payload.data.message),
    //     (state.user = action.payload.data.user);
    //   localStorage.setItem("user", JSON.stringify(action.payload.data.user));
    // });

    // builder.addCase(userLogin.rejected, (state, action) => {
    //   (state.loading = false), (state.error = action.error.message);
    // });

    // // logout

    // builder.addCase(userLogout.pending, (state, action) => {
    //   state.loading = true;
    // });

    // builder.addCase(userLogout.fulfilled, (state, action) => {
    //   (state.loading = false),
    //     (state.message = action.payload.data.message),
    //     (state.user = null);
    //   localStorage.removeItem("user");
    // });

    // // get me

    // builder.addCase(userMe.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(userMe.fulfilled, (state, action) => {
    //   (state.loading = false),
    //     (state.message = action.payload.data.message),
    //     (state.user = action.payload.data.me);
    //   // localStorage.setItem("user", JSON.stringify(action.payload.data.user));
    // });

    // builder.addCase(userMe.rejected, (state, action) => {
    //   (state.loading = false), console.log(action.error.message);
    //   (state.error = action.error.message), (state.user = null);
    //   localStorage.removeItem("user");
    // });

    // //create post
    // builder.addCase(userPost.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(userPost.fulfilled, (state, action) => {
    //   state.message = action.payload.data.message;
    //   state.loading = false;
    //   state.posts.push(action.payload.data.post);
    // });
    // builder.addCase(userPost.rejected, (state, action) => {
    //   (state.error = action.error.message), (state.loading = false);
    // });

    // //get post
    // builder.addCase(getPost.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(getPost.fulfilled, (state, action) => {
    //   state.message = action.payload.data.message;
    //   state.loading = false;
    //   state.posts = action.payload.data.post;
    // });
    // builder.addCase(getPost.rejected, (state, action) => {
    //   (state.error = action.error.message), (state.loading = false);
    // });
    // //get users

    // builder.addCase(getAllUsers.fulfilled, (state, action) => {
    //   state.message = action.payload.data.message;
    //   state.loading = false;
    //   state.users = action.payload.data.users;
    // });
    // builder.addCase(getAllUsers.rejected, (state, action) => {
    //   (state.error = action.error.message), (state.loading = false);
    // });
    // //get users

    // builder.addCase(getFollowUser.fulfilled, (state, action) => {
    //   state.message = action.payload.data.message;
    //   state.loading = false;
    //   state.user = action.payload.data.user;
    // });
    // builder.addCase(getFollowUser.rejected, (state, action) => {
    //   (state.error = action.error.message), (state.loading = false);
    // });

    // //get like a post

    // builder.addCase(getLikePost.fulfilled, (state, action) => {
    //   // state.posts = action.payload.data.user;
    //   state.posts[
    //     state.posts.findIndex(
    //       (data) => data._id === action.payload.data.post._id
    //     )
    //   ] = action.payload.data.post;
    // });
    // builder.addCase(getLikePost.rejected, (state, action) => {
    //   state.error = action.error.message;
    // });

    // //get update user photo

    // builder.addCase(getUpdatePhoto.fulfilled, (state, action) => {
    //   // state.posts = action.payload.data.user;
    //   state.user = action.payload.data.user;
    // });
    // builder.addCase(getUpdatePhoto.rejected, (state, action) => {
    //   state.error = action.error.message;
    // });
  },
});

//export

// selectors
export const getUserData = (state) => state.auth;
// action
export const { setMessageEmpty } = userSlice.actions;
// slice
export default userSlice.reducer;
