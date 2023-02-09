/* eslint-disable react/jsx-props-no-spreading */
import { MotiProps, MotiView as MotiViewDef } from 'moti';
import { StyleSheet, ViewProps, ViewStyle } from 'react-native';

const MotiView = (props: MotiProps<ViewStyle> & ViewProps) => {
  const { children, className, exit, transition, ...rest } = props;
  return (
    <MotiViewDef
      {...rest}
      className={className}
      exit={{
        opacity: 0,
        translateX: -100,
        ...(exit as object),
      }}
      transition={{
        type: 'timing',
        delay: 100,
        duration: 500,
        ...(transition as object),
      }}
    >
      {children}
    </MotiViewDef>
  );
};

export default MotiView;

const styles = StyleSheet.create({});
