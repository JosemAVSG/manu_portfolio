import { Inter } from "next/font/google";
import localFont from '@next/font/local'

export const Sequel_Sans = localFont({
  src: [
    {
      path: '../../public/fonts/Sequel_Sans_Light_Body.otf',
      weight: '300'
    },
    {
      path: '../../public/fonts/Sequel_Sans_Medium_Body.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Sequel_Sans_Bold_Body.otf',
      weight: '700'
    }
  ],
  variable: '--font-sequel-sans',
}) 
export const inter = Inter({ subsets: ["latin"] });
