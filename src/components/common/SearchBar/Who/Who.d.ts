export interface WhoProps {
  isFocused: boolean;
  onFocus: () => void;
  inputRef: Ref<HTMLInputElement> | undefined;
  enableSearchButton: boolean;
}
