import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { categoriesList } from "../../../helpers/constants/categoriesList";
import { CategoriesType } from "../../../helpers/models/categories";
import { useAppDispatch, useAppSelector } from "../../../helpers/hooks/hooks";
import { setSelectedCategory } from "../../redux/appSlice/appSlice";

const Categories = () => {
  const { selectedCategory } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  return (
    <FormControl sx={{ width: 150 }} size="small">
      <InputLabel shrink id="categories-label">
        Categories
      </InputLabel>
      <Select
        labelId="categories-label"
        name="categories-select"
        value={selectedCategory}
        displayEmpty
        notched
        label="Categories"
        onChange={(e) =>
          dispatch(setSelectedCategory(e.target.value as CategoriesType))
        }
      >
        <MenuItem value="">all</MenuItem>
        {categoriesList.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Categories;
