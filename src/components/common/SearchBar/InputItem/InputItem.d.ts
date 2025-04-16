type InputName = "where" | "checkin" | "checkout" | "checkwho";

export interface InputItemProps {
  inputName: InputName;
  activeInput: InputName | null;
  focusedInput: InputName | null;
  setHoveredInput: (name: InputName | null) => void;
  onFocus: () => void;
  children: React.ReactNode;
}
