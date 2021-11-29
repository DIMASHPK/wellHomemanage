export interface CommonDialogTypes {
  open: boolean;
  title: string | JSX.Element;
  onClose?: () => void;
  withCloseButton?: boolean;
  classes?: Partial<{
    titleContainer: string;
    closeButton: string;
    titleClass: string;
    modalContainer: string;
    closeButtonIcon: string;
  }>;
}
