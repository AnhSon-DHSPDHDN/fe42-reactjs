import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productApis } from "../../../apis/product";
import { message } from "antd";

export type TProduct = {
  id: string;
  img: string;
  name: string;
};

export type TProductState = {
  products: TProduct[];
  loading: boolean;
  product: TProduct;
};

const initialState: TProductState = {
  products: [],
  loading: false,
  product: {
    id: "",
    img: "",
    name: "",
  },
};

export const actFetchProductById = createAsyncThunk(
  "products/actFetchProductById",
  async (productId: string, thunkApi) => {
    try {
      return await productApis.getProductById(productId);
    } catch (error) {
      return thunkApi.rejectWithValue("Fetch product fail");
    }
  }
);

export const actFetchAllProducts = createAsyncThunk(
  "products/fetchAllProduct",
  async (params: Record<string, any> = {}, thunkApi) => {
    try {
      return await productApis.getAllProducts(params);
    } catch (error) {
      return thunkApi.rejectWithValue("Error when fetch products");
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actFetchAllProducts.pending, (state, _) => {
      state.loading = true;
    });
    builder.addCase(actFetchAllProducts.rejected, (state, action) => {
      // action.payload is "Error when fetch products"
      message.error(action.payload as string);
      state.loading = false;
    });
    builder.addCase(actFetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload as TProduct[];
      state.loading = false;
    });
    builder.addCase(actFetchProductById.fulfilled, (state, action) => {
      state.product = action.payload as TProduct;
    });
    builder.addCase(actFetchProductById.rejected, (state, action) => {
      message.error(action.payload as string);
    });
  },
});

export const productReducer = productSlice.reducer;
