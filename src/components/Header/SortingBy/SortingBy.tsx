import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { sortingByVariants } from "../../../helpers/constants/sortingByVariants";
import { SortingByType } from "../../../helpers/models/sortingByVariants";
import { useAppDispatch, useAppSelector } from "../../../helpers/hooks/hooks";
import { setSelectedSortingBy } from "../../redux/appSlice/appSlice";

const SortingBy = () => {
  const { selectedSortingBy } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  return (
    <FormControl sx={{ width: 150 }} size="small">
      <InputLabel shrink id="sort-by-label">
        Sorting by
      </InputLabel>
      <Select
        labelId="sort-by-label"
        name="sort-by-select"
        value={selectedSortingBy}
        displayEmpty
        label="Sorting by"
        onChange={(e) =>
          dispatch(setSelectedSortingBy(e.target.value as SortingByType))
        }
      >
        {sortingByVariants.map((sortVariant) => (
          <MenuItem key={sortVariant} value={sortVariant}>
            {sortVariant}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortingBy;
