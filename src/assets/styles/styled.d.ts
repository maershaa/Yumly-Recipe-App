import 'styled-components';
import type { Theme as AppTheme } from '@/types';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
