import { ContainerProps } from './Container';

export const Container = ({ children, className }: ContainerProps) => (
  <div className={'mx-auto px-6 sm:px-6 md:px-10 lg:px-20 xl:px-20 ' + className}>{children}</div>
);
