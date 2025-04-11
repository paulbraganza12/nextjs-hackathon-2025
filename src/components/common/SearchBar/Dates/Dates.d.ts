export interface DatesProps {
  isFocused: boolean;
  onFocus: () => void;
  inputRef: Ref<HTMLInputElement> | undefined;
  type: 'in' | 'out';
}
