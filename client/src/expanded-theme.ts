import '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    lightGrey?: string;
    tableHeadCell?: string;
  }
  interface PaletteOptions {
    lightGrey?: string;
    tableHeadCell?: string;
  }
}
