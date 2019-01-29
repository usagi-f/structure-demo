import * as React from 'react'
import { Avatar, IAvatarProps, ThemeProvider, Context, ColorsWithHash } from 'usagi-sandbox-lib';
import Buttons from '../components/Buttons'

const avatarProps: IAvatarProps = {
  alt: 'Sample Avatar',
  size: 64,
}

export default () => (
  <ThemeProvider value={{ theme: 'dark' } as Context}>
    <Buttons />
    <Avatar />
    <Avatar {...avatarProps} />
    <div style={{ backgroundColor: ColorsWithHash.red400, width: 50, height: 50 }} />
    <div style={{ backgroundColor: ColorsWithHash.red300, width: 50, height: 50 }} />
    <div style={{ backgroundColor: ColorsWithHash.red200, width: 50, height: 50 }} />
    <div style={{ backgroundColor: ColorsWithHash.red100, width: 50, height: 50 }} />
    <div style={{ backgroundColor: ColorsWithHash.red50, width: 50, height: 50 }} />
  </ThemeProvider>
);
