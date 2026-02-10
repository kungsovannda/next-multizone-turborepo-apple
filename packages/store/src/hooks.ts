import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./index";

// Typed hooks
export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: <TSelected>(
  selector: (state: RootState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean,
) => TSelected = useSelector;
